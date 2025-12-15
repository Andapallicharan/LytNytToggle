import React, { createContext, useContext, useState } from 'react'

// 1️⃣ Create a Context
const ThemeContext = createContext()

// 2️⃣ Create a Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3️⃣ Create a component that consumes the context
function ThemeBox() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const boxStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
   
  }

  return (
    <div style={boxStyle} className='card'>
      <h2>Current Theme: {theme}</h2>
      <button
        onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

// 4️⃣ Wrap your app with ThemeProvider
export default function Context() {
  return (
    <ThemeProvider>
      <ThemeBox />
    </ThemeProvider>
  )
}
