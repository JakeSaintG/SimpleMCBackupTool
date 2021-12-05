# Simple MC Backup Tool
## A tool for making regular backups of a Minecraft Server World. Written in _TypeScript_, for use on the PokeSpot server. 
##### Ever have some trolls find your Minecraft server and ruin everything? Ever had your server crash because NATE was messing with a piston and sandblock? 
##### If so, use this tool to make regular backups of your server's world!

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Dev Dependencies
- Node and NPM
- Nodemon

## To Run SpotBot
- Drop the BackUpTool folder in your Minecraft server folder.
- Make sure your world folder is named "world".
    - If is not, change the "worldName" variable in the backupToolConfig.json.
- Open a console or terminal on the BackUpTool folder.
- Install dependencies with the below line:
```sh
npm i
```
- Enter the below line to saving your world:
```sh
npm start
```

## Changing backup interval and old file deletion interval.
- In the "backupToolConfig.json", alter the fields under "mainSettings" to your liking.

## Testing
- If you wish to test the application with shorter, pre-set timings, change the "useTestSettings" variable in index.ts to **true**.

## Special Thanks
- Brad Cypert, Jacob Kastensmidt, and the trolls that joined my Minecraft server and blew everything up which inspired me to make this.

## Known Issues
- Old files aren't deleted 100% of time.

## Areas of Improvement
- Refactoring.

## TODO
- Run as an executable or .dmg for ease of use.
- A GUI would be nice
- 
