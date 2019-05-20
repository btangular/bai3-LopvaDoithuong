import { Component } from '@angular/core';
import { User } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bai3-LopvaDoithuong';
  name = 'Bangtan Soyeondan'
  user: User = { // đối tượng user có kiểu là User 
    id: 1,
    name: 'Kim Taehyung',
    email: 'taetae@gmail.com',
    age: 24
  }
}
