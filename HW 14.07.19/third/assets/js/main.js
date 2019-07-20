function getQuarter(day, month) {
    date = new Date();

    date.setDate(day);
    date.setMonth(month);

    if (date.getMonth() < 3) {
        console.log('1st quarter');
    }
    else if (date.getMonth() > 2 && date.getMonth() < 6) {
        console.log('2nd quarter');
    }
    else if (date.getMonth() > 5 && date.getMonth() < 9) {
        console.log('3rd quarter');
    }
    else if (date.getMonth() > 8) {
        console.log('4th quarter');
    }
}

//test
getQuarter(5, 1);
getQuarter(10, 3);
getQuarter(8, 8);
getQuarter(13, 11);