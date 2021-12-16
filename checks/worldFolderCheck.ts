import fs from 'fs';

export const worldFolderCheck = (worldName: string) => {
    const dir: string = `../${worldName}`; 

    try {
        if (!fs.existsSync(dir)) {
            throw new Error("worldDoesNotExist");
        } 
    } catch (error) {
        console.error(`Your Minecraft world (name: ${worldName}) was not found.`);
        console.error(`Please ensure that you have a world to backup.`);
        process.exit();
    } 
};