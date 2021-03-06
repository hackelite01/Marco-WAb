import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    emojis: any
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
            const n = [
            './assets/videos/chess-win.mp4'
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
    //         const keys = Object.keys(categories)
    //         for (const key of keys)
    // // emojis = ['π', 'π', 'π΅', 'π§Ώ', 'βοΈ', 'π«','π', 'β¨', 'π']

    //             text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}* ${this.emojis[keys.indexOf(key)]}\n\nβ’ \`\`\`${categories[
    //                 key
    //             ]
    //                 .map((command) => command.config?.command)
    //                 .join(', ')}\`\`\`\n\n`
    //         const key = parsedArgs.joined.toLowerCase()
    //         const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
    //         if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
    //         const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })

const weeb = [
    {title: 'anime', rowId:"rowid1"},
    {title: 'animequote', rowId:"rowid1"},
    {title: 'animechar', rowId:"rowid2"},
    {title: 'genshincharacter', rowId:"rowid2"},
    {title: 'husbando', rowId:"rowid2"},
    {title: 'loli', rowId:"rowid2"},
    {title: 'manga', rowId:"rowid2"},
    {title: 'pokemon', rowId:"rowid2"},
    {title: 'rpaper', rowId:"rowid2"},
    {title: 'vtuber', rowId:"rowid2"},
    {title: 'waifu', rowId:"rowid2"},
    {title: 'ameme', rowId:"rowid2"},
    {title: 'character', rowId:"rowid2"},
    {title: 'crossplay', rowId:"rowid2"},
    {title: 'haigusa', rowId:"rowid2"},
    {title: 'recommend', rowId:"rowid2"},
    {title: 'sauce', rowId:"rowid2"},
    {title: 'wallpaper', rowId:"rowid2"}
   ]
   const bots = [
    {title: 'entropy', rowId:"rowid1"},
    {title: 'guide', rowId:"rowid2"},
    {title: 'infinity', rowId:"rowid2"},
    {title: 'marco', rowId:"rowid2"},
    {title: 'void', rowId:"rowid2"}
   ]
   const config = [
    {title: 'disable', rowId:"rowid1"},
    {title: 'enable', rowId:"rowid2"}
   ]
   const utils = [
    {title: 'blur', rowId:"rowid1"},
    {title: 'kitten', rowId:"rowid1"},
    {title: 'sticker', rowId:"rowid1"},
    {title: 'subred', rowId:"rowid1"},
    {title: 'getgif', rowId:"rowid1"},
    {title: 'screenshot', rowId:"rowid1"},
    {title: 'steal', rowId:"rowid1"},
    {title: 'translate', rowId:"rowid1"},
    {title: 'wikipedia', rowId:"rowid1"}
   ]
   const dev = [
    {title: 'ban', rowId:"rowid1"},
    {title: 'eval', rowId:"rowid2"},
    {title: 'join', rowId:"rowid2"},
    {title: 'leave', rowId:"rowid2"},
    {title: 'status', rowId:"rowid2"},
    {title: 'unban', rowId:"rowid2"}
   ]
   const misc = [
    {title: 'retrieve', rowId:"rowid1"},
    {title: 'hi', rowId:"rowid1"},
    {title: 'marco', rowId:"rowid1"},
   ]
   const education = [
    {title: 'calculator', rowId:"rowid1"},
    {title: 'covid', rowId:"rowid1"},
    {title: 'define', rowId:"rowid1"},
    {title: 'elements', rowId:"rowid2"},
    {title: 'github', rowId:"rowid2"},
    {title: 'urbandictionary', rowId:"rowid2"},
    {title: 'weather', rowId:"rowid2"},
   ]
   const fun = [
    {title: 'chess', rowId:"rowid1"},
    {title: 'quote', rowId:"rowid2"},
    {title: 'react', rowId:"rowid2"},
    {title: 'trigger', rowId:"rowid2"},
    {title: 'truth', rowId:"rowid2"},
    {title: 'chat', rowId:"rowid2"},
    {title: 'dare', rowId:"rowid2"},
    {title: 'fact', rowId:"rowid2"},
    {title: 'safejoke', rowId:"rowid2"},
    {title: 'ship', rowId:"rowid2"},
    {title: 'trivia', rowId:"rowid2"}]
   const general = [
       {title: 'admins', rowId:"rowid2"},
       {title: 'everyone', rowId:"rowid2"},
       {title: 'help', rowId:"rowid2"},
       {title: 'mods', rowId:"rowid2"},
       {title: 'profile', rowId:"rowid2"},
       {title: 'rank', rowId:"rowid1"},
       {title: 'xp', rowId:"rowid2"},
       {title: 'invitelink', rowId:"rowid2"},
       {title: 'tts', rowId:"rowid2"},
       {title: 'delete', rowId:"rowid2"}
    ]
    const media = [
        {title: 'play', rowId:"rowid2"},
        {title: 'spotify', rowId:"rowid2"},
        {title: 'take', rowId:"rowid1"},
        {title: 'ytaudio', rowId:"rowid2"},
        {title: 'ytsearch', rowId:"rowid2"},
        {title: 'ytvideo', rowId:"rowid2"},
        {title: 'google', rowId:"rowid2"},
        {title: 'lyrics', rowId:"rowid2"},
        {title: 'pinterest', rowId:"rowid2"}
   ]
   const nsfw = [
    {title: 'anl', rowId:"rowid2"},
    {title: 'bj', rowId:"rowid2"},
    {title: 'nsfwdoujin', rowId:"rowid1"},
    {title: 'nsfwloli', rowId:"rowid2"},
    {title: 'nsfwpaper', rowId:"rowid2"},
    {title: 'thighs', rowId:"rowid2"},
    {title: 'hentai', rowId:"rowid2"},
    {title: 'maid', rowId:"rowid2"},
    {title: 'mb', rowId:"rowid2"},
    {title: 'nsfw-waifu', rowId:"rowid2"},
    {title: 'nsfwjoke', rowId:"rowid2"},
    {title: 'nsfw-neko', rowId:"rowid2"},
    {title: 'ps', rowId:"rowid2"},
    {title: 'trap', rowId:"rowid2"},
]
   const moderation = [
    {title: 'activate', rowId:"rowid1"},
    {title: 'deactivate', rowId:"rowid2"},
    {title: 'demote', rowId:"rowid2"},
    {title: 'groupchange', rowId:"rowid2"},
    {title: 'promote', rowId:"rowid2"},
    {title: 'purge', rowId:"rowid2"},
    {title: 'remove', rowId:"rowid2"},
    {title: 'close', rowId:"rowid2"},
    {title: 'open', rowId:"rowid2"},
    {title: 'revoke', rowId:"rowid2"},
    {title: 'ppcouple', rowId:"rowid2"}]

   const sections = [
                     {title: "fun π", rows: fun },
                     {title: "general π", rows: general },
                     {title: "media π΅", rows: media },
                     {title: "misc π§Ώ", rows: misc },
                     {title: "moderation βοΈ", rows: moderation },
                     {title: "nsfw π«", rows: nsfw },
                     {title: "utils π", rows: utils },
                     {title: "weeb β¨", rows: weeb },
                     {title: "education π", rows: education },

]
const txt = '\n' +
    ' α Helper Module α\n' +
    'β­βγ(γ₯οΏ£ 3οΏ£)γ₯γ\n' +
    `β π±ππ πΎπ πππ: *${M.sender.username}*\n` +
    'β πππππππ: . πΌπ°ππ²πΎ\n' +
    'β πΏπππππ‘: #\n' +
    'β πΌππ: <#mod>\n' +
    'β°βββββββββββββ-`α¦Β΄-                         \n' +
    '\n' +
    'π *Fun*π\n' +
    '\n' +
    'β’ ```chess, quote, react, trigger, truth, chat, dare, fact, safejoke, ship, trivia```\n' +
    '\n' +
    'π *General*π\n' +
    '\n' +
    'β’ ```admins, everyone, help, mods, profile, rank, xp, tts, invitelink, delete```\n' +
    '\n' +
    'π΅ *Media*π΅\n' +
    '\n' +
    'β’ ```ig, play, spotify, take, ytaudio, ytsearch, ytvideo, google, lyrics, pinterest```\n' +
    '\n' +
    'π§Ώ *Misc* π§Ώ\n'   +
    '\n' +
    'β’ ```retrieve, hi, marco```\n' +
    '\n' +
    'βοΈ *Moderation* βοΈ\n' +
    '\n' +
    'β’ ```activate, deactivate, demote, groupchange, promote, purge, remove, close, open, revoke, ppcouple```\n' +
    '\n' +
    'π« *Nsfw*π«\n' +
    '\n' +
    'β’ ```anl, bj, nsfwdoujin, nsfwloli, nsfwpaper, thighs, hentai, maid, mb, nsfw-waifu, nsfwjoke, nsfw-neko, ps, trap```\n' +
    '\n' +
    'π *Utils*π\n' +
    '\n' +
    'β’ ```blur, kitten, sticker, subred, getgif, screenshot, steal, translate, wikipedia```\n' +
    '\n' +
    'β¨ *Weeb* β¨\n' +
    '\n' +
    'β’ ```anime, animequote, animechar, genshincharacter, husbando, loli, manga, pokemon, rpaper, vtuber, waifu, ameme, character, crossplay, haigusha, recommend, sauce, wallpaper```\n' +
    '\n' +
    'π *Educative*π\n' +
    '\n' +
    'β’ ```calculator, covid, define, elements, github, urbandictionary, weather```\n' +
    '\n' +
    ' \n' +
    ' ββββ[ π²ππππππ π±ππ ]βββββ\n' +
    'βββββββββββββββ\n' +
    'β   π§¨ πΌπ°ππ²πΎ\n'  +
    'β   Β©οΈ πΌππ’πππ ππππππ\n' +
    'βββββββββββββββ\n' +
    'ββ[πππ―π ππ«πππ­ πππ²]ββ\n'             +
    'π *Note: Use #help <command_name> to view the command info*'
   const button:any = {
    buttonText: 'Help',
    description: txt,
    sections: sections,
    listType: 1
   }
this.client.sendMessage(M.from,button,MessageType.listMessage)
            // const keys = Object.keys(categories)
            // for (const key of keys)
            //     text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}* ${this.emojis[keys.indexOf(key)]}\n\nβ’ \`\`\`${categories[
            //         key
            //     ]
            //         .map((command) => command.config?.command)
            //         .join(', ')}\`\`\`\n\n`










                    //             return void this.client.sendMessage(M.from, { url: marco }, MessageType.video, {quoted:M.WAMessage,
//             mimetype: Mimetype.gif,
//             caption: `${text}
//  ββββ[ πΌππππ πππππππ ]βββββ
// βββββββββββββββ
// β   π§¨ πΌππππ
// β   Β©οΈ ππ’πππππππ£ππ ππ’ πΌππ’πππ ππππππ | πππππππππ01
// βββββββββββββββ
// ββ[πππ―π ππ«πππ­ πππ²]ββ
// π *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
//             )
//         }
    //     const key = parsedArgs.joined.toLowerCase()
    //     const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
    //     if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
    //     const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
    //     M.reply(
    //         `π *Command:* ${this.client.util.capitalize(command.config?.command)}\nπ *Status:* ${
    //             state ? 'Disabled' : 'Available'
    //         }\nβ© *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
    //             command.config.aliases
    //                 ? `\nβ¦οΈ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
    //                 : ''
    //         }\nπ *Group Only:* ${this.client.util.capitalize(
    //             JSON.stringify(!command.config.dm ?? true)
    //         )}\nπ *Usage:* ${command.config?.usage || ''}\n\nπ *Description:* ${command.config?.description || ''}`
    //     )
    // }

    this.emojis = ['π', 'π', 'π΅', 'π§Ώ', 'βοΈ', 'π«','π', 'β¨', 'π']
}}}
