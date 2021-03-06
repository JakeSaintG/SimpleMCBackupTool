import fs from 'fs';
import archiver from 'archiver';
import { returnFileData } from '../fileData/fileData'
import { logFailure, logSuccess } from '../logger/logger';
import { IFileData } from '../fileData/IFileData';

export const folderBackup = (worldName: string, backUpLocation: string) => {
    const archive = archiver('zip', {zlib: { level: 9 }});
  
    try {
        console.log(`Backing up world.`);
        let fileData: IFileData = returnFileData(backUpLocation); // Get data to constuct the saved file.
        const output: fs.WriteStream = fs.createWriteStream(fileData.writeFilePath); // Creates file that the Minecraft world will be written to. Puts it in a 'WorldBackups' folder 
        archive.pipe(output);
        archive.directory(`../${worldName}`, ``);
        archive.append(fileData.saveInfoFile, { name: 'info.txt' }); // append a file from string
        archive.finalize();
        logSuccess(output);
    } catch (err) {
        logFailure(archive, err);
    }
  };