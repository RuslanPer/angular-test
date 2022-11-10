import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todo {
  id: string
  title: string
  addedDate: string
  order: number
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
        withCredentials: true,
        headers: {
          'api-key': '534d1fc3-fe11-4f41-abd0-cdc85b12d4a6',
        },
      })
      .subscribe(res => {
        this.todos = res
      })
  }
}
