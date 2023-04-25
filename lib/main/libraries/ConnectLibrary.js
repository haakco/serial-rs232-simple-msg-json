'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ConnectLibrary = exports.LibraryDefaultConfig = void 0;
const serialport_1 = require('serialport');
const Logger_1 = require('../utils/Logger');
exports.LibraryDefaultConfig = {
  path: '',
  baudRate: 115200,
  dataBits: 8,
  parity: 'none',
};
class ConnectLibrary {
  constructor(path, config) {
    if (!path) throw new Error('Port is required');
    this.config = Object.assign(
      Object.assign(
        Object.assign({}, exports.LibraryDefaultConfig),
        config !== null && config !== void 0 ? config : {},
      ),
      { path },
    );
    Logger_1.logger.debug(this.config);
  }
  async open() {
    return new Promise((resolve, reject) => {
      this.port = new serialport_1.SerialPort(this.config, function (err) {
        if (err) {
          Logger_1.logger.error('Error: ', err.message);
          reject(err);
        }
      });
      this.port.on('open', async err => {
        if (err) {
          Logger_1.logger.error('Error opening serial port:', err);
          reject(err);
        } else {
          Logger_1.logger.debug(
            `Serial port ${this.config.path} opened at ${this.config.baudRate} baud`,
          );
          this.parser = this.port.pipe(new serialport_1.ReadlineParser());
          this.parser.on('error', function (err) {
            Logger_1.logger.error('Error: ', err.message);
          });
          // this.parser.on('data', function (data) {
          //   logger.debug('data: ', data);
          // });
          return resolve(void 0);
        }
      });
    });
  }
  async writeCommand(command) {
    return new Promise((resolve, reject) => {
      Logger_1.logger.debug(`writeCommand ${command}`);
      this.port.write(`${command}\n`, err => {
        if (err) return reject(err);
        setTimeout(() => {
          return resolve();
        }, 1000);
      });
    });
  }
  async readCommand(command) {
    return new Promise((resolve, reject) => {
      Logger_1.logger.debug(`readCommand ${command}`);
      this.port.write(`${command}\n`, err => {
        if (err) {
          Logger_1.logger.error(err);
          return reject(err);
        }
        this.parser.once('data', data => {
          resolve(data);
        });
      });
    });
  }
  async close() {
    this.port.close(function (err) {
      if (err) {
        return Logger_1.logger.error('Error: ', err.message);
      }
      Logger_1.logger.debug('serial port closed');
    });
  }
}
exports.ConnectLibrary = ConnectLibrary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdExpYnJhcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicmFyaWVzL0Nvbm5lY3RMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJDQUF3RDtBQUd4RCw0Q0FBeUM7QUFFNUIsUUFBQSxvQkFBb0IsR0FBMkM7SUFDMUUsSUFBSSxFQUFFLEVBQUU7SUFDUixRQUFRLEVBQUUsTUFBTTtJQUNoQixRQUFRLEVBQUUsQ0FBQztJQUNYLE1BQU0sRUFBRSxNQUFNO0NBQ2YsQ0FBQztBQUVGLE1BQWEsY0FBYztJQU96QixZQUFZLElBQVksRUFBRSxNQUErQztRQUN2RSxJQUFJLENBQUMsSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsTUFBTSxpREFDTiw0QkFBb0IsR0FDcEIsQ0FBQyxNQUFNLGFBQU4sTUFBTSxjQUFOLE1BQU0sR0FBSSxFQUFFLENBQUMsR0FDZCxFQUFFLElBQUksRUFBRSxDQUNaLENBQUM7UUFDRixlQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7UUFDZixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxHQUFHO2dCQUNuRCxJQUFJLEdBQUcsRUFBRTtvQkFDUCxlQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDYjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFB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
