import { AutoDetectTypes } from '@serialport/bindings-cpp';
import { SerialPortOpenOptions } from 'serialport/dist/serialport';

import { ConnectLibrary, LibraryDefaultConfig } from './ConnectLibrary';

export class CommandLibrary {
  private ConLib: ConnectLibrary;

  public constructor(
    path: string,
    config?: SerialPortOpenOptions<AutoDetectTypes>,
  ) {
    this.ConLib = new ConnectLibrary(path, config);
  }

  public async init(): Promise<void> {
    await this.ConLib.open();
    return;
  }

  public static async build(
    path: string,
    config?: SerialPortOpenOptions<AutoDetectTypes>,
  ): Promise<CommandLibrary> {
    const mainConfig = config ?? LibraryDefaultConfig;

    // @ts-ignore: Ignore for now
    const CommandLibrary = new CommandLibrary(path, mainConfig);
    await CommandLibrary.init();
    return CommandLibrary;
  }

  public async writeJsonCommand(command: object): Promise<void> {
    return await this.ConLib.writeCommand(JSON.stringify(command));
  }

  public async readJsonCommand(command: object): Promise<object> {
    return JSON.parse(await this.ConLib.readCommand(JSON.stringify(command)));
  }

  public async close(): Promise<void> {
    return this.ConLib.close();
  }
}
