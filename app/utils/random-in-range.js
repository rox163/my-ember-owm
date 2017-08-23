export default function randomInRange(to, from , fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}
