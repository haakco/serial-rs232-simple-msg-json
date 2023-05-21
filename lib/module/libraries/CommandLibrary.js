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
    logger.debug(command, 'writeJsonCommand');
    return await this.ConLib.writeCommand(JSON.stringify(command));
  }
  async readJsonCommand(command) {
    logger.debug(command, 'sendJsonCommand');
    const readCommand = await this.ConLib.readCommand(JSON.stringify(command));
    logger.debug(readCommand, 'readJsonCommand');
    return JSON.parse(readCommand);
  }
  async close() {
    return this.ConLib.close();
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZExpYnJhcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicmFyaWVzL0NvbW1hbmRMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEUsTUFBTSxPQUFPLGNBQWM7SUFDakIsTUFBTSxDQUFpQjtJQUUvQixZQUNFLElBQVksRUFDWixNQUErQztRQUUvQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7UUFDZixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzVDLE9BQU87SUFDVCxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQ3ZCLElBQVksRUFDWixNQUErQztRQUUvQyxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksb0JBQW9CLENBQUM7UUFFbEQsNkJBQTZCO1FBQzdCLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1RCxNQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDekMsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFxQjtRQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBcUI7UUFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN6QyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzRSxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FDRiJ9
