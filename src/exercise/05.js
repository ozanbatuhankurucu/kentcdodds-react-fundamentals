// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({className, style, size, children, ...otherProps}) {
  const boxSize = size ? `box--${size}` : ''
  return (
    <div
      style={{fontStyle: 'italic', ...style}}
      className={`box ${boxSize} ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        medium pink box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>Sizeless box</Box>
    </div>
  )
}

export default App
