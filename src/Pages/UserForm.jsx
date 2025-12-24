import React, { useState } from 'react'
import Steps from '../Component/Steps'
import Preview from '../Component/Preview'
import Edit from '../Component/Edit'
import { ClassNames } from '@emotion/react'


function UserForm() {
   const [userInput,setuserInput]=React.useState({
    PersonalData:{
      name:"",
      jobTitle:"",
      location:"",
      email:"",
      phone:"",
      github:"",
      likedin:"",
      portfolio:"",


    },
    education:{
      course:"",
      collage:"",
      university:"",
      year:"",

    },
    experience:{
      jobRole:"",
      company:"",
      jobLocation:"",
      duration:"",


    },
    skills:[],
    summary:""
    

  })
  // state for finish
  const [finish,setfinish]=useState(false)
  const [resumeId,setresumeId]=useState("")
  return (
    <>
  {
    finish ?
    <div style={{minHeight:'100vh'}} ClassName='d-flex align-items-center justify-content-center'>
      <Preview userInput={userInput} finish={finish} resumeId={resumeId} />
    </div>
    :
    <div className='container'>
      <div className='row p-5'>
        <div className='col-lg-6'>
         <Steps userInput={userInput} setuserInput={setuserInput} setfinish={setfinish} setresumeId={setresumeId}/>
        </div>
        <div  className='col-lg-6 mt-5'>
        <Preview userInput={userInput} finish={finish}/>
        </div>

      </div>
      
    </div>
  

  }
  </>
  )
}

export default UserForm
