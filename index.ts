import { folderCheck } from './checks/folderCheck';
import { checkForOldBackups } from './checks/backupAgeCheck';
import { folderBackup } from './folderBackup/folderBackup'; 
import { returnSettings } from './settings/settings';

const useTestSettings: boolean = false;
let appSettings = returnSettings(useTestSettings);

console.log(`Beginning Simple MC Backup Tool.`);
console.log(`The world will be backed up every ${appSettings.saveInterval/60000} minutes`);
console.log(`Use ctrl+c or cmd+c to quit.`);

folderCheck();
folderBackup(appSettings.worldName);

setInterval(() => {
  checkForOldBackups(appSettings.deleteUnitOfTime, appSettings.deleteInterval);
  folderBackup(appSettings.worldName);
}, appSettings.saveInterval);