export enum LogTypes{
    info = -1,
    debug = 0,
    verbose = 1,
    warn = 2,
    error= 3,
}
 export interface ILogTypeData {
    name: string;
    label: string ;
    fgColour: string;
    bgColour: string;
}
export const logTypeData: {[key in LogTypes]: ILogTypeData} ={
    [LogTypes.info]: {
        name: "info",
        label: "info",
        fgColour: "#51f70a",
        bgColour: "",
    },
    [LogTypes.debug]: {
        name:"debug",
        label: "debug",
        fgColour:"#ffffff",
        bgColour:"",
    },
    [LogTypes.verbose]: {
        name: "verbose",
        label: "verbose",
        fgColour:"#fff305",
        bgColour:"",
    },
    [LogTypes.warn]: {
        name:"warn",
        label: "warn",
        fgColour: "#ff9305",
        bgColour:"",


    },
    [LogTypes.error]: {
        name:"error",
        label:"error",
        fgColour:"#ff0505",
        bgColour:"",
    },
}