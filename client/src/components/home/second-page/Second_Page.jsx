import React, { Component } from 'react'
import './Second_Page.css'
import image2 from '../../../assets/Picture/SpaceX.jpg' 

export class Second_Page extends Component {
  render() {

    const imageUrls = [
    image2
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
        <div>
        {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`} />))}
      </div>
      </body>
      </html>
      </>
    )
  }
}

export default Second_Page