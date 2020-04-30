const API_URL = 'https://rickandmortyapi.com/api';

const getTalleres = async()=>{
    try{
        const result = await fetch(`${API_URL}/character`);
        const data = await result.json();
        return data.results;
    }catch(error){
        throw 'Error en la peticion';
        throw error;
    }
}

export{
    getTalleres
}