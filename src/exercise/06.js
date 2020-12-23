// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

const { useState }  = React;

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(username);
  };

  const handleChange = ({ target: { value } }) => {
    setUsername(value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={username} onChange={handleChange} />
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
