import Colors from "ansi-colors";

export enum LogTypes{
    info = -1,
    debug = 0,
    verbose = 1,
    warn = 2,
    error= 3,
}

export const Reset = "\u001b[0m";


export const getKeyedColours ={

    "-1": Colors.bold.white("INFO"),
    "0": Colors.bold.green("DEBUG"),
    "1":Colors.bold.blue("VERBOSE"),

    "2":Colors.bold.yellow("WARN"),
    "3":Colors.bold.red("ERROR")


}





