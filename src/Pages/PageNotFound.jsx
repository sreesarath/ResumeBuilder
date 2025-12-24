import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
      <div >
        <div style={{ backgroundColor: 'navy' }}>
          <div style={{ position: 'relative' }}>
            <img style={{ width: '1520px', height: '600px' }} src="https://miro.medium.com/0*QOZm9X5er1Y0r5-t" alt="" />
          </div>
          <Link to={'/'}>
            <div style={{ position: 'relative', marginLeft: '700px', }}>
              <button className='rounded' style={{ backgroundColor: 'green', color: 'white' }}>Back To Home</button>
            </div>
          </Link>

        </div>


      </div>

    </>
  )
}

export default PageNotFound
