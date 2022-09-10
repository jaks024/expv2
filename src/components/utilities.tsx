import { ISummaryDto } from "./dto/ISummaryDto";

export const GetUniqueId = (function () {
    let i = 1;

    return function () {
        return i++;
    }
})();

export const emptySummary: ISummaryDto = {
    incomeTotal: 0,
    expenseTotal: 0,
    incomeAverage: 0,
    expenseAverage: 0,
    numOfEntires: 0,
    incomeTagSums: new Map<string, number>(),
    expenseTagSums: new Map<string, number>()
};

const monthNames = [
    "January", 
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const GetMonthName = (month: number) => {
    return monthNames[month - 1];    
};