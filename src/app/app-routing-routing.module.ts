import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './auth/components/login/login.component'
import { TodosComponent } from './todos/components/todos/todos.component'
import { UsersComponent } from './users/components/users/users.component'
import { HomeComponent } from './home/components/home/home.component'

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
