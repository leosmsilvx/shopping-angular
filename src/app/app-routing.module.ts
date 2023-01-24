import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth-guard-service";
import { CadastroComponent } from "./auth/cadastro/cadastro.component";
import { LoginComponent } from "./auth/login/login.component";

import { NotFoundComponent } from "./not-found/not-found.component";
import { NoRecipeSelectedComponent } from "./recipes/no-recipe-selected/no-recipe-selected.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'receitas', component: RecipesComponent, canActivate: [AuthGuard], children: [
        {path: '', component: NoRecipeSelectedComponent},        
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'lista', component: ShoppingListComponent, canActivate: [AuthGuard]},
    {path: 'not-found', component: NotFoundComponent},    
    {path: 'cadastro', component: CadastroComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}