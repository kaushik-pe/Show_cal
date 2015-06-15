/*global i:true,require:true,console:true,j:true,exports:true*/
function show_date()
{
var today = new Date();
console.log("Date:"+today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear());
console.log("Time:"+today.toTimeString());
}
exports.show_date = show_date;
