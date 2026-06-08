import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

function App() {
  const [todos, setTodos] = useLocalStorage('todo-list', []);
  const [text, setText] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); 

  function handleAdd(e){
    e.preventDefault();
    if(text.trim() === '') return;

    const newItem = { id: crypto.randomUUID(), completed: false, text};
    setTodos((prev) => [...prev, newItem]);
    setText('');
  }

  function handleCompleted(id){
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo));
  }

  function handleDelete(id){
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  const displayedTodos = todos.filter((todo) => {
    if(filterStatus === 'active') return !todo.completed;
    if(filterStatus === 'completed') return todo.completed;
    return true;
  })

  return (
    <div className='main'>
        <h1>To-Do List</h1>
        <div>
          <button onClick={() => setFilterStatus('all')}>All</button>
          <button onClick={() => setFilterStatus('active')}>Active</button>
          <button onClick={() => setFilterStatus('completed')}>Completed</button>
        </div>
        <div className='todo-container'>
          <form onSubmit={handleAdd}>
            <input 
              type="text" 
              value={text} 
              placeholder='Enter item...' 
              onChange={(e) => setText(e.target.value)}  
            />
            <button type='submit'>Add</button>
          </form>
          <ul>
            {displayedTodos.map(({text, completed, id}) => {
              return (
                <div className='list' key={id}>
                  <li 
                    className={completed ? 'done' : ''} 
                    onClick={() => handleCompleted(id)}
                  >
                    {text}
                  </li>
                  <span onClick={() => handleDelete(id)}>❌</span>
                </div>
              ) 
            })}
          </ul>
        </div>
    </div>
  )
}

export default App
