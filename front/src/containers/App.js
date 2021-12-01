import React, { useEffect, useState } from 'react'

const App = () => {
  const [response, setResponse] = useState('')

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------

  return (
    <div>
      <h1>sans serif gana</h1>
      <code>wtf</code>
    </div>
  )
}

export default App
