import UintNArray from 'uint-n-array'
import IBase16 from "./IBase16";
import StringArrayConverter from "./StringArrayConverter";

export default class Base16 implements IBase16{
  decode(target: string): ArrayBuffer {
    return UintNArray.encode(4, StringArrayConverter.stringToBytesArray(target))
  }
  encode(target: (string|ArrayBufferLike)): string {
    if (typeof(target) === 'string') {
      const bytesArray = new Uint16Array(StringArrayConverter.stringToBytesArray(target))
      return this.encode(bytesArray.buffer)
    } else {
      const view4 = UintNArray.decode(4, target)
      return view4.reduce((prev, cur) => {
        return prev + cur.toString(16)
      }, '')
    }
  }
}