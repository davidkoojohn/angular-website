import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import { HelloWorldComponent } from "../hello-world/hello-world.component"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  constructor() { }
  title = 'Angular App';
  count: number = 0
  // 通过带@ViewChild装饰器的属性来访问子视图。
  @ViewChild(HelloWorldComponent) helloChild!: HelloWorldComponent;
  // 通过带有@ContentChild装饰器的属性来查询到“子级内容”
  @ContentChild(HelloWorldComponent) helloChildContent!: HelloWorldComponent;
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
    console.log(this.helloChild)
    console.log(this.helloChildContent)
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
