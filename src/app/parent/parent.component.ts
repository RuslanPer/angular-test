import { Component } from '@angular/core'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  title = 'Lorem ipsum dolor sit amet.'
  url = 'https://angular.com'
  date = new Date(2022, 4, 12, 10)
}
