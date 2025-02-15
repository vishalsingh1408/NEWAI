import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import '@mantine/core/styles.css';
import Preferences from './pages/preferences';
function App() {
 

  return (
    <div>
      <Navbar />
     
      <Preferences />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from 'react';

// import { useState } from 'react';
// import { Button } from '@mantine/core';
// import { useSelector ,useDispatch } from 'react-redux';
// import { increment,decrement } from './redux/slice/counterSlice';
// function App() {
//   // const [count, setCount] = useState(0);
// const {count} = useSelector((state)=>state.count)

// const dispatch = useDispatch()
//   return (
//     <div>
//       <p>{count}</p>
//       <Button onClick={() => dispatch(increment())}>inCrement</Button>
//       <Button onClick={() => dispatch(decrement())}>decrement</Button>
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
