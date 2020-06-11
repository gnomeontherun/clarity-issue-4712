import { Component } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];
  realData: any[] = [];
  properties: any[] = [];

  // Original ngOnInit
  ngOnInit() {
    this.properties = [
      { name: "id", visible: true },
      { name: "name", visible: true },
      { name: "count", visible: true }
    ];

    interval(1000).subscribe(() => {
      this.data = [];
      this.data.push({
        id: "" + Math.random(),
        name: "Test" + 1,
        count: "Count"
      });

      const count = 1 + Math.floor(Math.random() * Math.floor(5));
      for (let i = 0; i < count; i++) {
        this.data.push({
          id: "" + i,
          name: "Test" + 1,
          count: "Count"
        });
      }
    });
  }

  // Updated ngOnInit
  // ngOnInit() {
  //   this.properties = [
  //     { name: "id", visible: true },
  //     { name: "name", visible: true },
  //     { name: "count", visible: true }
  //   ];

  //   setInterval(() => {
  //     const data = [];
      
  //     data.push({
  //       id: "" + Math.random(),
  //       name: "Test" + 1,
  //       count: "Count"
  //     });
      
  //     const count = 1 + Math.floor(Math.random() * Math.floor(5));
  //     for (let i = 0; i < count; i++) {
  //       data.push({
  //         id: "" + i,
  //         name: "Test" + 1,
  //         count: "Count"
  //       });
  //     }

  //     this.data = data;
  //   });
  // }

  trackById = (index, item) => item.id;
}
