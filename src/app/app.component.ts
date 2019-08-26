import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectManagementUI';
  buttonSelected: string = "View Task";
  param1: string;
  param2: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('Called Constructor');
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(this.router.url);
      this.param1 = params['id'];
      console.log(this.param1);
    });
  }

  PageSelected(event) {
    this.buttonSelected = event;
    this.param1 = this.activatedRoute.snapshot.params.id;

    console.log(event);
    console.log(this.router.url);
    console.log(this.param1);
  }
}
