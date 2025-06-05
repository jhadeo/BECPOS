import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  return <a href ="./test" >Hello React!</a>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
