import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'initial'
  toggle: any = false
  arr = [3, 5, 8, 12]
  objs = [
    {
      title: 'Post 1', author: 'Aleksey', comments: [
        {name: 'Max', text: 'lorem'},
        {name: 'Ivan', text: 'lorem 2'},
        {name: 'Tatyana', text: 'lorem 3'},
      ]
    },
    {
      title: 'Post 2', author: 'Lena', comments: [
        {name: 'Max', text: 'lorem'},
        {name: 'Ivan', text: 'lorem 2'},
        {name: 'Tatyana', text: 'lorem 3'},
      ]
    }
  ]

  now = new Date()

  onInput(event: any) {
    this.title = event.target.value
  }


}
