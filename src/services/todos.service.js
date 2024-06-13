import api from './api'

export async function getTodos() {
    try {
        const { data } = await api.get('/todos')
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getOneTodo(id){
    try {
      const {data} = await api.get(`/todos/${id}`)
      return data
    } catch (error) {
      console.error(error)
    }
}


