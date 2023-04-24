'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CommandLibrary = void 0;
const Logger_1 = require('../utils/Logger');
const ConnectLibrary_1 = require('./ConnectLibrary');
class CommandLibrary {
  constructor(path, config) {
    this.ConLib = new ConnectLibrary_1.ConnectLibrary(path, config);
  }
  async init() {
    await this.ConLib.open();
    Logger_1.logger.debug('Command Library Initialized');
    return;
  }
  static async build(path, config) {
    const mainConfig =
      config !== null && config !== void 0
        ? config
        : ConnectLibrary_1.LibraryDefaultConfig;
    // @ts-ignore: Ignore for now
    const commandLibrary = new CommandLibrary(path, mainConfig);
    await commandLibrary.init();
    Logger_1.logger.debug('Command Library Building');
    return commandLibrary;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZExpYnJhcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicmFyaWVzL0NvbW1hbmRMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLDRDQUF5QztBQUV6QyxxREFBd0U7QUFFeEUsTUFBYSxjQUFjO0lBR3pCLFlBQ0UsSUFBWSxFQUNaLE1BQStDO1FBRS9DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7UUFDZixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsZUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzVDLE9BQU87SUFDVCxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQ3ZCLElBQVksRUFDWixNQUErQztRQUUvQyxNQUFNLFVBQVUsR0FBRyxNQUFNLGFBQU4sTUFBTSxjQUFOLE1BQU0sR0FBSSxxQ0FBb0IsQ0FBQztRQUVsRCw2QkFBNkI7UUFDN0IsTUFBTSxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVELE1BQU0sY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLGVBQU0sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN6QyxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQXFCO1FBQ2pELE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBcUI7UUFDaEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUF4Q0Qsd0NBd0NDIn0=
