import Command from './../command.js';
import permHandler from '../../misc/permissionHandler.js';
import msgHandler from '../../misc/messageHandler.js';
import discordHandler from '../../misc/discordHandler.js';

export default class Ping extends Command {

    constructor(category) {
        super(category);
        this.usage = 'ping';
        this.command = 'ping';
    }

    executeCommand(args, msg) {
        let hasPermission = permHandler.checkPermissions(this.permissions, msg, this.command);
        if(hasPermission === false) return;
        msgHandler.sendRichText_Default({channel: msg.channel, title: 'Pong', description: `${discordHandler.client.ping}ms`});
    }
}