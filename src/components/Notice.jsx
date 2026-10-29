
import { useState } from 'react'

const Notice = () => {
    const [show, setShow] = useState(false)
    const [loggedin, setLoggedin] = useState(false)
  return (
      <div>
          {/* ternary: choose between two things */}
          <p>{loggedin ? "Welcome back!" : "Please login"}</p>
          <button onClick={() => setLoggedin(!loggedin)}>{loggedin ? "Logout" : "Login"}</button>

          <button onClick={() => setShow(!show)}>Toggle Tips</button>
          <p>{show && "Practice everyday!"}</p>

      
    </div>
  )
}

export default Notice
