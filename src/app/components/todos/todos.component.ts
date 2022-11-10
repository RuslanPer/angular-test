import { Component, OnDestroy, OnInit } from '@angular/core'
import { Todo, TodosService } from '../../services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[] = []
  error = ''

  subscriptions: Subscription = new Subscription()

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  getTodos() {
    this.subscriptions.add(
      this.todosService.getTodos().subscribe({
        next: (res: Todo[]) => {
          this.todos = res
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.message
        },
      })
    )
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.subscriptions.add(
      this.todosService.createTodo(title).subscribe(res => {
        const newTodo = res.data.item
        this.todos.unshift(newTodo)
      })
    )
  }

  deleteTodo() {
    const todoId = '2e35969c-bfe8-43bc-b6d8-f0b12344023f'
    this.subscriptions.add(
      this.todosService.deleteTodo(todoId).subscribe(() => {
        this.todos = this.todos.filter(tl => tl.id !== todoId)
      })
    )
  }
}
