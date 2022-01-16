import 'bootstrap/dist/css/bootstrap.min.css';
import './Report.css'
import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Button, Form, FormGroup} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import RangeSlider from "react-bootstrap-range-slider";

function Report() {
    const [value1, setValue1] = React.useState(20);
    const [value2, setValue2] = React.useState(50);
    const [value3, setValue3] = React.useState(100);

    return (
        <div className="Report">

            <div className="Heading">
                <h1>FitFinder: Find Your Fit</h1>
            </div>
            <h2>
                Your Report:
            </h2>

            <h4>
                Recommended Exercises:
            </h4>
            <h4>
                For Cardio:
            </h4>
            - Jogging - Cycling - Jumping Jacks
            <h4>
                For Upper Body Strength:
            </h4>
            - Push ups

            - Pull ups

            - Dips
            <h4>
                For Lower Body Strength:
            </h4>
            - Lunges
            - Squats

        </div>
    )
        ;
}

export default Report;
