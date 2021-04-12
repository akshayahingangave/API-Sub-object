import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  title = 'APISubObject';

  apiUrl = 'http://jsonplaceholder.typicode.com/users';

  apiData: any;

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.http.get(this.apiUrl).subscribe((data) => {
      console.warn(data)
      this.apiData = data;
    })
  }
}
