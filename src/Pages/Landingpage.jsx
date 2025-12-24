import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <div>
      <div style={{backgroundImage:"url('https://as2.ftcdn.net/v2/jpg/02/09/66/41/1000_F_209664108_yIuIc29o9ClGFdTVOaOcvrAZJPqsfZbT.jpg')",width:'1822px', height:'600px',babackgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundAttachment:'fixed'} }>

      <div className='row'>
        <div className='col-md-4 col-6'></div>
        <div className='col-md-4 col-6 text-center border box-shadow py-3 rounded' style={{backgroundColor:'rgb(255,255,255,0.3)',marginTop:'180px',width:'419px'}}>
          <h3>Designed to get hired.</h3>
          <h4>Your Skills,Your Story,Your Next <br />Job-All in one</h4>
          <Link to='/resume'>
          <Button variant="contained" style={{backgroundColor:'blue'}}>Make Your Resume</Button>
          </Link>
          
        </div>
        <div className='col-md-4 col-6'></div>

      </div>

      </div>
      <div className='mt-4 mb-5'>
        <h3 className='text-center'>Tools</h3>
        <div className='row justify-content-center'>
          <div className='col-md-4 col-6 me-5'>
            <h3>Resume</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro placeat laudantium pariatur aliquid aspernatur architect</p>
            <h3>Cover Letter</h3>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro placeat laudantium pariatur aliquid aspernatur architecto maiores </p>
            <h3>Jobs</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro placeat laudantium pariatur aliquid aspernatur architecto</p>
            <h3>Applications</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro placeat laudantium pariatur aliquid aspernatur arc</p>
            


          </div>
          <div className='col-md-4 col-6 ms-5'>
          <img src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@3x.png" alt="" style={{width:'500px'}}/>
          </div>

        </div>
      </div>
      <div style={{backgroundImage:"url('https://images.pexels.com/photos/6476259/pexels-photo-6476259.jpeg?cs=srgb&dl=pexels-mikael-blomkvist-6476259.jpg&fm=jpg')",backgroundAttachment:"fixed", width:'1520px', height:'800px',backgroundSize:'cover', backgroundPosition:'top'}}>

      </div>
      <div className='mt-4 mb-5'>
        <h3 className='text-center'>Testimonny</h3>
        <div className='row'>
          <div className='col-md-3 col-4 m-5'>
            
            <h4>Trusted By Professionals Worldwide</h4>
            <div style={{width:'450px',marginTop:'30px',textAlign:'inherit'}}>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non deserunt illo. Non, nam? Reiciendis non in alias officia odio dolor error</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis tempora nostrum, modi, odio sit eum eos deserunt ad expedita ipsam enim numquam delectus. Repellendus sunt nostrum consectetur? Ex, quam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque recusandae excepturi saepe. Dignissimos minima voluptate odit, maxime, tempore sunt expedita nisi quae nesciunt aperiam, quis architecto placeat perferendis nam!</p>
            </div>
           

          </div>
          <div className='col-md-3 col-4'></div>

          <div className='col-md-3 col-4 mt-5'>
            <div style={{marginLeft:'10px'}} className='row'>
              <div className='col-md-3 col-3'>
               <img style={{width:'100px',height:'100px', marginRight:'10px',border:'2px solid'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEe4f0PPSkxidwcu9g9WXuXdBEYRH9m_m4g&s" alt="" />
              </div>
              <div className='col-md-3 col-3 '>
                <img style={{width:'100px',height:'100px',marginLeft:'20px',border:'2px solid'}} src="https://t3.ftcdn.net/jpg/15/67/16/84/360_F_1567168439_VxAhVQKH1G7280xUIBdNqVUvKP5CcNMr.jpg" alt="" />

              </div>

              <div className='col-md-3 col-3 '>
                <img className='me-2' style={{width:'100px',height:'100px',marginLeft:'40px',border:'2px solid'}} src="https://cdn.pokecut.com/resource/webseo/intro1video_104_25022019052145.webp" alt="" />

              </div>

              <div className='col-md-3 col-3 '>
                <img style={{width:'100px',height:'100px',marginLeft:'60px',border:'2px solid'}} src="https://imagedelivery.net/TkcHhODAR5Y7jFoICvSX0Q/8e5c935a-b97c-4a70-2252-9764e4224500/width=768" alt="" />

              </div>

            </div>
            <div style={{marginLeft:'10px',marginTop:'20px'}} className='row'>
              <div className='col-md-3 col-3'>
               <img style={{width:'100px',height:'100px', marginRight:'10px',border:'2px solid'}} src="https://thumbs.dreamstime.com/b/passport-picture-blond-businesswoman-blazer-isolated-white-background-cut-out-54461462.jpg" alt="" />
              </div>
              <div className='col-md-3 col-3 '>
                <img style={{width:'100px',height:'100px',marginLeft:'20px',border:'2px solid'}} src="https://media.istockphoto.com/id/504854865/photo/passport-photo.jpg?s=612x612&w=0&k=20&c=b-qlcVpq9bRIs80mt_bgoLLqEucdJF5AIwRIg956zJ8=" alt="" />

              </div>

              <div className='col-md-3 col-3 '>
                <img className='me-2' style={{width:'100px',height:'100px',marginLeft:'40px',border:'2px solid'}} src="https://st4.depositphotos.com/2783505/26466/i/450/depositphotos_264661710-stock-photo-portrait-of-a-beautiful-latin.jpg" alt="" />

              </div>

              <div className='col-md-3 col-3 '>
                <img style={{width:'100px',height:'100px',marginLeft:'60px',border:'2px solid'}} src="https://thumbs.dreamstime.com/b/passport-document-id-photo-business-man-portrait-concept-young-handsome-stylish-guy-formal-wear-white-background-119717703.jpg" alt="" />

              </div>

            </div>
            <div style={{marginLeft:'10px',marginTop:'20px'}} className='row'>
              <div className='col-md-3 col-3'>
               <img style={{width:'100px',height:'100px', marginRight:'10px',border:'2px solid' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxGPbzrh0X6445lDKwSL7mns72XpP-_9gng&s" alt="" />
              </div>
              <div className='col-md-3 col-3 '>
                <img style={{width:'100px',height:'100px',marginLeft:'20px',border:'2px solid'  }} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2445591579.jpg" alt="" />

              </div>

              <div className='col-md-3 col-3 '>
                <img className='me-2' style={{width:'100px',height:'100px',marginLeft:'40px',border:'2px solid'}} src="https://d1uuxsymbea74i.cloudfront.net/images/cms/1_3_passport_photo_young_male_f9ee1e2eb0.jpg" alt="" />

              </div>

              <div className='col-md-3 col-3 '>
                <img style={{width:'100px',height:'100px',marginLeft:'60px',border:'2px solid'}} src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" />

              </div>

            </div>

          </div>

        </div>
      </div>
   

    </div>
  )
}

export default Landingpage
