import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { User, UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const currentPage = page ? page : 1
    this.getUsers(1)
  }

  getUsers(page: number) {
    this.users$ = this.usersService.getUsers(page)
  }

  nextUsersHandler() {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = page ? page + 1 : 2

    this.router.navigateByUrl(`/users?page=${nextPage}`).then(() => this.getUsers(nextPage))
  }
}
