const tmi = require("tmi.js");
const conf = require("./config.json"); // Config for the bot
const fetch = require("node-fetch"); // Used for HTTP requests
const db = require("sqlite"); // Used for holding the members and their configs
const locales = require("./messages.json"); // Messages :)
const client = new tmi.client(conf.opts);

var locale;
var messages;

client.on("message", (target, context, msg, self) => {
  if (self) return; // Prevents bot talking to itself
  const args = msg.content.slice(conf.prefix.length).trim().split(/ +/g); 
  const cmd = args.shift().toLowerCase();
  switch(cmd) {
    case "ping":
      client.say(target, `Pong!`);
      break;
  }
});

function locale_set(broadcaster_id) {
  fetch(`https://api.twitch.tv/helix/channels?broadcaster_id=${broadcaster_id}`, {
    method: 'get',
    headers: {
      "client-id": conf.client-id,
      "Authorization": `Bearer ${conf.client-id}`
    },
    body: JSON.stringify(body)
  }).then(res => res.json()).then(json => {
    for(var i=0; i<locales.length; i++) { // For every language we have
      if(json.data.broadcaster_language == locales[i]) { // Check if we have the language being used
        return locale = locale[i];
      } else {
        return locale = nil; // TODO: maybe send a DM via Twitch to the user saying their streaming in an unsupported language
      }
    }
  });
} // Not tested; fetches broadcast langauage, ensures there's a locale, and sets it for the stream

function maturity_set(broadcaster_id, lang) {
  if(lang === nil) return;
  fetch(`https://api.twitch.tv/kraken/channels/${broadcaster_id}`, {
    method: 'get',
    headers: {
      "client-id": conf.client-id
    },
    body: JSON.stringify(body)
  }).then(res => res.json()).then(json => {
    if(json.data.mature === true) {
      return locales[lang].messages.concat(locales[lang].messages_explicit);
    } else {
      return locales[lang].messages;
    } // If not using mature phrases, keep the clean phrases. Otherwise, combine arrays
  });
} // Not tested; fetches broadcast maturity, sets array for stream, and ensures there's a locale

client.on("connected", (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
});

client.connect(); // Connect the bot