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

/*import './App.css';

function App() {
  return (
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <h1>hello</h1>
  );
}

export default App;

/*import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  return (
    <div className="App ">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="box"
      >
        <h1>Welcome to recipe book</h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="c"
        />
      </motion.div>
      <table>
    <tr>
        <th>recipe name</th>
        <th>recipe</th>
        </tr>
        <tr>
            <td>maggie</td>
            <td><a href="https://www.maggi.in/en/recipes/maggi-noodles/"></a>clickhere for maggie recipe</td>
        </tr>
        <tr><td><a href=""/>pasta</td></tr>
  </table>

    </div>
  );
};

export default App;
/*
import React from 'react';
import { motion ,AnimatePresence} from 'framer-motion';
import './App.css';

// Dummy recipe data
const recipes = [
  {
    id: 1,
    title: 'Pasta Carbonara',
    imageUrl: 'https://source.unsplash.com/400x300/?pasta',
    description: 'A delicious pasta dish with creamy sauce.'
  },
  {
    id: 2,
    title: 'Chocolate Cake',
    imageUrl: 'https://source.unsplash.com/400x300/?cake',
    description: 'Decadent chocolate cake with frosting.'
  },
  {
    id: 3,
    title: 'Chicken Stir Fry',
    imageUrl: 'https://source.unsplash.com/400x300/?stir-fry',
    description: 'Healthy chicken and vegetable stir fry.'
  }
];

const RecipeCard = ({ recipe }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="recipe-card"
    >
      <img src={recipe.imageUrl} alt={recipe.title} />
      <div className="recipe-info">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="box"
      ></motion.div>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Book</h1>
      </header>
      <div className="recipe-container">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

// export default App;*/
