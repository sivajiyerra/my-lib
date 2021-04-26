import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
    <p>{{id}}</p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {
  id:String;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    alert(this.id)
  }

}
