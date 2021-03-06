import fs from 'fs';

export const backupLocationCheck = (dir: string) => { 

    if (!fs.existsSync(dir)) {
        console.log(`Location for world back ups not found.`);
        fs.mkdirSync(dir);
        console.log(`\"WorldBackups\" folder was created.`);
    } 
};
  