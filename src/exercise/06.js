// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  const handleInputOnChange = event => {
    const value = event.target.value
    setInputValue(value)
    setIsError(value !== value.toLowerCase())
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
        {isError && (
          <div style={{marginTop: '10px', color: 'red'}}>
            All characters should be lowercase
          </div>
        )}
      </div>
      <button
        style={{marginTop: '10px'}}
        type="submit"
        disabled={isError || !inputValue}
      >
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
