import { AutoDetectTypes } from '@serialport/bindings-cpp';
import { ReadlineParser, SerialPort } from 'serialport';
import { SerialPortOpenOptions } from 'serialport/dist/serialport';

import { logger } from '../utils/Logger';

export const LibraryDefaultConfig: SerialPortOpenOptions<AutoDetectTypes> = {
  path: '',
  baudRate: 115200,
  dataBits: 8,
  parity: 'none',
};

export class ConnectLibrary {
  // @ts-ignore: Needed for future
  public port: SerialPort<AutoDetectTypes>;
  // @ts-ignore: Needed for future
  public parser: ReadlineParser;
  public config: SerialPortOpenOptions<AutoDetectTypes>;

  constructor(path: string, config?: SerialPortOpenOptions<AutoDetectTypes>) {
    if (!path) throw new Error('Port is required');

    this.config = {
      ...LibraryDefaultConfig,
      ...(config ?? {}),
      ...{ path },
    };
    logger.debug(this.config);
  }

  public async open(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.port = new SerialPort(this.config, function (err) {
        if (err) {
          logger.error('Error: ', err.message);
          reject(err);
        }
      });

      this.port.on('open', async err => {
        if (err) {
          logger.error('Error opening serial port:', err);
          reject(err);
        } else {
          logger.debug(
            `Serial port ${this.config.path} opened at ${this.config.baudRate} baud`,
          );

          this.parser = this.port.pipe(new ReadlineParser());

          this.parser.on('error', function (err) {
            logger.error('Error: ', err.message);
          });

          // this.parser.on('data', function (data) {
          //   logger.debug('data: ', data);
          // });

          return resolve(void 0);
        }
      });
    });
  }

  public async writeCommand(command: string): Promise<void> {
    return new Promise((resolve, reject) => {
      logger.debug(`writeCommand ${command}`);
      this.port.write(`${command}\n`, err => {
        if (err) return reject(err);
        setTimeout(() => {
          return resolve();
        }, 1000);
      });
    });
  }

  public async readCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      logger.debug(`readCommand ${command}`);
      this.port.write(`${command}\n`, err => {
        if (err) {
          logger.error(err);
          return reject(err);
        }
        this.parser.once('data', data => {
          logger.debug(`readCommand result : ${data}`);
          resolve(data);
        });
      });
    });
  }

  public async close() {
    this.port.close(function (err) {
      if (err) {
        return logger.error('Error: ', err.message);
      }
      logger.debug('serial port closed');
    });
  }
}
