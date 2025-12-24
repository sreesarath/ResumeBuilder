import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IoIosClose } from "react-icons/io";
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';
import { addResume } from '../../services/AllAPI';


const steps = ['Basic information', 'Contact Details', 'Education Details' , 'work experiance' , 'skills & cetificates ', 'Review & submit' ];
function Steps({userInput,setuserInput,setfinish,setresumeId})

 {

 
  
  
    const handleResume=async ()=>{
      const {name,jobTitle,location}=userInput.PersonalData
      if (name && jobTitle && location) {
        try {
          const  result= await addResume(userInput)
          console.log(result);
          swal("Good job!", "resume added successfully !", "success");
          setfinish(true)
          setresumeId(result?.data?.id)
          
        } catch (error) {
          console.log(error);
          swal("error!", "resume added failed !", "error");
          setfinish(false)
          
          
        }
        

      }
      else{
      alert("please fill the form completely")
    }
    }
    
    const skillsuggestionArray=['REACT','ANGULAR','NODEJS','EXPRESS','MONGODB','GIT','HTML','CSS','BOOTSTRAP','TAILWIND']
    const userskillref=React.useRef()
    const addskill=(inputskill)=>{
      if (inputskill) {
        if (userInput.skills.includes(inputskill)) {
          alert("skill already added")
          
        }
        else{
          setuserInput({...userInput,skills:[...userInput.skills,inputskill]})
          userskillref.current.value=""
        }
        
      }
    }

    const removeskill=(skill)=>{

      setuserInput({...userInput,skills:userInput.skills.filter(val=>val !=skill)})
    }

    const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
    const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

//   render the content corrensponding to the array index

const rederarraySteps=(stepcount)=>{
    switch (stepcount) {
        case 0:
            return(
                <div>
            <h3>Personal Details</h3>
            <div className='d-flex flex-column'>
            <TextField  value={userInput.PersonalData.name} onChange={(e)=>setuserInput({...userInput,PersonalData:{...userInput.PersonalData,name:e.target.value}})} id="standard-basic" label="Full Name" variant="standard" />
            <TextField value={userInput.PersonalData.jobTitle} onChange={(e)=>setuserInput({...userInput,PersonalData:{...userInput.PersonalData,jobTitle:e.target.value}})} id="standard-basic" label="Job Title" variant="standard" />
            <TextField value={userInput.PersonalData.location} onChange={(e)=>setuserInput({...userInput,PersonalData:{...userInput.PersonalData,location:e.target.value}})} id="standard-basic" label="Location" variant="standard" />
            </div>
            
           </div>
            )
            case 1:
            return(
                <div>
            <h3>Contact Details</h3>
            <div className='d-flex flex-column'>
            <TextField onChange={(e)=>setuserInput({...userInput,PersonalData:{...userInput.PersonalData,email:e.target.value}})} id="standard-basic" value={userInput.PersonalData.email} label="Email" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,PersonalData:{...userInput.PersonalData,phone:e.target.value}})} id="standard-basic" value={userInput.PersonalData.phone} label="Phone Number" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,PersonalData:{...userInput.PersonalData,github:e.target.value}})} id="standard-basic" value={userInput.PersonalData.github} label="GitHub Profile Link" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,PersonalData:{...userInput.PersonalData,likedin:e.target.value}})} id="standard-basic" value={userInput.PersonalData.likedin} label="Linkedin Profile Link" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,PersonalData:{...userInput.PersonalData,portfolio:e.target.value}})} id="standard-basic" value={userInput.PersonalData.portfolio} label="Protfolio Profile Link" variant="standard" />
            </div>
            
           </div>
            )
            case 2:
            return(
                <div>
            <h3>Education Details</h3>
            <div className='d-flex flex-column'>
            <TextField onChange={(e)=>setuserInput({...userInput,education:{...userInput.education,course:e.target.value}})} value={userInput.education.course} id="standard-basic" label="Course Name" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,education:{...userInput.education,collage:e.target.value}})} value={userInput.education.collage} id="standard-basic" label="Collage Name" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,education:{...userInput.education,university:e.target.value}})} value={userInput.education.university} id="standard-basic" label="University" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,education:{...userInput.education,year:e.target.value}})} value={userInput.education.year} id="standard-basic" label="Year Of Passout" variant="standard" />
            
            </div>
            
           </div>
            )
            case 3:
            return(
                <div>
            <h3>Professional Details</h3>
            <div className='d-flex flex-column'>
            <TextField onChange={(e)=>setuserInput({...userInput,experience:{...userInput.experience,jobRole:e.target.value}})} value={userInput.experience.jobRole} id="standard-basic" label="Job or Internship" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})} value={userInput.experience.company} id="standard-basic" label="Company Name" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,experience:{...userInput.experience,jobLocation:e.target.value}})} value={userInput.experience.jobLocation} id="standard-basic" label="Location" variant="standard" />
            <TextField onChange={(e)=>setuserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})} value={userInput.experience.duration} id="standard-basic" label="Duration" variant="standard" />
            
            </div>
            
           </div>
            )
            case 4:
            return(
                <div>
            <h3>Skills</h3>
            <div className='d-flex flex-column'>
            {/* <TextField id="standard-basic" label="Add Skills" variant="standard" /> */}
            <input ref={userskillref} type="text" className='form-control' placeholder='Add skill' />
            <Button onClick={()=>addskill(userskillref.current.value)} style={{width:'50px',marginTop:'20px',backgroundColor:'darkblue'}} variant="contained">ADD</Button>
            
            
            </div>
            <h5 className='mt-3'>suggestions:</h5>
            <div className='d-flex flex-wrap'>
                {
                    skillsuggestionArray.map(userskill=>(
                        <Button onClick={()=>addskill(userskill)} className='m-1' key={userskill} style={{width:'100px',marginTop:'20px',color:'black'}} variant="outlined">{userskill}</Button>
                    ))
                }
            </div>
            <h5 className='mt-3'>Added Skills:</h5>
            <div className='d-flex flex-wrap my-5'>
              {
                userInput.skills.length>0 ?
                userInput.skills.map(skill=>(
                <span className='btn btn-primary ms-1 mt-1 d-flex align-items-center justify-content-center'>{skill} <button style={{color:'white', height:'35px'}} className='btn fs-3 ' onClick={()=>removeskill(skill)}><IoIosClose className='btn-light mb-5' /></button>

                </span>
                ))
                :
                <span>NIL</span>
              
              }

                

            </div>
             

            
           </div>
            )
            case 5:
            return(
                <div>
            <h3>Professional Summary</h3>
            <div className='d-flex flex-column'>
            <TextField onChange={(e)=>setuserInput({...userInput,summary:e.target.value})} value={userInput.summary} multiline rows={5} id="standard-summery" label="Write A Short O f Summery Of Yourself " variant="standard" />
            
            
            </div>
            
           </div>
            )

            
        
           
    }

}


  return (

       <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* view of each element */}
          <Box>
           {rederarraySteps(activeStep)}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            
              {activeStep === steps.length - 1 ?
              <Button onClick={handleResume}>Finish</Button>
              :
              <Button onClick={handleNext}>Next</Button>
               }
            
          </Box>
        </React.Fragment>
      )}
    </Box> 
  )
}

export default Steps
