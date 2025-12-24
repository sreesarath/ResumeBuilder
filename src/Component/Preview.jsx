import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import Edit from './Edit';

import { LuHistory } from "react-icons/lu";
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { addDownloadHistAPI } from '../../services/AllAPI';




function Preview({userInput,finish,resumeId}) {
  console.log(userInput);

  const [DownloadStatus,setDownloadStatus]=useState(false)
  
const downloadCv= async()=>{
  console.log("inside download");
// get element by taking sreenshot
 try { 
  const input=document.getElementById('result')
  console.log(input);

  const canvas=await html2canvas(input,{scale:2})
  const imageURL=canvas.toDataURL('image/png')
  console.log(imageURL);

  //generate pdf

  const pdf=new jsPDF()
  // get height and width

  const pdfHgt=pdf.internal.pageSize.getHeight()
  const pdfWdt=pdf.internal.pageSize.getWidth()
  
  const imgwidth=pdfWdt - 40;
  const imgheight=(imgwidth * 1.414);

  const x=(pdfWdt-imgwidth)/2
  const y=(pdfHgt-imgheight)/2


  // place image into pdf

  pdf.addImage(imageURL,'PNG',x,y,imgwidth,imgheight)
  pdf.save('resume.pdf')
  // to get time


  let toLocalTime= new Date()

  const time=toLocalTime.toLocaleString()
  // console.log(time);
  

  //add downloaded cv to history using api call
   try {
    const result= await addDownloadHistAPI({...userInput,imageURL,time})
    console.log(result);
    setDownloadStatus(true)
    
  } catch (error) {
    console.log(error);
    
  }
  }
  catch(error){
    console.log("something went wrong",error);
    
  }

 


  
  
  
}

  return (
    <div>
        
        {
          userInput.PersonalData.name!="" &&
          <Box  component="section" sx={{ p: 2, border: '1px bold grey',textAlign:'center' }}>

         {
          finish &&
             <Stack direction={'row'} sx={{justifyContent:'flex-end',paddingRight:'20px'}}>
         {/* Download */}
         <button onClick={downloadCv} className='btn'>
            <FaFileDownload className='text-primary fs-3' />
         </button>
         
         {/* Edit */}
        { DownloadStatus &&
          <>
          
          <Edit resumeId={resumeId} />
         {/* history */}
         <Link to={'/history'} className='btn'><LuHistory className='text-primary fs-3'/></Link>

         </>
         }
         <Link to={'/resume'} className='btn text=primary'>Back</Link>
        </Stack>
         }

      <Paper id='result' style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }} elevation={10} sx={{p:5}} >
        <h2>{userInput.PersonalData.name}</h2>
        <h2>{userInput.PersonalData.jobTitle}</h2>
        <p> <span>{userInput.PersonalData.phone}</span><span>|</span>  <span>{userInput.PersonalData.email}</span> <span>|</span><span>{userInput.PersonalData.location}</span> </p>
        <p>
            <a href="">{userInput.PersonalData.github}</a>
            <span>|</span>
            <a href="">{userInput.PersonalData.likedin}</a>
            <span>|</span>
            <a href="">{userInput.PersonalData.portfolio}</a>
        </p>
        <Divider>SUMMARY</Divider>
        <p className='text-start'>{userInput.summary}</p>

        <Divider>Education</Divider>
        <h1 style={{fontSize:'30px'}} className='fw-bold' >{userInput.education.course}</h1>
        <p><span>{userInput.education.collage}</span><span>|</span><span>{userInput.education.university}</span><span>|</span><span>{userInput.education.year}</span></p>

        <Divider>Professional Experience</Divider>
        <h1 style={{fontSize:'30px'}} className='fw-bold' >{userInput.experience.jobRole}</h1>
        <p><span>{userInput.experience.company}</span><span>|</span><span>{userInput.experience.jobLocation}</span><span>|</span><span>{userInput.experience.duration}</span></p>

        <Divider>Skills</Divider>



        <Stack direction={'row'} spacing={2}>

          {

          userInput.skills.length>0 &&
          userInput.skills.map(val=>(<span>{val}</span>))

          }
           
        </Stack>

        </Paper>
        

     
    </Box>
    
        }
      
    </div>
  )
}

export default Preview

