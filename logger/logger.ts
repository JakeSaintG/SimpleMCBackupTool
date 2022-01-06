export const logSuccess = (output: any) => {
    output.on('close', () => {
        console.log('Archive has been finalized. The output file can now be accessed.');
    });
}

export const logFailure = (archive: any, err: any) => {
    archive.on('warning', function(err: any) {
        if (err.code === 'ENOENT') {
        } else {
        throw err;
        }
    });
    archive.on('error', function(err: any) {
        throw err;
    });
}
