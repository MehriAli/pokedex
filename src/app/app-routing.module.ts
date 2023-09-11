import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonSearchComponent} from "./pokemon-search/pokemon-search.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'},
  {path: 'pokemon', component: PokemonSearchComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'detail', component: PokemonDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
