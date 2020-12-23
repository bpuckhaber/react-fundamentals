// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({ style: styleProp, size, ...props }) => {
  let width;
  let height;
  
  switch (size) {
    case 'large': {
      width = 270;
      height = 270;
      break;
    }
    case 'medium': {
      width = 180;
      height = 180;
      break;
    }
    case 'small': {
      width = 90;
      height = 90;
      break;
    }
    default:
      break;
  }
  const style = {
    ...styleProp,
    fontStyle: 'italic',
    width,
    height,
  };

  return (
    <div {...props} className={`box box--${size}`} style={style}></div>
  );
};

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue 
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
