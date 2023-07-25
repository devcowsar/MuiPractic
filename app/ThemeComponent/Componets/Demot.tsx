import {useState} from 'react'
import { Autocomplete } from '@mui/lab';
import { TextField } from '@mui/material';
const options=["options1","options2"];
const ControllableStates=()=>{
    const[value, setValue] = useState<string|null>(options[0]);
    const [inputValue,setInputValue]=useState("");

    return(
        <div>
            <div>{`value:${value!==null?`'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>
            <br/>
            <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        
        id="freeSolo"
        options={options}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
        </div>
    )
}
export default ControllableStates;