/*global i:true,require:true,console:true,j:true,exports:true*/
var Table = require('cli-table');
var date_table = new Table({
   		head: ['SUN','MON','TUE','WED','THU','FRI','SAT'], 
		colWidths: [5,5,5,5,5,5,5]
		});
function ShowCal()
{
var today = new Date();
console.log("Date:"+today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear());
console.log("Time:"+today.toTimeString());
var month = today.getMonth();
var year = today.getFullYear();
DispCal(month+1,year);
}
function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
function DispCal(month,year)
{
	try
    {
        if(month>12||month<=0)
        {
            throw "Invalid Month!";
        }
        var firstDay = new Date(year,month,0);
        firstDay.setDate(1);
        console.log(firstDay);
        firstDay=firstDay.getDay();
        var count = daysInMonth(month,year);
        var monCal = "";
        j=firstDay;
        var array = [];
        var offset = (count+firstDay)%7;
        for(i=1;i<=count+firstDay+offset;i++)
        {

            if(j!==0)
            {
                array.push(" ");
                j--;
            }
            else
            {
                if((i-firstDay)<=count)
                {
                    array.push((i-firstDay));
                }
                else
                {
                    if(i>count)
                    {	
                        date_table.push();
                        array.push(" ");
                    }	
                    if(i%7===0)
                    {
                       date_table.push(array);
                        break;
                    }
                }
            }
            if(i%7===0||i===count+firstDay+offset)
            {
                date_table.push(array);
                array = [];
            }

        }
        console.log(date_table.toString());
  }
    catch(e)
    {
        console.log("Error="+e);
    }
	
}
exports.ShowCal= ShowCal;
exports.DispCal = DispCal;