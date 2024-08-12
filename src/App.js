import React, { useState } from 'react';
import Chai from './Chai'; // Ensure the file names are correct and consistent
import Card from './Card';
import { motion, Variants } from 'framer-motion';
import './App.css';

const fade: Variants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const deleteHandler = (index) => {
    const updatedTasks = [...mainTask];
    updatedTasks.splice(index, 1);
    setMainTask(updatedTasks);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { name, description }]);
    setName('');
    setDescription('');
    console.log(mainTask);
  };

  const renderTask = mainTask.length > 0 ? (
    mainTask.map((task, index) => (
      <li key={index} className="flex items-center justify-between mb-2">
        <div className="flex items-center justify-between w-2/3">
          <h5 className="text-2xl font-semibold">{task.name}</h5>
          <h6 className="text-lg font-medium">{task.description}</h6>
        </div>
        <button
          onClick={() => deleteHandler(index)}
          className="bg-red-400 text-white px-4 py-2 rounded font-thin"
        >
          REMOVE
        </button>
      </li>
    ))
  ) : (
    <h2>No Details</h2>
  );

  return (
    <>
      <motion.div initial="hidden" animate="show" variants={fade}>
        <motion.h1>
          <h1 className="bg-gray-500 px-2 py-2 text-center text-white font-bold text-2xl rounded-xl">
            Welcome to our Application
          </h1>
          <h2 className="bg-slate-100 m-10 rounded-xl text-center px-6 py-4">
            RECIPE DETAILS....
          </h2>
        </motion.h1>
        <Card />
        <Chai />
        <h3 className="bg-red-300 text-slate-950 p-1 m-2 text-2xl font-bold text-center">
          YOU CAN ADD RECIPE ACCORDING TO YOUR CHOICE
        </h3>
        <div className="bg-red-200 m-10 flex justify-around rounded-xl border-dotted border-2">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="text-xl border-2 m-3 px-4 py-2 rounded-xl"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="text-xl border-2 m-3 px-4 py-2 rounded-xl"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="bg-black text-white px-4 py-2 text-xl font-bold rounded-xl m-5">
              Add recipe
            </button>
          </form>
        </div>
        <div className="px-4 py-2 bg-slate-200 m-10 rounded-xl border-dotted border-2">
          <ul>{renderTask}</ul>
        </div>
      </motion.div>
    </>
  );
}

export default App;

