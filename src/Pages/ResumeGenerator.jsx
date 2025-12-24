import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



function ResumeGenerator() {
  return (
    <div className='container'>
     <h4 className='text-center mt-5 m-5'  >Create a job-winning Resume in minutes</h4>
     <div className='row m-5 p-5'>
      <div  className='col-lg-4 border shadow rounded  text-center p-5'>
        <i style={{fontSize:'40px',color:'blue'}} class="bi bi-stickies"></i>
        <h4>Add Your Information</h4>
        <p>Add Pre-Written Examples To Each Section</p>
        <h4>Step 1</h4>
      </div>
      <div className='col-lg-4  '>
        
      </div>

      <div className='col-lg-4 border shadow rounded  text-center p-5 '>
        <i style={{fontSize:'40px',color:'red'}} class="bi bi-journal-arrow-down"></i>
        <h4>Download Your Resume</h4>
        <p>Download And Start Applying</p>
        <h4>Step 2</h4>
      </div>
      <Link to="/form">
      <div className='text-center' style={{marginTop:'50px'}}>
        <Button style={{backgroundColor:'darkblue'}} variant="contained">Lets Start</Button>
      </div>
      </Link>
      
      
     </div>
      
    </div>
  )
}

export default ResumeGenerator
