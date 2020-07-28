import IBase16 from "./IBase16";
import StringArrayConverter from "./StringArrayConverter";

export default class Base16 implements IBase16{
  decode(target: string): ArrayBuffer {
    return new Uint8Array(StringArrayConverter.stringToBytesArray(target)).buffer
  }
  encode(target: (string|ArrayBuffer)): string {
    if (target instanceof ArrayBuffer) {
      const view8: Uint8Array = new Uint8Array(target)
      return view8.reduce((prev, cur) => {
        return prev + cur.toString(16)
      }, '')
    } else {
      return this.encode(new Uint32Array(StringArrayConverter.stringToBytesArray(target)).buffer)
    }
  }
}