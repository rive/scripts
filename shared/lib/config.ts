export interface ConfigData {
    name?: string;
    version?: string;
    description?: string;
    copyright?: string;
}

const configData: ConfigData = {};

export default function config(data?: ConfigData) {
    if (data) {
        Object.assign(configData, data);
    }
    return configData;
}
