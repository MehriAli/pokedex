import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {

  public searchText:any;

  constructor(private router:Router,
              private pokemonService: PokemonService) { }

  search(){
    this.getPokemon(this.searchText);
  }

  random(){
    const randomId = this.getRandomValue();
    this.getPokemon(randomId);
  }


  private getRandomValue(): number {
    // Generate a random value between 0 (inclusive) and 1 (exclusive)
    const random = Math.random();

    // Scale the random value to the desired interval [1, 1010]
    const minValue = 1;
    const maxValue = 500;
    const scaledRandom = Math.floor(random * (maxValue - minValue + 1)) + minValue;

    return scaledRandom;
  }

  getPokemon(idOrName:any){
    this.pokemonService.getPokemon(idOrName).subscribe((res:any)=>{
      this.pokemonService.pokemon = res;
      this.router.navigate(['detail']);
    })
  }

}
