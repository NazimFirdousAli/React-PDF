import React, { useState } from 'react'
import '../App.css'
import Header from './Header.js'

import { useNavigate } from 'react-router-dom';




import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button';


import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';


var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

const newDate = `${day}-${month}-${year}`;

// const depositSlip = '000000001';

const initalState = {
    registrationNumber: "",
    name: "",
    fatherName: "",
    class: "",
    payment: "",
    newDate,
    feesTypes: {
        tution_Fees: 0,
        admission_Fees: 0,
        security_Deposit: 0,
        Ict_Fees: 0,
        other_Fees: 0,
    },
    totalFees: 0,
}



function Form() {


    console.log('newDate===>', newDate)



    const [value, setValue] = React.useState('cash');
    const [fields, setFields] = useState(initalState);
    const depositeSlipValue = localStorage.getItem('depositeSlip');
    const [depositeSlip, setDepositeSlip] = useState(depositeSlipValue ? parseInt(depositeSlipValue) + 1 : 1);
    const [error1, seterror1] = useState(false)
    const [error2, seterror2] = useState(false)
    const [error3, seterror3] = useState(false)
    const [error4, seterror4] = useState(false)

    let sum = Number(0)
    const navigate = useNavigate();

    const handleChange = (event) => {
    setFields({
            ...fields,
            [event.target.name]: event.target.value
        })


    };

    const handleTotal = (e) => {
        setFields({
            ...fields,
            feesTypes: {
                ...fields.feesTypes,
                [e.target.name]: parseInt(e.target.value)
            }
        })
    }
    for (let i in fields.feesTypes) {
        sum = sum + parseInt(fields.feesTypes[i] || 0)
    }
    console.log(error1, error2, error3)


    const onSubmit = (e) => {
        e.preventDefault()
        //  if (fields.registrationNumber == '') {
        //     seterror1(true)
        // }
        // else{
        //     seterror1(false)
        // }
        // if (fields.studentName === '') {
        //     seterror2(true)
        // }
        // else{
        //     seterror2(false)
        // }
        // if (fields.fatherName === '') {
        //     seterror3(true)
        // }
        // else{
        //     seterror3(false)
        // }
        // if (fields.class === '') {
        //     seterror4(true)
        // }
        // else{
        //     seterror4(false)
        // }
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })

        if (fields) {


            localStorage.setItem('data', JSON.stringify(fields));
            navigate('/challan');
            localStorage.setItem('depositeSlip', depositeSlip);



        }

    }
    const classes = useStyles();

    return (
        <div>
            <Header />
            <div className='form'>
                <div>
                    <h1>
                        Fee Payment Challan
                    </h1>
                </div>
                <div className='formInput'>
                    <Paper className='paper' elevation={3} >
                        <form onSubmit={onSubmit}>
                            <TextField  className='inputField' id="outlined-basic" onChange={handleChange} name='registrationNumber' label="Registration Number" variant="outlined" error={error1} required />
                            <TextField className='inputField' id="outlined-basic" onChange={handleChange} name='name' label="Student Name" variant="outlined" error={error2} required />
                            <TextField className='inputField' id="outlined-basic" onChange={handleChange} name='fatherName' label="Father Name" variant="outlined" error={error3} required />
                            <TextField className='inputField' id="outlined-basic" onChange={handleChange} name='class' label="Class" variant="outlined" error={error4} required /><br />
                            <div className={classes.div_radio}>
                                <FormLabel>Payment</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                    style={{ justifyContent: "center" }}
                                    className='radio'
                                >
                                    <FormControlLabel className='radioButton' value="cash" control={<Radio />} label="Cash" />
                                    <FormControlLabel className='radioButton' value="payOrder" control={<Radio />} label="Pay Order" disabled />
                                </RadioGroup>
                            </div>
                            <div>
                                <TextField className='inputField' id="outlined-basic" label="FM Public School Account Number" variant="outlined" value="Bank al habib 0042-7901-4053-02" disabled /><br />
                            </div>
                            <div>

                                <table>
                                    <tr>
                                        <th>Fee Type</th>
                                        <th>Fee Amount</th>
                                    </tr>
                                    <tr>
                                        <td>Tuition Fee</td>
                                        <td>
                                            <TextField className='inputField' id="outlined-basic responsiveMob" name='tutionFees' onChange={handleTotal} type="number"   onWheel={(e) => e.target.blur()} autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} inputProps={{ inputMode: 'numeric', pattern: '{0-9}' }}  /><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Admission Fees</td>
                                        <td><TextField className='inputField' id="outlined-basic responsiveMob" name='admissionFees' onChange={handleTotal} type="number" onWheel={(e) => e.target.blur()} autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br /></td>
                                    </tr>
                                    <tr>
                                        <td>Security Deposit</td>
                                        <td>
                                            <TextField className='inputField' id="outlined-basic responsiveMob" name='securityDeposit' type="number" onWheel={(e) => e.target.blur()} onChange={handleTotal} autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Computer Lab Fees</td>
                                        <td>
                                            <TextField className='inputField' id="outlined-basic responsiveMob" name='IctFees' onChange={handleTotal} type="number" onWheel={(e) => e.target.blur()} autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Other Fees</td>
                                        <td>
                                            <TextField className='inputField' id="outlined-basic responsiveMob" name='otherFees' onChange={handleTotal} type="number" autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />
                                        </td>
                                    </tr>
                                </table>

                            </div>

                            <div className='div-amount'>
                                <TextField className='not_allowed_cursor' id="outlined-basic" type="number" autoComplete='off' disabled value={sum} label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />
                            </div>
                            <div className='div-button'>
                                <Button type='submit' style={{ backgroundColor: "#61aa79" }} variant="contained" defaultChecked >Post Challan</Button>
                                <Button variant="contained" style={{ backgroundColor: "red" }}>Cancel</Button>
                            </div>
                        </form>

                    </Paper>
                </div>
            </div >
        </div>

    )
};


const useStyles = makeStyles({
    div_radio: {
        marginTop: '25px !important',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

export default Form;