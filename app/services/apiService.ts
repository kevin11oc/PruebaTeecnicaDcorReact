import axios from 'axios';

class apiService {
    //direccion del api con todos los parametros ts, apikey, hash
    private api = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6c36c1aee50fe669cb384741278e784d&hash=192527906007db66ed2efe2bce681a98'

    //Metodo GET
    public async getAllCharacters(): Promise<any[]> {
        const response = await axios.get(this.api);
        return response.data?.data?.results || [];
    }
}
export default apiService;