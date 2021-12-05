const findRemoveSync = require('find-remove');

export const checkForOldBackups = (deleteUnitOfTime: string, deleteInterval: number) => {
    findRemoveSync('../WorldBackUps', {
        age: {deleteUnitOfTime: deleteInterval},
        extensions: '.zip'},
    );
}
