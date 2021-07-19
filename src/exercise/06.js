// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameRef = React.useRef(null)
  const [userName, setUserName] = React.useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log(userNameRef)
    alert(userNameRef.current.value)
  }
  const handleChange = e => {
    const {value} = e.target
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          id="name"
          ref={userNameRef}
          onChange={handleChange}
          value={userName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
