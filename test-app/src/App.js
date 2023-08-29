import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://test-deploy-uch1-mohammadmawed.vercel.app/');
      const jsonData = await response.json();
      setData(jsonData.message); // Assuming your backend sends a JSON object with a 'message' field
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Retrieved data from backend: {data}
        </p>
      </header>
    </div>
  );
}

export default App;
