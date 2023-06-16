export function DateAndTime(): string {
    const currDateAndTime = new Date();
    return currDateAndTime.toISOString();
}