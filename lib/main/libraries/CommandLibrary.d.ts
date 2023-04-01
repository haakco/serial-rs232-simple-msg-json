import { AutoDetectTypes } from '@serialport/bindings-cpp';
import { SerialPortOpenOptions } from 'serialport/dist/serialport';
export declare class CommandLibrary {
  private ConLib;
  constructor(path: string, config?: SerialPortOpenOptions<AutoDetectTypes>);
  init(): Promise<void>;
  static build(
    path: string,
    config?: SerialPortOpenOptions<AutoDetectTypes>,
  ): Promise<CommandLibrary>;
  writeJsonCommand(command: object): Promise<void>;
  readJsonCommand(command: object): Promise<object>;
  close(): Promise<void>;
}
