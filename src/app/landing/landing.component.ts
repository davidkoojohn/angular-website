import {Component, ContentChild, OnDestroy, ViewChild} from '@angular/core';
import { HelloWorldComponent } from "../hello-world/hello-world.component"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnDestroy {
  constructor() { }
  title = 'Angular App';
  count: number = 0
  // 通过带@ViewChild装饰器的属性来访问子视图。
  @ViewChild(HelloWorldComponent)
  private helloChild!: HelloWorldComponent;
  ngOnInit(): void {
    console.log("ngOnInit", "landing ------")
  }

  ngOnDestroy() {
    console.log("clear")
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

  getRMsg(event: string) {
    console.log(event)
  }

}
