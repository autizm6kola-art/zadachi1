// import './styles/styles.css';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import MenuPage from './components/MenuPage';
// import TasksPageWrapper from './components/TasksPageWrapper';

// function App() {
//   const [allTasks, setAllTasks] = useState([]);

//   // Загрузка JSON при старте
//   useEffect(() => {
//     fetch('/tasks_zad1.json')
//       .then((res) => res.json())
//       .then((data) => setAllTasks(data))
//       .catch(console.error);
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<MenuPage allTasks={allTasks} />}
//         />
//         <Route
//           path="/tasks/:range"
//           element={<TasksPageWrapper allTasks={allTasks} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import './styles/styles.css';
import React, { useState, useEffect } from 'react';

import MenuPage from './components/MenuPage';
import TasksPageWrapper from './components/TasksPageWrapper';

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState('menu'); // 'menu' или 'tasks'
  const [selectedRange, setSelectedRange] = useState(null); // например, '1-10'

  // Загрузка JSON при старте
useEffect(() => {
  fetch(process.env.PUBLIC_URL + '/tasks_zad1.json')
    .then((res) => res.json())
    .then((data) => setAllTasks(data))
    .catch(console.error);
}, []);

  // Функция перехода на страницу заданий
  const goToTasksPage = (range) => {
    setSelectedRange(range);
    setCurrentPage('tasks');
  };

  // Функция возврата в меню
  const goToMenuPage = () => {
    setCurrentPage('menu');
    setSelectedRange(null);
  };

  return (
    <>
      {currentPage === 'menu' && (
        <MenuPage allTasks={allTasks} onSelectRange={goToTasksPage} />
      )}
      {currentPage === 'tasks' && selectedRange && (
        <TasksPageWrapper
          allTasks={allTasks}
          selectedRange={selectedRange}
          goBack={goToMenuPage}
        />

      )}
    </>
  );
}

export default App;

