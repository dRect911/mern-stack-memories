import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());    
  }, [dispatch]);

  return (
    <div className="App">

      {/* navbar here */}
      <nav className="static navbar w-full flex items-center justify-between bg-stone-100 border-b border-slate-500 shadow-md">
        <h2 className="big-title p-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 transition-all hover:bg-gradient-to-l hover:scale-105 hover:cursor-pointer ">Memories</h2>
        <img className="h-[100px] p-4 hover:-rotate-6 hover:scale-105 hover:cursor-pointer transition-all " alt="memories" src={memories} />
      </nav>

      <div className="w-full grid grid-cols-12 items-stretch justify-between ">
        <div className=" col-span-12 sm:col-span-8 lg:col-span-9 ">
          <Posts />
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-3 mx-4 ">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default App
