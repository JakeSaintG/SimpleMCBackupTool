const findRemoveSync = require('find-remove');

export const checkForOldBackups = (deleteUnitOfTime: string, deleteInterval: number) => {
    findRemoveSync('../WorldBackups', {
        age: {deleteUnitOfTime: deleteInterval},
        extensions: '.zip'},
    );
}
