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
    console.log('Command Library Initialized');
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
    console.log('Command Library Building');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZExpYnJhcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicmFyaWVzL0NvbW1hbmRMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHFEQUF3RTtBQUV4RSxNQUFhLGNBQWM7SUFHekIsWUFDRSxJQUFZLEVBQ1osTUFBK0M7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSTtRQUNmLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsT0FBTztJQUNULENBQUM7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDdkIsSUFBWSxFQUNaLE1BQStDO1FBRS9DLE1BQU0sVUFBVSxHQUFHLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLHFDQUFvQixDQUFDO1FBRWxELDZCQUE2QjtRQUM3QixNQUFNLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUQsTUFBTSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBZTtRQUMzQyxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQWU7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUF4Q0Qsd0NBd0NDIn0=
