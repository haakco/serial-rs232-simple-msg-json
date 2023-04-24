import { logger } from '../utils/Logger';
import { ConnectLibrary, LibraryDefaultConfig } from './ConnectLibrary';
export class CommandLibrary {
  ConLib;
  constructor(path, config) {
    this.ConLib = new ConnectLibrary(path, config);
  }
  async init() {
    await this.ConLib.open();
    logger.debug('Command Library Initialized');
    return;
  }
  static async build(path, config) {
    const mainConfig = config ?? LibraryDefaultConfig;
    // @ts-ignore: Ignore for now
    const commandLibrary = new CommandLibrary(path, mainConfig);
    await commandLibrary.init();
    logger.debug('Command Library Building');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZExpYnJhcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicmFyaWVzL0NvbW1hbmRMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEUsTUFBTSxPQUFPLGNBQWM7SUFDakIsTUFBTSxDQUFpQjtJQUUvQixZQUNFLElBQVksRUFDWixNQUErQztRQUUvQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7UUFDZixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzVDLE9BQU87SUFDVCxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQ3ZCLElBQVksRUFDWixNQUErQztRQUUvQyxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksb0JBQW9CLENBQUM7UUFFbEQsNkJBQTZCO1FBQzdCLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1RCxNQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDekMsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFxQjtRQUNqRCxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQXFCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSztRQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNGIn0=
