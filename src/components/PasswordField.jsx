import { useState } from "react"

const PasswordField = () => {
    const [visible, setVisible] = useState(false)
  return (
      <div>
          <label htmlFor="password">Password</label>
          <input type={visible ? "text" : "password"}
          id="password" />
          <button type="button" onClick={() => setVisible(!visible)}>
            {visible ? "Hide" : "Show"}
          </button>
      </div>
  )
}

export default PasswordField
