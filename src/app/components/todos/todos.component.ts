import { Component, OnInit } from '@angular/core'
import { Todo, TodosService } from '../../services/todos.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>
  error = ''

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    // Подписка
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.todosService.createTodo(title)
  }

  deleteTodo() {
    const todoId = '2e35969c-bfe8-43bc-b6d8-f0b12344023f'
    this.todosService.deleteTodo(todoId)
  }
}
