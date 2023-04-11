'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ConnectLibrary = exports.LibraryDefaultConfig = void 0;
const serialport_1 = require('serialport');
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
    console.log(this.config);
  }
  async open() {
    return new Promise((resolve, reject) => {
      this.port = new serialport_1.SerialPort(this.config, function (err) {
        if (err) {
          console.error('Error: ', err.message);
          reject(err);
        }
      });
      this.port.on('open', async err => {
        if (err) {
          console.error('Error opening serial port:', err);
          reject(err);
        } else {
          console.log(
            `Serial port ${this.config.path} opened at ${this.config.baudRate} baud`,
          );
          this.parser = this.port.pipe(new serialport_1.ReadlineParser());
          this.parser.on('error', function (err) {
            console.log('Error: ', err.message);
          });
          // this.parser.on('data', function (data) {
          //   console.log('data: ', data);
          // });
          return resolve(void 0);
        }
      });
    });
  }
  async writeCommand(command) {
    return new Promise((resolve, reject) => {
      console.log(`writeCommand ${command}`);
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
      console.log(`readCommand ${command}`);
      this.port.write(`${command}\n`, err => {
        if (err) {
          console.error(err);
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
        return console.error('Error: ', err.message);
      }
      console.log('port closed');
    });
  }
}
exports.ConnectLibrary = ConnectLibrary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdExpYnJhcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicmFyaWVzL0Nvbm5lY3RMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJDQUF3RDtBQUczQyxRQUFBLG9CQUFvQixHQUEyQztJQUMxRSxJQUFJLEVBQUUsRUFBRTtJQUNSLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsTUFBTSxFQUFFLE1BQU07Q0FDZixDQUFDO0FBRUYsTUFBYSxjQUFjO0lBT3pCLFlBQVksSUFBWSxFQUFFLE1BQStDO1FBQ3ZFLElBQUksQ0FBQyxJQUFJO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxNQUFNLGlEQUNOLDRCQUFvQixHQUNwQixDQUFDLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLEVBQUUsQ0FBQyxHQUNkLEVBQUUsSUFBSSxFQUFFLENBQ1osQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSTtRQUNmLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEdBQUc7Z0JBQ25ELElBQUksR0FBRyxFQUFFO29CQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQyxF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
