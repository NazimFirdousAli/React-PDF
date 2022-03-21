import React, { useState } from 'react'
import '../App.css'
import Header from './Header.js'


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


const initalState = {
    registrationNumber: "",
    name: "",
    fatherName: "",
    class: "",
    payment: "",
    fees: 0,

}
const initalState2 = {
    tutionFees: 0,
    admissionFees: 0,
    securityDeposit: 0,
    IctFees: 0,
    otherFees: 0

}


function Form() {

    const [value, setValue] = React.useState('cash');
    const [fields, setFields] = useState(initalState)
    const [total, setTotal] = useState(initalState2)
    let sum = 0
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleTotal = (e) => {
        setTotal({
            ...total,
            [e.target.name]: parseInt(e.target.value)
        })

    }
    if (total.tutionFees != NaN) {
        sum = total.tutionFees + total.admissionFees + + total.otherFees + total.securityDeposit + total.IctFees
    }


    const onSubmit = () => {

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
                            <TextField id="outlined-basic" name='registrationNumber' label="Registration Number" variant="outlined" required />
                            <TextField id="outlined-basic" name='name' label="Student Name" variant="outlined" required />
                            <TextField id="outlined-basic" name='fatherName' label="Father Name" variant="outlined" required />
                            <TextField id="outlined-basic" name='class' label="Class" variant="outlined" required /><br />
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
                                            <TextField id="outlined-basic" name='tutionFees' onChange={handleTotal} type="number" autoComplete='off' size='small' label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />
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
                                <TextField className='totalTextField' style={{cursor:"not-allowed !important"}} id="outlined-basic" type="number" autoComplete='off' disabled value={sum} label={Hidden} variant="outlined" InputLabelProps={{ shrink: false }} /><br />
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