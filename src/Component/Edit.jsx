import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BiSolidEdit } from "react-icons/bi";
import { TextField } from '@mui/material';
import { IoIosClose } from "react-icons/io";
import { getSingleResumeAPI } from '../../services/AllAPI';
import { useEffect } from 'react';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    maxHeight: '80vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function Edit({resumeId}) {
    console.log(resumeId);
    

    const [open, setOpen] = React.useState(false);

      useEffect(()=>{
        getEditResume()
    },[])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const getEditResume=async()=>{
        try {
            const result=await getSingleResumeAPI(resumeId)
            console.log(result);
            
        } 
        catch (error) {
            console.log(error);
            
            
        }
    }
    return (
        <>
            <button onClick={handleOpen} className='btn'><BiSolidEdit className='text-primary fs-3' /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details!!
                    </Typography>
                    
                    <Button style={{marginLeft:'200px'}} className='  m-4' variant="contained" color="success">
                        update
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit
