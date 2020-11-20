export const getMonthNumber = () => {
    const date = new Date();
    const monthNumber  = date.getMonth();
    return monthNumber;
}

const monthArray = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli","August","September","Oktober","November", "Dezember",
"Januar", "Februar", "März", "April", "Mai", "Juni", "Juli","August","September","Oktober","November", "Dezember"];

const monthNum = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]

export const getUpdatedMonthArray = () => {
    const currentMonthNumber = getMonthNumber();
    const updatedMonthArray = monthArray.filter((month:string, index: number) => { 
        return currentMonthNumber <= index && index <= currentMonthNumber + 11});
    // console.log("updatedMonthArr", updatedMonthArray);
    return updatedMonthArray;
};

export const getUpdatedMonthArrayNumber = () => {
    const currentMonthNumber = getMonthNumber();
    const monthNumberArray = monthNum.filter((month:number, index: number) => { 
        return currentMonthNumber <= index && index <= currentMonthNumber + 11});
    console.log("monthNumArray", monthNumberArray)
    return monthNumberArray;
};