const findRemoveSync = require('find-remove');

let deleteInterval: number = 0;

let allowedIncrementsOftime: string[] = [ //TOD: make this more useful...
    'seconds',
    'minutes',
    'hours',
    'days'
];

const checkForAllowedTimeIntervals = (deleteUnitOfTime: string, possibleDeleteInterval: number) => {
    if (deleteUnitOfTime === 'seconds') {
        deleteInterval = possibleDeleteInterval;
    } else if (deleteUnitOfTime === 'minutes') {
        deleteInterval = possibleDeleteInterval*60;
    } else if (deleteUnitOfTime === 'hours') {
        deleteInterval = possibleDeleteInterval*3600;
    } else if (deleteUnitOfTime === 'days') {
        deleteInterval = possibleDeleteInterval*24*3600;
    } else {
        console.log(`Invalid increment of time for file deletion.`);
        console.log(`Please enter ${allowedIncrementsOftime}`);
        process.exit();
    }
    return deleteInterval;
}

export const checkForOldBackups = (deleteUnitOfTime: string, possibleDeleteInterval: number) => {
    let returnedInterval = checkForAllowedTimeIntervals(deleteUnitOfTime, possibleDeleteInterval);

    findRemoveSync('../WorldBackups', {    
        age: {seconds: returnedInterval},
        extensions: '.zip'},
    );
}
