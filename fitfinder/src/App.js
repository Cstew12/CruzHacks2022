import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Form, FormGroup} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import RangeSlider from "react-bootstrap-range-slider";

function App() {
    const [value, setValue] = React.useState(50);

    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div className="App">
            {/*<DatePicker*/}
            {/*    selected={selectedDate}*/}
            {/*    onChange={date=> setSelectedDate(date)}*/}
            {/*    maxDate={new Date()}*/}
            {/*/>*/}
            <div className="Heading">
                <h1>FitFinder: Find Your Fit</h1>
            </div>
            <Form>
                <FormGroup>
                    <Form.Label>Name</Form.Label>
                    <Form.Control/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Gender</Form.Label>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Age</Form.Label>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Weight</Form.Label>
                    <div className='RangeSlider'>
                        <RangeSlider
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            tooltip='on'
                            size='lg'
                        />
                    </div>
                </FormGroup>


            </Form>
        </div>
    );
}

export default App;
