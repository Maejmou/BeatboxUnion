const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = 'NTEzNzY0MzM5MTAzMzAxNjQz.DtdUsg.tr9yYu4ql4ednyWipxAHeWBGKWE';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '!' + 'ping') {
    message.reply('PongPo!');
  }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!' + 'wadu') {
      message.reply('Heck!');
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!' + 'help') {
      message.reply('Here are some avalible commands:\n```1. !Help -> Shows commands avalible for members\n2. !Wadu -> Hek!\n3. !Ping -> PongPo!\n4. !Beatboxer -> Assignes you to a Beatboxer role.\n5. !Singer -> Assignes you to a Singer role.\n6. !Instrumentalist -> Assignes you to Instrumentalist role.\n7. !Looper -> Assignes you to Looper role.\n8. !Member -> Assignes you to Member role.```');
    }
});

client.on('message', message => {
    let member = message.mentions.members.first();
    if(message.content.toLowerCase() == "!" + "beatboxer") {
        if(message.member.roles.has('513749637992153116')) {
            message.reply("You already are are a Beatboxer!");
        }else {
            message.member.addRole('513749637992153116').catch(console.error);
            message.reply("You have been assigned as a Beatboxer!");
        }
    }
});

client.on('message', message => {
    let member = message.mentions.members.first();
    if(message.content.toLowerCase() == "!" + "instrumentalist") {
        if(message.member.roles.has('513750500513153037')) {
            message.reply("You already are are a Instrumentalist!");
        }else {
            message.member.addRole('513750500513153037').catch(console.error);
            message.reply("You have been assigned as a Instrumentalist!");
        }
    }
});

client.on('message', message => {
    if(message.content.toLowerCase() == "!" + "singer") {
        if(message.member.roles.has('514850745674366985')) {
            message.reply("You already are are a Singer!");
        }else {
            message.member.addRole('514850745674366985').catch(console.error);
            message.reply("You have been assigned as a Singer!");
        }
    }
});

client.on('message', message => {
    let member = message.mentions.members.first();
    if(message.content.toLowerCase() == "!" + "looper") {
        if(message.member.roles.has('513750146169831434')) {
            message.reply("You already are are a Looper!");
        }else {
            message.member.addRole('513750146169831434').catch(console.error);
            message.reply("You have been assigned as a Looper!");
        }
    }
});

client.on('message', message => {
    let member = message.mentions.members.first();
    if(message.content.toLowerCase() == "!" + "member") {
        if(message.member.roles.has('513751951448604685')) {
            message.reply("You already are are a Member!");
        }else {
            message.member.addRole('513751951448604685');
            message.reply("You have been assigned as a Member!");
        }
    }
});

client.on('message', message => {
    let member = message.mentions.members.first();
    if(message.member.roles.has('513746280489549827' || '513747383683645460')) {
        if(message.content.toLowerCase() == '!' + 'clearit'){
            async function clear() {
                message.delete();
                const fetched = await message.channel.fetchMessages({limit: 99});
                message.channel.bulkDelete(fetched);
            }
            clear();
            message.reply("Deleted 100 messages!");
        }
    }
});

client.on('message', message => {
    if(message.member.roles.has('513746280489549827' || '513747383683645460')) {
        if(message.content.toLowerCase() == '!' + 'adminhelp'){
            message.reply('Here are some commads you can use Captain:\n```1. !ClearIt ```');
        }
    }
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('513745826351284225').send(`Welcome ${member} to Beatbox Union!\nFor starters try to type !help.`); 
});


//part que
var partstart = false;
client.on('message', message => {
    if(message.member.roles.has('513746280489549827' || '513747383683645460')) {
        if(message.content.toLowerCase() == "!" + "partstart") {
            partstart = true;
            message.reply("Parts have started!");
        }
    }
});

client.on('message', message => {
    if(message.member.roles.has('513746280489549827' || '513747383683645460')) {
        if(message.content.toLowerCase() == "!" + "partend") {
            partstart = false;
            message.reply("Parts have been ended!");
        }
    }
});

var que = [];

client.on('message', message => {
    if(partstart){
        if(message.content.toLowerCase() == "!" + "part") {
            if(que.indexOf(message.author.username) > -1) {
                message.reply("You are already in the Queue!");
            } else {
            que.push(message.author.username);
            message.reply("You have been added to the Queue!");
            }
        }
    }
});

client.on('message', message => {
    if(partstart){
        if(message.content.toLowerCase() == "!" + "partremove") {   
            que.splice( que.indexOf(message.author.username), 1 );
            message.reply("You have been removed from the Queue!");
        }   
    }
});

client.on('message', message => {
    if(partstart){
        if(message.member.roles.has('513746280489549827' || '513747383683645460')) {
        if(message.content.startsWith("!" + "partremoveuser")) {   
            que.splice( que.indexOf(message.mentions.users.first().username), 1 );
            message.reply("You have been removed from the Queue " + message.mentions.users.first().username + "!");
        }   
    }
    }
});

client.on('message', message => {
    if(message.content.toLowerCase() == "!" + "partshow") {
       message.reply("The current Queue is:\n" + que);  
    }
});

client.on('message', message => {
        if(message.member.roles.has('513746280489549827' || '513747383683645460')) {
        if(message.content.toLowerCase() == "!" + "partremoveall") {
            que = [];
            message.reply("All parts have been removed!");
        }
    }
});

//Flip a coin
function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "flipcoin") {
        message.reply("It's" + " " +coinFlip() + "!");
    }
});

client.login(TOKEN);
