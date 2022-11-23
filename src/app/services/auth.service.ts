import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  message: string[]
  fieldsErrors: string[]
  resultCode: number
}

enum ResultCodes {
  success = 0,
  error = 1,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient) {}

  me() {
    return this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCodes.success) {
        this.isAuth = true
      }
    })
  }
}
