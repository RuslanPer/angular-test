import { map, Observable } from 'rxjs'
import { environment } from './../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

interface UserResponse {
  items: User[]
  totalCount: number
}

export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpOptions = {
    headers: new HttpHeaders().append('api-key', environment['api-key']),
    withCredentials: true,
  }

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<UserResponse>(`${environment.baseNetworkUrl}/users`, this.httpOptions)
      .pipe(map(el => el.items))
  }
}
