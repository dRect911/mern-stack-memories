import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'tw-elements';

import './App.css';
import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Switcher from './components/Switcher';
import memories from './images/memories.png';

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  const [dark, setDark] = useState( localStorage.theme === 'false' ? true : false );
  

  useEffect(() => {
    dispatch(getPosts());
    console.log('reloaded posts');    
  }, [currentId, dispatch]);

  return (
    <div className={ dark ? 'App  dark' : 'App '}>

      {/* navbar here */}
      <nav className="static navbar w-full flex items-center justify-between dark:bg-gray-900  bg-stone-100 border-b border-slate-500 dark:border-slate-700 shadow-md transition-all">
        <h2 className="big-title p-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 dark:from-sky-400 dark:to-lime-400 transition-all hover:bg-gradient-to-l hover:scale-105 hover:cursor-pointer ">Memories</h2>
        <div className="flex items-center">
          <Switcher dark={dark} setDark={setDark} />
          <img className="h-[100px] p-4 hover:-rotate-6 hover:scale-105 hover:cursor-pointer transition-all " alt="memories" src={memories} />
        </div>
      </nav>

      <div className="w-full flex flex-col-reverse sm:flex-none sm:grid sm:grid-cols-12 items-stretch justify-between dark:bg-gray-800">
        <div className=" col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-8 xl:col-span-9  ">
          <Posts dark={dark} setCurrentId={setCurrentId} />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 xl:col-span-3 mx-4 my-4 ">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  )
}

export default App
