import react, { useState } from 'react'
import axios from 'axios'
import{ CookieBox as CookieBox} from './CookieBox'
// import './App.css';

function App() {

  const [u, SetU] = useState('hello')

const handleSubmit = async (e) =>{
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8000/",{u},{ withCredentials: true })
    console.log(response);
  } catch (error) {
    console.log(`Error from React ${error}`);
  }
}

  return (
    <div className="Appp">
      {/* <form method="post" onSubmit={handleSubmit}>
        <button type="submit">Click me</button>
      </form> */}
      <CookieBox></CookieBox>
    </div>
  );
}

export default App;
