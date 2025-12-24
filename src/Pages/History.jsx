import * as React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDeleteSweep } from "react-icons/md";
import { deleteHistAPI, getAllHistAPI } from '../../services/AllAPI';
import { useState } from 'react';
import { useEffect } from 'react';








function History() {

  const [Resume,setResume]=useState([])
  useEffect(()=>{
      getHistory()
  },[])

 const getHistory=async()=>{

  try {
    const result=await getAllHistAPI()
    console.log(result);
    setResume(result.data)
    
  } catch (error) {
    console.log(error);
    
    
  }

  }
  const deleteHist= async(id)=>{
    try {
       await deleteHistAPI(id)
       getHistory()

    } catch (error) {
      console.log(error);
      
      
    }
  }
  return (
    <div >
      <h1 className='text-center my-5'>Resume Downloaded History</h1>
      <Link style={{marginLeft:'1450px'}} className=' text-decoration-none' to={'/'} >
         Back
      </Link>
      {
        Resume?.length>0?
        
        Resume?.map(res=>(
        
        <div className='row ms-4 d-flex align-items-center justify-content-center '>
      
        <div className='col-md-4 '>
          <Box component="section" className='bordr rounded shadow ' sx={{ p: 2, border: '1px bold grey',textAlign:'center' }}>
            <div className='d-flex align-items-center justify-content-around'>
              <h5 className='text-center'>Review at: <br />{res?.time}</h5>
              <button onClick={()=>deleteHist(res?.id)} className='btn text-danger fs-3'><MdDeleteSweep /></button>

            </div>
      <div className="border rounded p-3 ">
        <img src={res?.imageURL} alt="resume img" className='img-fluid' />
      </div>

     
    </Box>

        </div>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4'>

        </div>
      </div>
        ))
      :
      <h2 className='text-center text-danger fw-bold my-3'>History Not Available</h2>
      }
      
      
    </div>
  )
}

export default History
