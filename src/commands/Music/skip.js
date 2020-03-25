import Command from './../command.js';
import musicPlayer from '../../misc/musicPlayer.js';
import sqlHandler from '../../misc/sqlHandler.js';

export default class Skip extends Command {
  constructor(category) {
    super(category);
    this.usage = 'skip';
    this.command = 'skip';
    this.description = 'Skips to the next song in the queue.';
    this.example = 'skip';
    this.permissions = ['MOVE_MEMBERS'];
  }

  executeCommand(args, msg) {
    try {
      super.executeCommand(args, msg);
    } catch (err) {
      return;
    }
    if (!servers[msg.guild.id]) {
      servers[msg.guild.id] = {
        queueIndex: 0,
      };
    }
    sqlHandler.getQueue(msg.guild.id).then((queue) => {
      if (queue.length > 0) {
        if (msg.guild.voice.connection) {
          musicPlayer.stop(msg);
        }
      }
    });
  }
}
