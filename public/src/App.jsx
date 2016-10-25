var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function onClick() {
  console.log(this)
}
function Month(month, year, dates){
  this.date = new Date(year, month, 0);
  this.NumberOfDays = this.date.getDate();
  this.nameofmonth = months[this.date.getMonth()];
  this.firstday = 1;
  this.year = this.date.getFullYear();
  this.calendar = generateCalendar(this.NumberOfDays, month-1, this.firstday, year, dates);
  // console.log('this.calendar======', this.calendar)
}

function dateToDay(year, month, day) {
  return (new Date(year, month, day)).getDay();
}

function generateCalendar(NumberOfDays, month, day, year, dates) {
  var weekday = dayOfWeek[dateToDay(year, month, day)];

  if (dates[weekday]!== undefined) {
    dates[weekday].push({day:day,events:[]});
  } else {
      if (day === 1) {
      var firstIndex = dayOfWeek.indexOf(weekday)
      for (var i =0; i < firstIndex; i++) {
        dates[dayOfWeek[i]] = [{day:'-',events:[]}];
      }
      dates[dayOfWeek[firstIndex]] = [{day:1,events:[]}]
    } else {
      dates[weekday] = [{day:day,events:[]}];
    }
  }
  day++;
  return day > NumberOfDays ? dates : generateCalendar(NumberOfDays, month, day, year, dates);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: this.generateCalendar()
    };
  }

  generateCalendar() {
    var month =  {};
    month = new Month(10, 2016, month);
    return month;
  }

  render() {
    var calendar = [];
    for (var property in this.state.dates.calendar) {
      calendar.push(this.state.dates.calendar[property]);
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
                  return <li onClick={onClick.bind(day)}> {day.day} </li>
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







ReactDOM.render(<App />, document.getElementById('app'));

