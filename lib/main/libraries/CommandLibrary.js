'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CommandLibrary = void 0;
const ConnectLibrary_1 = require('./ConnectLibrary');
class CommandLibrary {
  constructor(path, config) {
    this.ConLib = new ConnectLibrary_1.ConnectLibrary(path, config);
  }
  async init() {
    await this.ConLib.open();
    return;
  }
  static async build(path, config) {
    const mainConfig =
      config !== null && config !== void 0
        ? config
        : ConnectLibrary_1.LibraryDefaultConfig;
    // @ts-ignore: Ignore for now
    const CommandLibrary = new CommandLibrary(path, mainConfig);
    await CommandLibrary.init();
    return CommandLibrary;
  }
  async writeJsonCommand(command) {
    return await this.ConLib.writeCommand(JSON.stringify(command));
  }
  async readJsonCommand(command) {
    return JSON.parse(await this.ConLib.readCommand(JSON.stringify(command)));
  }
  async close() {
    return this.ConLib.close();
  }
}
exports.CommandLibrary = CommandLibrary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZExpYnJhcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicmFyaWVzL0NvbW1hbmRMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHFEQUFzRTtBQUV0RSxNQUFhLGNBQWM7SUFHdkIsWUFDSSxJQUFZLEVBQ1osTUFBK0M7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSTtRQUNiLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixPQUFPO0lBQ1gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNyQixJQUFZLEVBQ1osTUFBK0M7UUFFL0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUkscUNBQW9CLENBQUM7UUFFbEQsNkJBQTZCO1FBQzdCLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1RCxNQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQWU7UUFDekMsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFlO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FDYixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDekQsQ0FBQztJQUNOLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBQ0o7QUF4Q0Qsd0NBd0NDIn0=
