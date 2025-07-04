import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import classNames from "classnames";

import "./styles.scss"


 const materialOptions = [{label:"Kunzite", id:0}, {label:"Rose Quartz", id:1}, {label:"Calcite", id:2}]
 const shapeOptions = [{label:"Pyramid", id:0}, {label:"Tower", id:1}, {label:"Heart", id:2}]
 const originOptions = [{label:"Kristie", id:0}, {label:"Supplier1", id:1}, {label:"Supplier2", id:2}]
 const label = { inputProps: { 'aria-label': 'Imperfect Item' } };
const InputForm = ()=>{
     const [value, setValue] = React.useState<number | null>(null);
    return (
      <div className="inputForm">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <h2>Input form</h2>

            <Box
              className="inputFormOutline"
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
            >
                <Box className="inputFormUpperSection">

              
                <Box className="inputFormPart1">

                
              {/* Material */}
              <Autocomplete
                autoComplete
                disablePortal
                options={materialOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Material" className={classNames('inputStyle')}/>
                )}
              />
              {/* shape*/}
              <Autocomplete
                autoComplete
                disablePortal
                options={shapeOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Shape" className={classNames('inputStyle')}/>
                )}
              />

              {/*Origin*/}
              <Autocomplete
                autoComplete
                disablePortal
                options={originOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Origin" className={classNames('inputStyle')}/>
                )}
              />
              {/*Date of input*/}
              <Box>
                <DatePicker  label="Date of acquisition" className={classNames('inputStyle', "datepicker")}/>
              </Box>
                    </Box>
              <Box className="inputFormPart2">

              
              <Box>
            {/*Price of acquisition*/}
              <TextField id="priceAcq" label="Price of acquisition" className={classNames('inputStyle')}/>
              </Box>
              <Box>
                {/* weight */}
              <TextField id="weight" label="Weight" className={classNames('inputStyle')}/>
              </Box>
              <Box>
                {/* size */}
              <TextField id="size" label="Size" className={classNames('inputStyle')}/>
              </Box>
              <Box>
                {/* imperfections */}
              <FormControlLabel control={<Checkbox />} label="Imperfect" className={classNames('inputStyle')}/>
              </Box>
              </Box>
                  </Box>
              <Box className={classNames('inputStyleButtonContainer')}>
                <Button variant="contained">Add</Button>
                <Button variant="contained">Cancel</Button>
              </Box>
              
            </Box>
        </LocalizationProvider>
      </div>
    );
}

export default InputForm