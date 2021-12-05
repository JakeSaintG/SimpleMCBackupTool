import { folderCheck } from './checks/folderCheck';
import { checkForOldBackups } from './checks/backupAgeCheck';
import { backup } from './backup/backup';
import { returnSettings } from './settings/settings';

const useTestSettings: boolean = true;
let appSettings = returnSettings(useTestSettings);

console.log(`Beginning Simple MC Backup Tool.`);
console.log(`The world will be backed up every ${appSettings.saveInterval/60000} minutes`);
console.log(`Use ctrl+c or cmd+c to quit.`);

folderCheck();
backup(appSettings.worldName);

setInterval(() => {
  checkForOldBackups(appSettings.deleteUnitOfTime, appSettings.deleteInterval);
  backup(appSettings.worldName);
}, appSettings.saveInterval);