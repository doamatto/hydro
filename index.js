const tmi = require("tmi.js");
const conf = require("./config.json"); // Config for the bot
const fetch = require("node-fetch"); // Used for HTTP requests
const db = require("sqlite"); // Used for holding the members the bot needs to listen to
const client = new tmi.client(conf.opts);

var locale;

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

function locale_set() {
  fetch(`https://api.twitch.tv/helix/channels?broadcaster_id=${broadcaster_id}`, {
    method: 'get',
    headers: {
      "client-id": `${conf.client-id}`,
      "Authorization": `Bearer ${conf.client-id}`
    },
    body: JSON.stringify(body)
  }).then(res => res.json()).then(json => {
    for(var i=0; i<msgs.length; i++) {
      if(json.data.broadcaster_language == msgs[i]) {
        return locale = msgs[i];
      } else {
        return locale = nil;
      }
    }
  });
} // Not tested; fetches broadcast langauage, ensures there's a locale, and sets it for the stream

client.on("connected", (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
});

client.connect(); // Connect the bot