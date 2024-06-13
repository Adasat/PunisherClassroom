import  api2  from "./api2";


export async function getAllCharacters () {
    try {
        const {data} = await api2.get('/character')
        console.log(data.results)
        return data.results
    } catch (error) {
        console.log(error)
    }
}


export async function getCharacter (id){
    try {
        const { data } = await api2.get(`/character/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}