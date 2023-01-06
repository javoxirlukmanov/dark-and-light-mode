import React, { useState, useEffect } from 'react';
import './darkMode.css';
function App() {
const [theme, setTheme] = useState( 'light');
const toggleTheme = () => {
if (theme === 'light') {
setTheme('dark');
} else {
setTheme('light');
}
};
useEffect(() => {

document.body.className = theme;
}, [theme]);
return (
<div className={`App ${theme}`}>
<button onClick={toggleTheme}>Toggle Theme</button>
<h1>Hello, world!</h1>
</div>
);
}
export default App;
