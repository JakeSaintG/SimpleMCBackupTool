import fs from 'fs';

export const folderCheck = () => {
    const dir: string = '../WorldBackUps'; 

    if (!fs.existsSync(dir)) {
        console.log(`Location for world back ups not found.`);
        fs.mkdirSync(dir);
        console.log(`\"WorldBackUps\" folder was created.`);
    } 
  }
  