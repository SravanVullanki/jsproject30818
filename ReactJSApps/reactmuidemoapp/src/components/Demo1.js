import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Demo1()
{
  const[pname,setPname]=useState("")
  // where pname is product name & state variable
  const [productlist,setProductList]=useState([])
  const handlepnameinput = (event)=>
  {
    //event is an object 
    // console.log(event.target.value)
    setPname(event.target.value)
  }
  const addproduct=()=>
  {
    if(pname.length>0)
    {

    //spread operator
    //here pname will be merged with productlist
    //...productlist will make array into individual elements
    // console.log("Before:"+productlist)
    setProductList([...productlist,pname])
    // console.log(productlist)
    setPname("")
    }
    else
    {
      alert("Please Enter Product Name")
      document.getElementById("pname").focus()
    }
  }
  return (
    <div>
      <h3>Product List</h3>
      <hr></hr>
      <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate autoComplete="off"
    >
      <TextField id="pname" label="Enter Product Name" variant="outlined" value={pname} onChange={handlepnameinput} required/>
      <hr></hr>
    </Box>
      {/* <button onClick={addproduct}></button> */}
      <Stack spacing={1} direction="row">
      <Button variant="contained" onClick={addproduct}>Add Product</Button>
      </Stack>
      <br/>
      <br/>
      <table border={1} bgcolor='lightgray' width="15%" height="15%">
      {
        productlist.length>0?
        productlist.map((product,index)=>(
    
          <tr key={index}>
            <td>{index+1}</td>
            <td>{product}</td>
          </tr>
        
      )):<p>No Records Available</p>
      }
      </table>
    </div>
  );
}
