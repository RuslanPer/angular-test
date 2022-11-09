import { Component } from '@angular/core'
import { Grade } from './child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  math?: number
  physic?: number

  getGrade(value: Grade) {
    this.math = value.math
    this.physic = value.physic
  }
}
