import fs from 'fs';

export const returnSettings = (useTestSettings: boolean) => {
    let settings!: string;
    if (!useTestSettings) {
        settings = "mainSettings";
    } else {
        settings = "testSettings";
    }
    const settingsData = JSON.parse(fs.readFileSync('backupToolConfig.json', 'utf8'));

    let returnSettings = {
        saveInterval:settingsData[`${settings}`].saveInterval,
        deleteInterval: settingsData[`${settings}`].deleteInterval,
        deleteUnitOfTime: settingsData[`${settings}`].deleteUnitOfTime,
        worldName: settingsData[`${settings}`].worldName,
        backUpLocation: settingsData[`${settings}`].backUpLocation
    };
    return returnSettings;
}