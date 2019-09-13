import Mod from './mod';
import IoType from './ioType';
import Cardinal from './cardinal';

export default class Reverb extends Mod {
  output: any;

  constructor() {
    super();

    this.configure('reverb', 1, 1, [IoType.IN, IoType.NULL, IoType.OUT]);
  }

  getOutput(cardinal: number): any {
    return this.output;
  }

  wire(audioContext:AudioContext): void {
    this.output = this.getInput(Cardinal.NORTH);
  }

  unwire(audioContext:AudioContext): void {
    this.output = null;
  }
}
