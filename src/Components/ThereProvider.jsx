// import React from 'react'
import { useState, createContext } from 'react'
const ThemeContext = createContext()
import PropTypes from "prop-types"
function ThereProvider({ children }) {
  const [firstname, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const a = { age: 18, firstname, setFirstName, password, setPassword, email, setEmail }
  return (
    <ThemeContext.Provider value={a}>
      {children}
    </ThemeContext.Provider>
  )
}
ThereProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ThemeContext, ThereProvider }