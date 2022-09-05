import { useEffect, useState } from 'react'
import './App.css'
import { User } from './typing'

function App() {

  const [users, setUsers] = useState<User[] | null>(null)

  const url = import.meta.env.VITE_API_ENDPOINT || ''


  useEffect(() => {

    async function fetchUsers() {
      const res = await fetch(`${url}/api/v1/users`)
      const data = await res.json()
      setUsers(data)
    }

    if (url) {
      fetchUsers()
    }

  }, [url])


  console.log("d", users)

  return (
    <div className='container'>

      {
        users ? (
          users.map(user => (
            <div className="card" key={user.id}>
              <img src={user.avatar_url} alt="Avatar" height={300} width={200} />
              <div className="card-container">
                <h4><b>{`${user.first_name} ${user.last_name}`}</b></h4>
                <p>{user.company}</p>
              </div>
            </div>
          ))
        ) : (<h1>No data to show</h1>)
      }

    </div>
  )
}

export default App
