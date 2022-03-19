import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'something',
        day: 'Jan',
        reminder: true,
    },
    {
        id: 2,
        text: 'something twice',
        day: 'Feb',
        reminder: true,
    },
    {
        id: 3,
        text: 'something thrice',
        day: 'Mar',
        reminder: false,
    },
])

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}/>
      ) : (
        'No more tasks.')}
    </div>
  );
}



export default App;
