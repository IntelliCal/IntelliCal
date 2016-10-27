import React from 'react';
// import ReactDOM from 'react-dom';

var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



function Month(month, year, dates){
  this.date = new Date(year, month, 0);
  this.NumberOfDays = this.date.getDate();
  this.nameofmonth = months[this.date.getMonth()];
  this.firstday = 1;
  this.year = this.date.getFullYear();
  this.calendar = generateCalendar(this.NumberOfDays, month-1, this.firstday, year, dates);
}

function dateToDay(year, month, day) {
  return (new Date(year, month, day)).getDay();
}

function generateCalendar(NumberOfDays, month, day, year, dates) {
  var weekday = dayOfWeek[dateToDay(year, month, day)];

  if (dates[weekday]!== undefined) {
    dates[weekday].push({day:day, tasks:[]});
  } else {
      if (day === 1) {
      var firstIndex = dayOfWeek.indexOf(weekday)
      for (var i =0; i < firstIndex; i++) {
        dates[dayOfWeek[i]] = [{day:'-', tasks:[]}];
      }
      dates[dayOfWeek[firstIndex]] = [{day:1, tasks:[]}]
    } else {
      dates[weekday] = [{day:day, tasks:[]}];
    }
  }
  day++;
  return day > NumberOfDays ? dates : generateCalendar(NumberOfDays, month, day, year, dates);
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: this.createCalendar(),
      tasks: this.props.tasks
    };
  }

  createCalendar() {
    var month =  {};
    var today = new Date();
    month = new Month(today.getMonth() +1, today.getFullYear(), month);
    return month;
  }

  render() {
    var tasks = this.state.tasks;
    var calendar = [];
    for (var property in this.state.dates.calendar) {
      calendar.push(this.state.dates.calendar[property]);
    }
    function onClick() {
    this.tasks = this.tasks.concat(tasks);
    console.log(this)
    }


    return (
      <div id="calendar">
        <div id="header">
        <p>{this.state.dates.nameofmonth} {this.state.dates.year}</p>
        </div>

        <div id="dates">
          {calendar.map(function(week, i) {
            return (
             <div className="nopaddingmargin">
                <p className="weekName">{dayOfWeek[i]}</p>
                <ul className="nopaddingmargin">
                {week.map(function(day, ind) {
                  // console.log('we are getting into the week part despite what erica thinks')
                  // console.log('day is: ',day)
                  return <li onClick={onClick.bind(day)}> {day.day} {day.tasks}</li>
                })}
                </ul>
              </div>
              )
          })}
        </div>
      </div>
    )
  }
};

module.exports = Calendar;

