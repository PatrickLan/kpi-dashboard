function getMonthNumber() {
    const date = new Date();
    const monthNumber  = date.getMonth();
    return monthNumber;
}

const monthArray = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli","August","September","Oktober","November", "Dezember",
"Januar", "Februar", "März", "April", "Mai", "Juni", "Juli","August","September","Oktober","November", "Dezember"];

export const getUpdatedMonthArray = () => {
    const currentMonthNumber = getMonthNumber();
    const updatedMonthArray = monthArray.filter((month:string, index: number) => { 
        return currentMonthNumber <= index && index <= currentMonthNumber + 11});
    // console.log("updatedMonthArr", updatedMonthArray);
    return updatedMonthArray;
};