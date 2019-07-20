function suffix(day) {
    if (day % 10 !== 3 && day % 10 !== 4 && day % 10 !== 9 && day % 10 !== 0 || day == 20) {
        console.log(`Bu gün ayin ${day}-dir`);
    }
    else if (day % 10 == 3 || day % 10 == 4) {
        console.log(`Bu gün ayin ${day}-dür`);
    }
    else if (day == 10 || day == 30 || day % 10 == 9) {
        console.log(`Bu gün ayin ${day}-dur`);
    }
}

suffix(5);
suffix(14);
suffix(30);
suffix(29);
suffix(23);
suffix(31);
suffix(1);