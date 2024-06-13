import api from "./api";

export async function getAllUsers() {
    try {
        const { data } = await api.get('/users')

        return data
        
    } catch (error) {
        console.error(error)
        throw new Error ('Chungo pal pelo')
    }
}