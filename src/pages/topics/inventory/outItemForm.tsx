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


const customerOptions = [{label:"Tammi", id:0}, {label:"?Yasodahara", id:1}, {label:"Bubz", id:2}] 
const OutputForm =()=>{
    return(
        <div>
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
                options={customerOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Customer" className={classNames('inputStyle')}/>
                )}
              />
    

                    </Box>
                      <Box>
            {/*Price of acquisition*/}
              <TextField id="soldPrice" label="Sold price" className={classNames('inputStyle')}/>
              </Box>
              <Box className="inputFormPart2">

              
            
              <Box>
                {/* imperfections */}
              <FormControlLabel control={<Checkbox />} label="Bundle" className={classNames('inputStyle')}/>
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
    )
}
export default OutputForm