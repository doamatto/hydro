const tmi = require("tmi.js");
const conf = require("./config.json");
const client = new tmi.client(conf.opts);

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

client.on("connected", (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`)
});

client.connect(); // Connect the bot