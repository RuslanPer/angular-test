import { TodosComponent } from './components/todos/todos.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodosRoutingModule } from './todos-routing.module'

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, TodosRoutingModule],
})
export class TodosModule {}
