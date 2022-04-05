import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '2help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}2help (command_name)`,
            aliases: ['2h']
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
            const n = [
            './assets/Marco/marco.mp4','./assets/Marco/marco-1.mp4','./assets/Marco/marco-2.mp4','./assets/Marco/marco-3.mp4','./assets/Marco/marco-4.mp4','./assets/Marco/marco-5.mp4','./assets/Marco/marco-6.mp4'
        ]
        let marco = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'dev') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `
✪ 𝙼𝚊𝚛𝚌𝚘 𝚄𝚜𝚎𝚛𝚋𝚘𝚝 𝙾𝚗 𝙵𝚒𝚛𝚎!! ✪

 ╭─⊸⌊𝙾𝚆𝙽𝙴𝚁⌉ ➢ *${M.sender.username}*

├─⊸⌊𝚄𝚂𝙴𝚁𝙱𝙾𝚃⌉ ➢ 𝙼𝙰𝚁𝙲𝙾

├─⊸⌊𝙳𝙴𝚅𝙻𝙾𝙿𝙴𝚁⌉ ➢ 𝙼𝙰𝚈𝙰𝙽𝙺 𝚁𝙰𝙹𝙿𝚄𝚃

├─⊸⌊𝙿𝚁𝙴𝙵𝙸𝚇⌉ ➢ ${this.client.config.prefix}

╰─⊸⌊𝙼𝙾𝙳⌉ ➢ <${this.client.config.prefix}mod>                            \n\n`
            const keys = Object.keys(categories)
            for (const key of keys)
                text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}* ${this.emojis[keys.indexOf(key)]}\n\n• \`\`\`${categories[
                    key
                ]
                    .map((command) => command.config?.command)
                    .join('\n')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: marco }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `${text}
 ──❅┈[ 𝙼𝚊𝚛𝚌𝚘 𝚄𝚜𝚎𝚛𝚋𝚘𝚝]┈❅───
┌────────────┈❅
│   🧨 𝙼𝚊𝚛𝚌𝚘
│   ©  𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚍 𝚋𝚢 𝙼𝚊𝚢𝚊𝚗𝚔 𝚁𝚊𝚓𝚙𝚞𝚝 | 𝚑𝚊𝚌𝚔𝚎𝚕𝚒𝚝𝚎01
└────────────┈⁂
❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
🎗 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
            )
        }
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `🎈 *Command:* ${this.client.util.capitalize(command.config?.command)}\n📉 *Status:* ${
                state ? 'Disabled' : 'Available'
            }\n⛩ *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases
                    ? `\n♦️ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\n🎐 *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\n💎 *Usage:* ${command.config?.usage || ''}\n\n📒 *Description:* ${command.config?.description || ''}`
        )
    }

    emojis = ['🚀', '🌀', '🎵', '🧿', '⚖️', '🚫','👑', '✨', '📚']
}
