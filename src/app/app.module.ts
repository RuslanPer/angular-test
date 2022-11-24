import { CoreModule } from './core/core.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { AuthModule } from './auth/auth.module'
import { TodosModule } from './todos/todos.module'
import { UsersModule } from './users/users.module'
import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingRoutingModule,
    AuthModule,
    TodosModule,
    UsersModule,
    HomeModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
