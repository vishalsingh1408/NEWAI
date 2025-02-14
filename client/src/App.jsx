import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from 'react';
// import '@mantine/core/styles.css';
// import { useState } from 'react';
// import { Button } from '@mantine/core';
// import { useSelector } from 'react-redux';
// function App() {
//   // const [count, setCount] = useState(0);
// const {count} = useSelector((state)=>state.count)

//   return (
//     <div>
//       <p>{count}</p>
//       <Button onClick={() => setCount(count + 1)}>inCrement</Button>
//       <Button onClick={() => setCount(count - 1)}>decrement</Button>
//       <Button onClick={() => setCount(0)}>reset</Button>
//     </div>
//   );
// }

// export default App;


//toolkit

// //initialState => {
//   count : 0
// }

//reducer function => 

//createSlice() =>