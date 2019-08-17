export interface ConfigData {
    name: string;
    description: string;
    copyright: string;
}

const configData: ConfigData = {
    name: "fdl",
    description: "foobar design lanaugae",
    copyright: "2019 foobar"
};

export default function config(data?: ConfigData) {
    if (data) {
        Object.assign(configData, data);
    }
    return configData;
}
