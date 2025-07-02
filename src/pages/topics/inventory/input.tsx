import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import "./styles.scss"


 const materialOptions = [{label:"Kunzite", id:0}, {label:"Rose Quartz", id:1}, {label:"Calcite", id:2}]
 const shapeOptions = [{label:"Pyramid", id:0}, {label:"Tower", id:1}, {label:"Heart", id:2}]
 const originOptions = [{label:"Kristie", id:0}, {label:"Supplier1", id:1}, {label:"Supplier2", id:2}]
const InputForm = ()=>{
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h2>Input form</h2>

        <form>
                <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
    >
        {/* Material */}
       <Autocomplete
    autoComplete
      disablePortal
      options={materialOptions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Material" />}
    />
    {/* shape*/ }
        <Autocomplete
        autoComplete
        disablePortal
        options={shapeOptions}
        sx={ {width: 300}}
        renderInput={(params) => <TextField {...params} label="Shape"/>}
        />

        {/*Origin*/}
        <Autocomplete
        autoComplete
        disablePortal
        options={originOptions}
        sx={ {width: 300}}
        renderInput={(params) => <TextField {...params} label="Origin"/>}
        />
        {/*Date of input*/} 
        <DatePicker className="datepicker"/>
    </Box>
            





        </form>
        </LocalizationProvider>
        </>
    )
}

export default InputForm