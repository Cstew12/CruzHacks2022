import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Button, Form, FormGroup} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";

function App() {
    const [selectedDate, setSelectedDate] =useState(null)
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
                    <Button class= "btn btn-outline-primary p-1">Male</Button>
                    <Button class= "btn btn-outline-primary p-1">Female</Button>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Age</Form.Label>
                    <FormRange></FormRange>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Weight</Form.Label>
                    <FormRange></FormRange>
                </FormGroup>



            </Form>
        </div>
    );
}

export default App;
