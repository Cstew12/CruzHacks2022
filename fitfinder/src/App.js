import react,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function App() {
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

export default App;
