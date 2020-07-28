export default {
  stringToBytesArray(str: string): number[] {
    const result: number[] = []
    for (let i = 0; i < str.length; i++) {
      result.push(str.charCodeAt(i))
    }
    return result
  },
  bytesArrayToString(arr: number[]): string {
    return String.fromCharCode(...arr)
  }
}