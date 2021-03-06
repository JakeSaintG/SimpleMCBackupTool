import { backupLocationCheck } from './checks/folderCheck';
import { checkForOldBackups } from './checks/backupAgeCheck';
import { folderBackup } from './folderBackup/folderBackup'; 
import { returnSettings } from './settings/settings';
import { worldFolderCheck } from './checks/worldFolderCheck';

const useTestSettings: boolean = false;
let appSettings = returnSettings(useTestSettings);

console.log(`Beginning Simple MC Backup Tool.`);
console.log(`The world will be backed up every ${appSettings.saveInterval/60000} minutes`);
console.log(`Use ctrl+c or cmd+c to quit.`);

worldFolderCheck(appSettings.worldName);
backupLocationCheck(appSettings.backUpLocation);
folderBackup(appSettings.worldName, appSettings.backUpLocation);
checkForOldBackups(appSettings.deleteUnitOfTime, appSettings.deleteInterval, appSettings.backUpLocation);

setInterval(() => {
  checkForOldBackups(appSettings.deleteUnitOfTime, appSettings.deleteInterval, appSettings.backUpLocation);
  folderBackup(appSettings.worldName, appSettings.backUpLocation);
}, appSettings.saveInterval);