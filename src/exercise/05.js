// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({className, style, children}) {
  return (
    <div style={{...style, fontStyle: 'italic'}} className={`box ${className}`}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        medium pink box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
