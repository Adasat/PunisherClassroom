import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './ComponentGET.css'
import { getOneTodo, getTodos } from '../../services/todos.service'
import { getAllUsers } from '../../services/user.service'

function ComponentGET() {
  const [test, setTest] = useState('')
  const [isTrue, setIsTrue] = useState(false)
  const [user, setUser] = useState('')
  const [todos, setTodos] = useState([])
  const [aTodo, setATodo] = useState(null)
  const [users, setUsers] = useState([])

  /*   async function getTodos() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    console.log(data)
  }

  getTodos() */

  useEffect(
    function () {
      /* async function getAllTodos() {
        const response = await getTodos()
        setTimeout(() => {
          setTodos(response)
        }, 1500)

         console.log(response)

      }

     
      getAllTodos() */


      async function getOneOnlyTodo(){
        const res = await getOneTodo(8)
        setATodo(res)
      }

      getOneOnlyTodo()



      async function getUsers(){
        const response = await getAllUsers()
        setUsers(response)
      }

      getUsers()


    },
    [isTrue]
  )

  // condition ? 'Si se cumple la condición' : 'Si no se cumple la condición' 

  return (
    <>
      <input onChange={(e) => setTest(e.target.value)}></input>

      <h2>Change USER</h2>
      <input onChange={(e) => setUser(e.target.value)}></input>
      {user}

      <h1>El valor de mi input: {test}</h1>
      <button onClick={() => setIsTrue(!isTrue)}>
        Change to {isTrue ? 'false' : 'true'}
      </button>
      {todos.length > 0 ? (
        <ol>
          {todos.map(function (todo) {
            return <li key={todo.id}>{todo.title}</li>
          })}
        </ol>
      ) : (
        <span className='loader'></span>
      )}

      <p>{aTodo?.title}</p>

      {users?.length > 0 ? (
        <ol>
          {users?.map(function (user) {
            return <li key={user.id}>{user.name} - email: {user.email}</li>
          })}
        </ol>
      ) : (
        <span className='loader'></span>
      )}
    </>
  )
}

export default ComponentGET
