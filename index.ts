import { folderCheck } from './checks/folderCheck';
import { checkForOldBackups } from './checks/backupAgeCheck';
import { backUp } from './backUp/backUp'

console.log(`Beginning BackUpTool.`);

// let saveInterval = 7200000; //2hrs by default
// let deleteInterval: number = 8;
// let deleteUnitOfTime: string = 'hours'; //hours, minutes, or seconds

/*===========================Testing Time Units===========================*/
/*Comment out default time settings and uncomment below lines for testing purposes*/
let saveInterval: number = 60000; //1min
let deleteInterval: number = 3;
let deleteUnitOfTime: string = 'minutes'; //hours, minutes, or seconds
/*===========================Testing Time Units===========================*/

console.log(`The world will be backed up every ${saveInterval/60000} minutes`);
console.log(`Use ctrl+c or cmd+c to quit.`);

folderCheck();
backUp();

setInterval(() => {
  checkForOldBackups(deleteUnitOfTime, deleteInterval);
  backUp();
}, saveInterval);



