
require("dotenv").config();

module.exports = {

    /**
     * @description requires settings for the bot
     */

    TOKEN: process.env.TOKEN || "YOUR_TOKEN",  // your bot token
    PREFIX: process.env.PREFIX || "",  // bot prefix
    OWNER_ID: process.env.OWNER_ID || "YOUR_CLIENT_ID", //your client id

    /**
     *
     */
    EMPTY_LEAVE: process.env.EMPTY_LEAVE || 60, //<= default is 60  // time in seconds

    /**
     * @description boolean settings for the bot
     */
    LEAVE_EMPTY: false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when empty
    LEAVE_FINISH: false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when finished
    LEAVE_STOP:false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when stopped
}

//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd