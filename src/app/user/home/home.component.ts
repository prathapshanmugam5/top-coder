import { Component } from '@angular/core';
import { ApiService } from 'src/app/apiService/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:ApiService) { }


logout() {

this.service.logout();
}

}
