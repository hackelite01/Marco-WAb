import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'marco',
            description: 'Displays the info.',
            category: 'misc',
            usage: `${client.config.prefix}marco`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Marco/marco-git.mp4'
        ]
        let marco = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: marco }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `🎗 Marco\n\n⚜ *Description: Maintained Userbot for WhatsApp* \n\n ⭐*URL-https://github.com/hackelite01/Marco-WA* \n` }
        )
    }
}
