const {MessageEmbed}=require("discord.js");
const fs=require("fs");

module.exports = {
    data : {
        name:"hello",
        description:"test command",
        default_permission:true,
        options:[
        ]
    },
    execute(interaction,client){
        interaction.reply("hello");
    }
};