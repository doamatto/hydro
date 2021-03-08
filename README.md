# Hydro

This is a Twitch bot built to tell you to stay hydrated.

If you want some more detail it can/will be able to:
- Notify you and the rest of chat every 30m or 1h30m (these are the main presets) to get hydrated
- Customize down to the minute how often you want to be notified (there is a min and max time limit to this; what that limit is is to be determined)
- Change languages from English to something else

## Building
1. Install [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com)
2. Install dependencies (`yarn`)
3. Fetch an your client ID and secret ([from Twitch's Developer Console](https://dev.twitch.tv/console/apps/create)) and set it as an environment variable (Google «set an environment variable» followed by whatever OS you're using to see what you need to do)
4. Build the bot (`yarn build`)
5. Run the bot (`yarn serve`)

## Acknowledgements

This bot was inspiried by the OG [Stay_Hydrated_Bot](https://www.twitch.tv/stay_hydrated_bot) that has since been broken (the bot doesn't work and no activity (it seems) since June 2019). It was my first project on Twitch and it's dangerous to go alone ;)
