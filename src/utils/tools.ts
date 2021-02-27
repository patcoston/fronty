export const rand = (low: number, high: number) => {
  let len = high - low + 1
  let rnd: number = Math.floor(Math.random() * Math.floor(len - 1)) + low
  return rnd as number
}
