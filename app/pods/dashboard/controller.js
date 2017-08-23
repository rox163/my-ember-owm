import Ember from 'ember';
const {$, Logger, inject, isEmpty} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import randomInRange from 'kci/utils/random-in-range'
import {getCountryCode, getCountryName} from 'kci/utils/country-code-convertor'

const NAMESPACE = 'http://api.openweathermap.org/data/2.5/weather'
const APPKEY = '0d4033e4068ae9d3402e4c0037026b62'

export default Ember.Controller.extend({
  // -- Properties
  formLayout: 'vertical',

  // -- Functions
  makeWeatherRequestByLatLong (lat, lon) {
    $.getJSON(`${NAMESPACE}?&appid=${APPKEY}&lat=${lat}&lon=${lon}&units=metric`)
      .then((response) => {
        this.set('response', response)
      })
      .catch((e) => {
        this.set('errMessage', 'Unable to retrieve weather information')
        Logger.log(e)
      })
  },

  makeWeatherRequestByCity (city, country) {

    $.getJSON(`${NAMESPACE}?q=${city},${country}&appid=${APPKEY}&units=metric`)
      .then((response) => {
        // OWM defaults to 'Connaught Place' for any undefined query params
        if (isEmpty(country) && city !== 'Connaught Place' && response.name === 'Connaught Place') {
          this.set('errMessage', 'Unable to retrieve weather information')
        } else {
          this.set('errMessage','')
          this.set('response', response)
        }
      })
      .catch((e) => {
        this.set('errMessage', 'Unable to retrieve weather information')
        Logger.log(e)
      })
  },

  // -- Computed Properties
  @readOnly
  @computed('response.coord.lat')
  latSuffix(latitude) {
    return latitude > 0 ? 'N' : 'S'
  },

  @readOnly
  @computed('response.coord.lon')
  longSuffix(longitude) {
    return longitude > 0 ? 'E' : 'W'
  },

  // -- Actions
  actions: {
    randomizeCity () {
      this.set('response', null)
      const lon = randomInRange(-180, 180, 3)
      const lat = randomInRange(-90, 90, 3)

      this.makeWeatherRequestByLatLong(lat, lon)
    },

    submit (value) {
      this.set('response', null)
      let countryCode
      if (value.country && value.country.length > 2) {
        countryCode = getCountryCode(value.country)
      }
      this.makeWeatherRequestByCity(value.city, countryCode)
    }
  }
});
