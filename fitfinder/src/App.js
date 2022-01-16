import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Button, Form, FormGroup} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import RangeSlider from "react-bootstrap-range-slider";
import {useNavigate} from "react-router-dom";

function App() {
    const [value1, setValue1] = React.useState(20);
    const [value2, setValue2] = React.useState(50);
    const [value3, setValue3] = React.useState(100);
    const navigate = useNavigate();
    return (
        <div className="App">

            <div className="Heading">
                <h1>FitFinder: Find Your Fit</h1>
            </div>
            <Form>
                <FormGroup className='question'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Gender</Form.Label>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" checked={true}/>
                            Man
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2"/>
                            Woman
                        </label>
                    </div>
                </FormGroup>
                <FormGroup className='question'>
                    <Form.Label>Age</Form.Label>
                    <div>
                        <RangeSlider
                            value={value1}
                            onChange={e => setValue1(e.target.value)}
                            tooltip='on'
                            size='lg'
                            min={5}
                            max={120}
                        />
                    </div>

                </FormGroup>


                <FormGroup className='question'>
                    <Form.Label>Weight (lbs)</Form.Label>
                    <div className='RangeSlider'>
                        <RangeSlider
                            value={value2}
                            onChange={e => setValue2(e.target.value)}
                            tooltip='on'
                            size='lg'
                            min={50}
                            max={500}
                        />
                    </div>
                </FormGroup>
                <FormGroup className='question'>
                    <Form.Label>Height (cm)</Form.Label>
                    <div className='RangeSlider'>
                        <RangeSlider
                            value={value3}
                            onChange={e => setValue3(e.target.value)}
                            tooltip='on'
                            size='lg'
                            min={60}
                            max={250}
                        />
                    </div>
                </FormGroup>
                <FormGroup className='question'>
                    <Form.Label>
                        How often do you exercise currently?
                    </Form.Label>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" checked={true}/>
                            Less than once a month
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2"/>
                            1-3 times a month
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option3"/>
                            1-3 times a week
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option4"/>
                            4+ times a week
                        </label>
                    </div>
                </FormGroup>

                <FormGroup className='question'>
                    <Form.Label>
                        How would you describe yourself?
                    </Form.Label>

                </FormGroup>
                <FormGroup>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" checked={true}/>
                            Beginner
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2"/>
                            Intermediate
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option3"/>
                            Advanced
                        </label>
                    </div>

                </FormGroup>

                <FormGroup className='question'>
                    <Form.Label>
                        What exercise goal do you have?
                    </Form.Label>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" checked={true}/>
                            I want to lose weight.
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2"/>
                            I want to stay healthy.
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option3"/>
                            I want to gain muscle.
                        </label>
                    </div>

                </FormGroup>
                <FormGroup className='question'>
                    <Button class="btn btn-outline-secondary m-4 p-1" onClick={() => {navigate("/report")}}>Submit</Button>

                </FormGroup>

            </Form>
        </div>
    );
}

export default App;
