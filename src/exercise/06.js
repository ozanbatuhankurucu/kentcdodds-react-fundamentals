// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  const handleInputOnChange = event => {
    const value = event.target.value
    setInputValue(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={inputValue}
          onChange={handleInputOnChange}
          id="usernameInput"
          type="text"
        />
      </div>
      <button style={{marginTop: '10px'}} type="submit" disabled={!inputValue}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
