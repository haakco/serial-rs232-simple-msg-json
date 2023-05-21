import { AutoDetectTypes } from '@serialport/bindings-cpp';
import { SerialPortOpenOptions } from 'serialport/dist/serialport';

import { InterfaceMsg } from '../interfaces';
import { logger } from '../utils/Logger';

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
    logger.debug('Command Library Initialized');
    return;
  }

  public static async build(
    path: string,
    config?: SerialPortOpenOptions<AutoDetectTypes>,
  ): Promise<CommandLibrary> {
    const mainConfig = config ?? LibraryDefaultConfig;

    // @ts-ignore: Ignore for now
    const commandLibrary = new CommandLibrary(path, mainConfig);
    await commandLibrary.init();
    logger.debug('Command Library Building');
    return commandLibrary;
  }

  public async writeJsonCommand(command: InterfaceMsg): Promise<void> {
    logger.debug(command, 'writeJsonCommand');
    return await this.ConLib.writeCommand(JSON.stringify(command));
  }

  public async readJsonCommand(command: InterfaceMsg): Promise<InterfaceMsg> {
    logger.debug(command, 'sendJsonCommand');
    const readCommand = await this.ConLib.readCommand(JSON.stringify(command));
    logger.debug(readCommand, 'readJsonCommand');
    return JSON.parse(readCommand);
  }

  public async close(): Promise<void> {
    return this.ConLib.close();
  }
}
