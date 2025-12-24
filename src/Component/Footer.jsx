import React from 'react'
import './Footer.css'
import { MdEmail } from "react-icons/md";

import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
function Footer() {
  return (
    <>
    <div className='fot'>
            <div className='text-center'>
                    <h1>Contact with Us</h1>
                    <h5><MdEmail className='fs-4 me-1'/>resumebulider@gemail.com</h5>
                    <h5><BiSolidPhoneCall  className='fs-4 me-1'/>9845623157</h5>
                  
                      <h4 className='mt-4'>Contact with us</h4>
                      <div className='ico'>
                        <FaWhatsapp className='i'/>
                        <FaInstagram className='i'/>
                        <FaLinkedin className='i'/>
                        
                      </div>
                    <h5 className='mt-4'> Designed & built with <FaHeart style={{color:' #fd0808'}}/> using React</h5>
            </div>
    </div>
    </>
  )
}

export default Footer
