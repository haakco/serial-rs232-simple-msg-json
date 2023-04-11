import { AutoDetectTypes } from '@serialport/bindings-cpp';
import { SerialPortOpenOptions } from 'serialport/dist/serialport';
import { InterfaceMsg } from '../interfaces';
export declare class CommandLibrary {
  private ConLib;
  constructor(path: string, config?: SerialPortOpenOptions<AutoDetectTypes>);
  init(): Promise<void>;
  static build(
    path: string,
    config?: SerialPortOpenOptions<AutoDetectTypes>,
  ): Promise<CommandLibrary>;
  writeJsonCommand(command: InterfaceMsg): Promise<void>;
  readJsonCommand(command: InterfaceMsg): Promise<InterfaceMsg>;
  close(): Promise<void>;
}
