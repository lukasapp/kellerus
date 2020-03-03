import Command from './../command.js';
import permHandler from '../../misc/permissionHandler.js';
import msgHandler from '../../misc/messageHandler.js';
import musicPlayer from '../../misc/musicPlayer.js';

export default class Leave extends Command {

    constructor(category) {
        super(category);
        this.usage = 'leave';
        this.command = 'leave';
    }

    executeCommand(args, msg) {
        let hasPermission = permHandler.checkPermissions(this.permissions, msg, this.command);
        if (hasPermission === false) {
            return;
        }

        if (msg.guild.voice.connection) {
            msg.guild.voice.connection.disconnect();
        } else {
            msgHandler.sendRichText_Default({
                channel: msg.channel,
                title: 'Error',
                description: 'I must be in a voice channel to be banished!',
                color: 0xCC0000
            });
        }
    }
}