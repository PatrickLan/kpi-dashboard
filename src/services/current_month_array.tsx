export const getMonthNumber = () => {
    const date:Date = new Date();
    const monthNumber:number  = date.getMonth();
    return monthNumber;
}

const monthArray = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli","August","September","Oktober","November", "Dezember",
"Januar", "Februar", "März", "April", "Mai", "Juni", "Juli","August","September","Oktober","November", "Dezember"];

export const getUpdatedMonthArray = async ():Promise<string[]> => {
    const currentMonthNumber:number = getMonthNumber();
    const updatedMonthArray:string[] = monthArray.filter((month:string, index: number) => { 
        return currentMonthNumber <= index && index <= currentMonthNumber + 11});
    return updatedMonthArray;
};
