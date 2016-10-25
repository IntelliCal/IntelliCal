var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Month(month, year, dates){
  this.date = new Date(year, month, 0);
  this.NumberOfDays = this.date.getDate();
  this.nameofmonth = months[this.date.getMonth()];
  this.firstday = 1;
  this.year = this.date.getFullYear();
  this.calendar = generateCalendar(this.NumberOfDays, month-1, this.firstday, year, dates);
  console.log('this.calendar======', this.calendar)
}

function dateToDay(year, month, day) {
  return (new Date(year, month, day)).getDay();
}

function generateCalendar(NumberOfDays, month, day, year, dates) {
  var weekday = dayOfWeek[dateToDay(year, month, day)];

  if (weekday in dates) {
    // console.log('weekday and day', weekday, day)
    dates[weekday].push(day);
  } else {
    console.log('weekday and day', weekday, day)
      if (day === 1) {
        var firstIndex = dayOfWeek.indexOf(weekday)
        for (var i =0; i < firstIndex; i++) {
          dates[dayOfWeek[i]] = ['-'];
        }
        dates[dayOfWeek[firstIndex]] = [1]
      } else {
        dates[weekday] = [day];
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
    console.log(month)
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
                  return <li> {day} </li>
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


    // <div>
    //   <Monday />
    //   </div>
    //   <div>
    //   <Tuesday />
    //   </div>
    //   <div>
    //   <Wednesday />
    //   </div>
    //   <div>
    //   <Thursday />
    //   </div>
    //   <div>
    //   <Friday />
    //   </div>
    //   <div>
    //   <Saturday />
    //   </div>