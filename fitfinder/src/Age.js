import react,{useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function Age() {
  const [selectedDate, setSelectedDate] =useState(null)
  return (
    <div className="App">
      <DatePicker 
        selected={selectedDate} 
        onChange={date=> setSelectedDate(date)} 
        maxDate={new Date()}
      />
    </div>
  );
}

export default Age;
