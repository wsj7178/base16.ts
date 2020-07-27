import IBase16 from "./IBase16";
import StringArrayConverter from "./StringArrayConverter";

export default class Base16 implements IBase16{
  decode(target: string): ArrayBuffer {
    return target
  }
  encode(target: (string|ArrayBuffer)): string {
    if (target instanceof ArrayBuffer) {
      const view: Uint8Array = new Uint8Array(target)
      let result = ''
      for (let i = view.length - 1; i >= 0; i--) {
        result += view[i]
      }
      return result
    } else {
      return this.encode(new Uint32Array(StringArrayConverter.stringToBytesArray(target)).buffer)
    }
  }
}