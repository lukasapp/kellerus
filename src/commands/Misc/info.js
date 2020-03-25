import msgHandler from '../../misc/messageHandler.js';
import config from '../../config.js';
import Command from './../command.js';

export default class Info extends Command {
  constructor(category) {
    super(category);
    this.usage = 'info';
    this.command = 'info';
    this.description = 'Prints informations about the bot.';
    this.example = 'info';
  }

  executeCommand(args, msg) {
    try {
      super.executeCommand(args, msg);
    } catch (err) {
      return;
    }
    const categories = [];
    categories[0] = {
      title: 'Version',
      text: config.version,
      inline: true,
    };
    categories[1] = {
      title: 'Repository',
      text: config.repo,
      inline: true,
    };
    categories[2] = {
      title: 'Author',
      text: 'Paul Keller',
    };
    msgHandler.sendRichText(msg, 'Bot Info', categories, 0xF1C40F);
  }
}
