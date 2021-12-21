import { Component, OnInit, Input, Output } from '@angular/core';
import { LoggerService } from "../service/logger.service"

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.less']
})
export class HelloWorldComponent implements OnInit {
  @Input() count10?: number;
  @Input() msg?: string;
  constructor(
    private logger: LoggerService,
  ) {}
  message = "Hello Component!"
  pId = "hello-world"
  pColor = "blue"
  canClick = false
  showHeading = true
  count = 0

  ngOnInit(): void {
    console.log("ngOnInit", "hello-world, =====")
  }

  ngOnChanges(changes: any) {
    console.log("ngOnChanges", "hello-world, =====")
    console.log(changes)
    console.log("ngOnChanges", "hello-world, =====")
    console.log(this.count10)
  }

  ngDoCheck() {
    console.log("ngDoCheck", "hello-world, =====")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit", "hello-world, =====")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked", "hello-world, =====")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit", "hello-world, =====")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked", "hello-world, =====")
  }

  ngDestroy() {
    console.log("ngDestroy", "hello-world, =====")
  }

  toggleHeading() {
    this.showHeading = !this.showHeading
  }

  sayHello() {
    alert(this.message)
  }

  onLogMe() {
    this.logger.writeCount(this.count)
    this.count++
  }
}
