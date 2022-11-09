import { Component, EventEmitter, Output } from '@angular/core'

export interface Grade {
  math: number
  physic: number
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<Grade>()
  sendGradeHandler() {
    const math = 5
    const physic = 4
    this.sendGradeEvent.emit({ math, physic })
  }
}
