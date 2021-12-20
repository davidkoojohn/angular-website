import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  constructor() { }
  title = 'Angular App';
  count: number = 0
  ngOnInit(): void {
    console.log("ngOnInit", "landing ------")
  }

  ngOnChanges() {
    console.log("ngOnChanges", "landing ------")
  }

  ngDoCheck() {
    console.log("ngDoCheck", "landing ------")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit", "landing ------")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked", "landing ------")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit", "landing ------")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked", "landing ------")
  }

  ngDestroy() {
    console.log("ngDestroy", "landing ------")
  }

  addCount() {
    this.count++
  }
  reversedTitle() {
    this.title = this.title.split("").reverse().join("")
  }

}
