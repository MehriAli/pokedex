import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  public color:any = '';
  public pokemon: any;
  public pokemonDescription: any;
  public isStat= true;
  public  evoChain:any[]=[];

  normal =  '#A8A87B';
  water =  '#559EDF';
  fire =  '#EE803B';
  grass =  '#88BE5D';
  electric =  '#F7CF43';
  ice =  '#9AD8D8';
  flying =  '#A893ED';
  flight =  '#A893ED';
  fighting =  '#A893ED';
  fight =  '#BE322E';
  poison =  '#B563CE';
  ground =  '#DFBF6E';
  psychic =  '#EC5C89';
  bug =  '#A8B732';
  dark =  '#705849';
  dragon =  '#7043F4';
  fairy =  '#EFB7BD';
  ghost =  '#705A97';
  rock =  '#B89F41';
  steel =  '#B8B9CF';
  street = '#B8B9CF';

  constructor(
    private router:Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemon = this.pokemonService.pokemon;
    if(!this.pokemon){
      this.retour();
    } else {
      this.pokemonService.getSpecies(this.pokemon.id).subscribe((res:any)=>{
        this.getDescription(res);
      })
      this.pokemonService.getEvolutions(this.pokemon.id).subscribe((res:any)=>{
        this.getEvolution(res);
      })
    }
    this.getColor(this.pokemon?.types[0].type.name);
  }

  retour() {
    this.router.navigate(['']);
  }

  private getDescription(res: any) {
    if(res.flavor_text_entries.length > 0){
      res.flavor_text_entries.forEach((el:any)=>{
        if(el.flavor_text.toUpperCase().startsWith(this.pokemon.name.toUpperCase())){
          this.pokemonDescription = el.flavor_text;
        }
      })
      if(this.pokemonDescription === undefined){
        this.pokemonDescription = res.flavor_text_entries[0].flavor_text;
      }
    }
  }

  goToEvolution(){
    this.isStat = false;
  }

  goToStat(){
    this.isStat = true;
  }

  getEvolution(evol:any){
    let evoData = evol.chain;


    do {
      let numberOfEvolutions = evoData['evolves_to'].length;

      this.evoChain.push({
        'species_name': evoData ?.species.name,
        'img':''
      });

      if(numberOfEvolutions > 1) {
        for (let i = 1;i < numberOfEvolutions; i++) {
          this.evoChain.push({
            'species_name': evoData.evolves_to[i]?.species?.name,
            'img':''
          });
        }
      }

      evoData = evoData['evolves_to'][0];

    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    this.evoChain.forEach((ec:any)=>{
      this.pokemonService.getPokemon(ec.species_name).subscribe((pokemon:any)=>{
        ec.img = pokemon?.sprites.front_default;
      })
    })
  }


  private getColor(type:string) {
    switch (type){
      case 'normal':{
        this.color = '#A8A87B';
        break;
      }
      case 'water':{
        this.color = '#559EDF';
        break;
      }
      case 'fire':{
        this.color = '#EE803B';
        break;
      }
      case 'grass':{
        this.color = '#88BE5D';
        break;
      }
      case 'electric':{
        this.color = '#F7CF43';
        break;
      }
      case 'ice':{
        this.color = '#9AD8D8';
        break;
      }
      case 'flight':{
        this.color = '#A893ED';
        break;
      }
      case 'fight':{
        this.color = '#A893ED';
        break;
      }
      case 'poison':{
        this.color = '#B563CE';
        break;
      }
      case 'ground':{
        this.color = '#DFBF6E';
        break;
      }
      case 'psychic':{
        this.color = '#EC5C89';
        break;
      }
      case 'bug':{
        this.color = '#A8B732';
        break;
      }
      case 'dark':{
        this.color = '#705849';
        break;
      }
      case 'dragon':{
        this.color = '#7043F4';
        break;
      }
      case 'fairy':{
        this.color = '#EFB7BD';
        break;
      }
      case 'ghost':{
        this.color = '#705A97';
        break;
      }
      case 'rock':{
        this.color = '#B89F41';
        break;
      }
      case 'steel':{
        this.color = '#B8B9CF';
        break;
      }
      case 'street':{
        this.color = '#B8B9CF';
        break;
      }
    }
  }

}
