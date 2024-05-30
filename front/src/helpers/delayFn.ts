export async function delayFn(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
