import React from 'react';


var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


//gets specific details of date which is passed to next function
function Month(month, year, dates){
  this.date = new Date(year, month, 0);
  this.NumberOfDays = this.date.getDate();
  this.nameofmonth = months[this.date.getMonth()];
  this.firstday = 1;
  this.year = this.date.getFullYear();
  this.calendar = generateCalendar(this.NumberOfDays, month-1, this.firstday, year, dates);
}

//gets numeric value for day of week (0-6, sun-sat)
function dateToDay(year, month, day) {
  return (new Date(year, month, day)).getDay();
}

//generates calendar based on values generate from Month function
function generateCalendar(NumberOfDays, month, day, year, dates) {
  var weekday = dayOfWeek[dateToDay(year, month, day)];

  if (dates[weekday]!== undefined) {
    dates[weekday].push({day:day, tasks:[]});
  } else {

  //making sure that the days render starting with the first on the
  //correct day of the week
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
  //continue generating days until number of days is reached, then return dates object
  return day > NumberOfDays ? dates : generateCalendar(NumberOfDays, month, day, year, dates);
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    //creating object of dates
    this.state = {
      dates: this.createCalendar(),
      today: new Date()
    };
  }
  //start calendar creation based off of current date
  createCalendar() {
    var month =  {};
    var today = new Date();
    month = new Month(today.getMonth() +1, today.getFullYear(), month);
    return month;
  }

  componentDidMount() {
    this.render();
  }

  render() {
    var today=this.state.today;
    var all = this.props.taskList;
    var calendar = [];
    for (var property in this.state.dates.calendar) {
      calendar.push(this.state.dates.calendar[property]);
    }

    function onClick() {
      console.log('show');
      $('.tasklist').show();
    }

    return (
      //calendar component
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

                  return (
                    <div className="nopaddingmargin">
                      <li className={day.day == today.getDate()?"today":null} onClick={onClick.bind(day)}> {day.day} <span className="theday">{day.tasks}</span>
                      </li>

                      {all.map((task, key) => {
                        var selectedDay = 0;
                        if( day.day >= 10) {
                          selectedDay = task.day.slice(-2);
                        } else if(day.day <= 1 && day.day >= 9) {
                          selectedDay = task.day.slice(-1);
                        }
                        if(parseInt(selectedDay) === parseInt(day.day)) {
                          console.log('selected day? ',selectedDay, 'this is what we want',day.day);
                          return(
                            <p key={key} className={!task ? 'normal' : "event"}><a onClick={onClick}>{task.title}</a>
                            </p>
                          )
                        }
                      })}
                    </div>
                    )
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

