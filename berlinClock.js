const BerlinClock = (date) => {
    let s = "";
    // s += secondsLamp(date);
    // s += fiveHoursRow(date);
    // s += singleMinuteRow(date);
    s += secondsLamp(date);
    s += fiveHoursRow(date);
    s += singleHourRow(date);
    s += fiveMinuteRow(date);
    s += singleMinuteRow(date);
    return s;
};

const secondsLamp = (date) => {
    const sec = date.getSeconds();
    if (sec % 2 === 0) {
        return "Y";
    }
    else {
        return "O";
    }
};

const fiveHoursRow = (date) => {
    let row = "";
    const hours = date.getHours();
    const howManyRows = Math.floor(hours / 5);
    for (let i = 0; i < 4; i++) {
        if (i < howManyRows) row += "R";
        else row += "O";
    }
    return row;
}

const fiveMinuteRow = (date) => {
    let row = "";
    let mins = date.getMinutes();

    let a = (mins - (mins % 5)) / 5;
    console.log(mins)
    console.log(a)
    for (let i = 0; i < 11; i++) {
        if (i < a) row += "Y"
        else row += "O"

    }
    let fullRow = row.replaceAll("YYY", "YYR");
    return fullRow;
}

const singleMinuteRow = (date) => {
    let row = "";
    const hours = date.getMinutes();
    const howManyRows = (hours % 5);
    // console.log(howManyRows);
    for (let i = 0; i < 4; i++) {
        if (i < howManyRows) row += "Y";
        else row += "O";
    }
    return row;
}

const singleHourRow = (date) => {
    let row = "";
    const hours = date.getHours();
    const howManyRows = (hours % 5);
    // console.log(howManyRows);
    for (let i = 0; i < 4; i++) {
        if (i < howManyRows) row += "R";
        else row += "O";
    }
    return row;
}


const hour = "11:37:07";
const d = new Date("July 21, 1983 " + hour);
console.log(BerlinClock(d));