import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
  return (
    <div >
      <p className='f3'>
        {'This application is able to detect faces in your pictures!'}
      </p>
      <div className='center'>
        <div className='center form pa4 shadow-5'>
          <input className='f4 pa2 ma1 w-70 center' type='text' />
          <button className='f4 ma1 w-30 grow link ph3 pv2 dib white bg-light-purple'> Detect Faces </button>
        </div>
        </div>
      </div>
  )
}

export default ImageLinkForm
