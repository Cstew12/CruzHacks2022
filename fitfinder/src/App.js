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
                    <Button class= "btn btn-outline-primary m-1 p-1">Male</Button>
                    <Button class= "btn btn-outline-primary m-1 p-1">Female</Button>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Age</Form.Label>
                    <FormRange></FormRange>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Weight</Form.Label>
                    <FormRange></FormRange>
                </FormGroup>
                <FormGroup>
                    <Form.Label>
                        How often do you exercise currently?
                    </Form.Label>

                </FormGroup>
                <FormGroup>
                    <Button class= "btn btn-outline-secondary m-1 p-1">Less than once a month</Button>
                    <Button class= "btn btn-outline-secondary m-1p-1">1-3 times a month</Button>
                    <Button class= "btn btn-outline-secondary m-1 p-1">1-3 times a week</Button>
                    <Button class= "btn btn-outline-secondary m-1 p-1">4+ times a week</Button>
                </FormGroup>
                <FormGroup>
                    <Form.Label>
                        How would you describe yourself?
                    </Form.Label>

                </FormGroup>
                <FormGroup>
                    <Button class= "btn btn-outline-secondary m-1 p-1">Beginner</Button>
                    <Button class= "btn btn-outline-secondary m-1 p-1">intermediate</Button>
                    <Button class= "btn btn-outline-secondary m-1 p-1">advanced</Button>
                    
                </FormGroup>
                <FormGroup>
                    <Button class= "btn btn-outline-secondary m-4 p-1">Submit</Button>
                    
                </FormGroup>




            </Form>
        </div>
    );
}

export default App;
