import apiService from './apiService';

class personajesService {
    private _apiService: apiService;

    constructor(){
        this._apiService = new apiService();
    }

    public async getAllCharacters(): Promise<any[]> {
        try{
            return await this._apiService.getAllCharacters();
        }catch(e){
            throw new Error('Fallo al obtener los personajes');
        }
    }
}
export default personajesService;