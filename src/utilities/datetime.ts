/* eslint no-magic-numbers: 0 */
export const dayPickerStrings = {
    months: [
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
        "December",
    ],

    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],

    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],

    shortDays: ["S", "M", "T", "W", "T", "F", "S"],

    goToToday: "Go to today",
    prevMonthAriaLabel: "Go to previous month",
    nextMonthAriaLabel: "Go to next month",
    prevYearAriaLabel: "Go to previous year",
    nextYearAriaLabel: "Go to next year",
    closeButtonAriaLabel: "Close date picker",
};

export const dateToString = (date?: Date): string => {
    if (!date) {
        return "";
    }
    const currDate = date.getDate();
    const currMonth = date.getMonth() + 1;
    const currYear = date.getFullYear();
    return (
        currYear +
        "-" +
        (currMonth < 10 ? "0" + currMonth : currMonth) +
        "-" +
        (currDate < 10 ? "0" + currDate : currDate)
    );
};

// https://gist.github.com/jed/982883#gistcomment-3123179
export const getUuid = (a = ""): string =>
    a
        ? /* eslint-disable no-bitwise */
          ((Number(a) ^ (Math.random() * 16)) >> (Number(a) / 4)).toString(16)
        : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, getUuid);
