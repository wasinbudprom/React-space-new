import React, { Component } from 'react'
import './First_Page.css'
import '../../../../dist/output.css'
import image1 from '../../../assets/Picture/earth.jpg'

// background: none;
//     background-size: cover;
//     background: url("../../../assets/Picture/earth.jpg") no-repeat;


export class Home extends Component {

  

  render() {
    const imageUrls = [
    image1
  ];
    
    return (
      <>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div class="">
          {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`} /> ))}
        </div>
      </body>
      </html>
      </>
    )
  }
}

export default Home