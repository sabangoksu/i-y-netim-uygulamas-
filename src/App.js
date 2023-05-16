import React, { useState } from 'react';

function App() {
  // Kullanıcı hesaplarını tutacak state
  const [users, setUsers] = useState([]);

  // Görev listesi tutacak state
  const [tasks, setTasks] = useState([]);

  // Yeni kullanıcı ekleme işlevi
  const addUser = (name, email) => {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email
    };
    setUsers([...users, newUser]);
  }

  // Yeni görev ekleme işlevi
  const addTask = (title, description) => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  // Görev durumunu değiştirme işlevi
  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    }));
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '2rem' }}>
        <h2>Kullanıcılar</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
        <form onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.elements.name.value;
          const email = e.target.elements.email.value;
          addUser(name, email);
          e.target.reset();
        }}>
          <label htmlFor="name">Ad:</label>
          <input type="text" id="name" name="name" required style={{ backgroundColor: 'lightgray' }} />
          <label htmlFor="email">E-posta:</label>
          <input type="email" id="email" name="email" required style={{ backgroundColor: 'lightblue' }} />
          <button type="submit">Ekle</button>
        </form>
      </div>
      <div>
        <h2>Görevler</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <strong>{task.title}</strong> - {task.description}
            </li>
          ))}
        </ul>
        <form onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.elements.title.value;
          const description = e.target.elements.description.value;
          addTask(title, description);
          e.target.reset();
        }}>
          <label htmlFor="title">Başlık:</label>
          <input type="text" id="title" name="title" required style={{ backgroundColor: 'lightgray' }} />
          <label htmlFor="description">Açıklama:</label>
          <textarea id="description" name="description" required style={{ backgroundColor: 'lightgray' }}></textarea>
          <button type="submit">Ekle</button>
        </form>
      </div>
    </div>
  );
}

export default App;

