import { Component } from '@angular/core'

interface WeekGrade {
  id: number
  grade: number
}

interface Lesson {
  id: number
  title: string
  weekGrades: WeekGrade[]
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          grade: 5,
        },
        {
          id: 1,
          grade: 2,
        },
        {
          id: 2,
          grade: 4,
        },
        {
          id: 3,
          grade: 5,
        },
      ],
    },
    {
      id: 1,
      title: 'Physic',
      weekGrades: [
        {
          id: 0,
          grade: 3,
        },
        {
          id: 1,
          grade: 4,
        },
        {
          id: 2,
          grade: 4,
        },
        {
          id: 3,
          grade: 3,
        },
      ],
    },
  ]

  getGrade(grade: string) {
    // this.grades.push(grade)
  }
}
