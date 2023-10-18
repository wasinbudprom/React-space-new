import React from 'react'
import './Feature.css'

function Feature() {
  return (

    <>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div class="box-red gridbox ">
        <div class="grid-item-0 flex justify-between items-center py-8 truncate">
          <p className='text-5xl truncate font-semibold text-slate-900'>Featured News</p>
          <a href='news' className='text-2xl  font-semibold text-slate-800'>More news</a>
        </div>
          <div className="item grid-item-1 relative">
            <a href="">
              <img src="https://www.nasa.gov/wp-content/uploads/2023/10/53255487909-db987b77e4-k.jpg?resize=2000,1333" alt="" />
              <div className='absolute bottom-0 left-0 m-3 text-sm text-white text-style'>
                <p className='font-mono tracking-widest '>6 MIN READ</p>
                <p className='text-2xl font-semibold font-sans'>NASA’s Psyche Spacecraft, Optical Comms Demo En Route to Asteroid</p>
              </div>
            </a>
          </div>
          <div className="item grid-item-2 relative">
            <a href="">
              <img src="https://smd-cms.nasa.gov/wp-content/uploads/2023/09/screenshot-2023-09-25-at-3.32.04-pm.png" alt="" />
              <div className='absolute bottom-0 left-0 m-3 text-white text-sm text-style'>
                <p className='font-mono tracking-widest'>3 MIN READ</p>
                <p className='text-2xl font-semibold font-sans text-border'>NASA Prepares Artemis II Moon Rocket Core Stage for Final Assembly Phase</p>
              </div>
            </a>
          </div>
          <div className="item grid-item-3 relative">
            <a href="">
              <img src="https://www.nasa.gov/wp-content/uploads/2023/09/img-7429.jpg" alt="" />
              <div className='absolute bottom-0 left-0 m-3 text-white text-sm text-style' >
                <p className='font-mono tracking-widest'>6 MIN READ</p>
                <p className='text-2xl font-semibold font-sans text-border shadow-inner'>NASA Hosts Unveiling of Plans for New Silicon Valley Innovation Hub</p>
              </div>
            </a>
          </div>
          <div className="item grid-item-4 relative">
            <a href="">
              <img src="https://www.nasa.gov/wp-content/uploads/2023/10/nelson-tagsam-shot-b.jpg?resize=2000,1500" alt="" />
              <div className='absolute bottom-0 left-0 m-3 text-white text-sm text-style'>
                <p className='font-mono tracking-widest'>3 MIN READ</p>
                <p className='text-2xl font-semibold font-sans text-border shadow-inner'>Launching to a Metal-Rich Asteroid</p>
              </div>
            </a>
          </div>
          {/* <div className="grid-item-5 flex justify-around text-3xl items-center">            
            <li><a href="">asdasd1</a></li>
            <li><a href="">asdasd2</a></li>
            <li><a href="">asdasd3</a></li>
          </div> */}
      </div>
    </body>
    </html>
      
    </>
  )
}

export default Feature