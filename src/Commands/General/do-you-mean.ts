import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Marco/marco-smile.mp4'
        ]
        let marco = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: marco }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `It's too quite, You mean ${this.client.config.prefix}Help? \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
