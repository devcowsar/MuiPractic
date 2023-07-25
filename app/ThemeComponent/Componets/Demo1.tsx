import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react"
interface filmprops{
    top100Films:{
        title:string,
        year:number
    }[]
}
const Grouped:FC<filmprops>=({top100Films})=>{
    const options=top100Films.map((option)=>{
        const firstLetter=option.title[0].toUpperCase();
        return{
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
        };
    });
    return(
        <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="With categories" />}
    />
        
    )
}
export default Grouped;

