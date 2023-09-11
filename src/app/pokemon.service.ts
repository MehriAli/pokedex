import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';
  private speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species';
  private evolutionUrl ='https://pokeapi.co/api/v2/evolution-chain'

  public pokemon:any;
  constructor(private http: HttpClient) { }

  getPokemon(idOrName: string){
    return this.http.get(`${this.pokemonUrl}/${idOrName}`);
  }
  getSpecies(idOrName: string){
    return this.http.get(`${this.speciesUrl}/${idOrName}`);
  }
  getEvolutions(idOrName: string){
    return this.http.get(`${this.evolutionUrl}/${idOrName}`);
  }
}
