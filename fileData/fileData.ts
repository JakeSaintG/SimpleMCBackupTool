import { IFileData } from "./IFileData";

let fileData!: IFileData;

let refreshDateInfo = () => {
    let date: Date = new Date();
    let month: number = date.getMonth();
    let day: string = String(date.getDate()).padStart(2, '0');
    let year: number = date.getFullYear();
    let hour: string = String(date.getHours()).padStart(2, '0');
    let min: string = String(date.getMinutes()).padStart(2, '0');
    let currentDTS = `${month+1}.${day}.${year}-${hour}${min}`;
    let months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let saveTime: string = `${hour}:${min}`;
    let saveDate: string = `day: ${day}, month: ${months[month]} year: ${year}`;

    fileData = {
        saveFileType: 'zip', //currently not used. Need to set to 'Format' type and not 'string'
        writeFilePath: `../WorldBackUps/world${currentDTS}.zip`,
        saveInfoFile:  `This copy of your Minecraft world was saved by a backup tool.\r\n\r\n====================Save date====================\r\n${saveDate}\r\n====================Save time====================\r\n${saveTime}\r\n\r\nThank you for using BackUpTool!`  
    }
}

export let returnFileData = () => {
    refreshDateInfo();
    return fileData;
}