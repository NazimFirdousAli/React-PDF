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


var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate() + 1;
var year = dateObj.getUTCFullYear();

const newDate = `${day}-${month}-   ${year}`;

// const depositSlip = '000000001';

const initalState = {
    registrationNumber: "",
    name: "",
    fatherName: "",
    class: "",
    payment: "",
    newDate,
    feesTypes: {
        tutionFees: 0,
        admissionFees: 0,
        securityDeposit: 0,
        IctFees: 0,
        otherFees: 0,
    },
    totalFees: 0,
}



function Form() {
  

    console.log('newDate===>',newDate)
    
   

    const [value, setValue] = React.useState('cash');
    const [fields, setFields] = useState(initalState);
    const [depositeSlip,setDepositeSlip] = useState(0);
    let sum = Number(0)
    const navigate = useNavigate();

    
    const handleChange = (event) => {
        setFields({
            ...fields,
            [event.target.name]:event.target.value
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
    console.log(fields)

    const onSubmit = (e) => {
        e.preventDefault()
        setFields({
            ...fields,
                [e.target.name]: e.target.value            
        })
        if (fields){
            setDepositeSlip((depositeSlip)=> depositeSlip + 1)
            
            localStorage.setItem('data',JSON.stringify(fields));
            localStorage.setItem('depositeSlip',depositeSlip)
            
            
            navigate('/challan');
        }

    }
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
                            <TextField id="outlined-basic" onChange={handleChange} name='registrationNumber' label="Registration Number" variant="outlined" required />
                            <TextField id="outlined-basic" onChange={handleChange} name='name' label="Student Name" variant="outlined" required />
                            <TextField id="outlined-basic" onChange={handleChange} name='fatherName' label="Father Name" variant="outlined" required />
                            <TextField id="outlined-basic" onChange={handleChange} name='class' label="Class" variant="outlined" required /><br />
                            <div className='div-radio'>
                                <FormLabel>Payment</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                    style={{ justifyContent: "center" }}
                                >
                                    <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                                    <FormControlLabel value="payOrder" control={<Radio />} label="Pay Order" />
                                </RadioGroup>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="FM Public School Account Number" variant="outlined" value="Bank al habib 0042-7901-4053-02" disabled /><br />
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
                                            <TextField id="outlined-basic" name='tutionFees' onChange={handleTotal} type="number" autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} inputProps={{ inputMode: 'numeric', pattern: '{0-9}' }} /><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Admission Fees</td>
                                        <td><TextField id="outlined-basic" name='admissionFees' onChange={handleTotal} type="number" autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br /></td>
                                    </tr>
                                    <tr>
                                        <td>Security Deposit</td>
                                        <td>
                                            <TextField id="outlined-basic" name='securityDeposit' type="number" onChange={handleTotal} autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ICT lab fees</td>
                                        <td>
                                            <TextField id="outlined-basic" name='IctFees' onChange={handleTotal} type="number" autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Other fees</td>
                                        <td>
                                            <TextField id="outlined-basic" name='otherFees' onChange={handleTotal} type="number" autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />
                                        </td>
                                    </tr>
                                </table>

                            </div>

                            <div className='div-amount'>
                                <TextField className='totalTextField' style={{ cursor: "not-allowed !important" }} id="outlined-basic" type="number" autoComplete='off' disabled value={sum} label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />
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
}

export default Form