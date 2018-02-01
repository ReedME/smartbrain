import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
var defaultImage;
if(imageUrl === '') {
  defaultImage = '';
} else {
  defaultImage = <div className='absolute'>
    <img className='pa3' alt='face detection' src={imageUrl} width='500px' height='auto' />
  </div>;
};

  return (
    <div className='center'>
      {defaultImage}
    </div>
  )
}

export default FaceRecognition
