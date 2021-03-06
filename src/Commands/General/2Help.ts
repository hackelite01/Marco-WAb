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
βͺ πΌππππ πππππππ πΎπ π΅πππ!! βͺ

 β­ββΈβπΎππ½π΄πβ β’ *${M.sender.username}*

βββΈβπππ΄ππ±πΎπβ β’ πΌπ°ππ²πΎ

βββΈβπ³π΄ππ»πΎπΏπ΄πβ β’ πΌπ°ππ°π½πΊ ππ°πΉπΏππ

βββΈβπΏππ΄π΅πΈπβ β’ ${this.client.config.prefix}

β°ββΈβπΌπΎπ³β β’ <${this.client.config.prefix}mod>                            \n\n`
            const keys = Object.keys(categories)
            for (const key of keys)
                text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}* ${this.emojis[keys.indexOf(key)]}\n\nβ’ \`\`\`${categories[
                    key
                ]
                    .map((command) => command.config?.command)
                    .join('\n')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: marco }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `${text}
 ββββ[ πΌππππ πππππππ]βββββ
βββββββββββββββ
β   π§¨ πΌππππ
β   Β©  π³ππππππππ ππ’ πΌππ’πππ ππππππ | πππππππππ01
βββββββββββββββ
ββ[πππ―π ππ«πππ­ πππ²]ββ
π *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
            )
        }
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `π *Command:* ${this.client.util.capitalize(command.config?.command)}\nπ *Status:* ${
                state ? 'Disabled' : 'Available'
            }\nβ© *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases
                    ? `\nβ¦οΈ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\nπ *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\nπ *Usage:* ${command.config?.usage || ''}\n\nπ *Description:* ${command.config?.description || ''}`
        )
    }

    emojis = ['π', 'π', 'π΅', 'π§Ώ', 'βοΈ', 'π«','π', 'β¨', 'π']
}
