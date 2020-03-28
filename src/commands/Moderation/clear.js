import Command from './../command.js';
import messageHandler from '../../misc/messageHandler.js';
import {dic as language, replaceArgs} from '../../misc/languageHandler.js';

export default class Clear extends Command {
  constructor(category) {
    super(category);
    this.usage = `clear <${language.commands.clear.labels.message_amount}>`;
    this.command = 'clear';
    this.description = language.commands.clear.description;
    this.example = 'clear 20';
    this.permissions = ['MANAGE_MESSAGES'];
  }

  executeCommand(args, msg) {
    try {
      super.executeCommand(args, msg);
    } catch (err) {
      return;
    }
    if (!args[0]) {
      return messageHandler.sendRichTextDefault({
        msg: msg,
        title: commands.general.error,
        description: commands.error.invalid_usage,
        categories: [{
          title: commands.general.usage,
          text: `\`${this.usage}\``,
        }],
      });
    }
    msg.channel.bulkDelete(parseInt(args[0]) + 1);
    msg.channel.send(replaceArgs(language.commands.clear.success, [msg.author.id]));
  }
}
