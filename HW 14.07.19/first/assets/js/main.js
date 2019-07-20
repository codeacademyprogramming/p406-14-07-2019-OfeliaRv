function graduation(durationInHours,startDate){
    var start =startDate;
    var week=durationInHours/10;
    start.setDate(start.getDate()+week*7);
   console.log(start);

}