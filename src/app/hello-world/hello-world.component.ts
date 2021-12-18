import { Component, OnInit } from '@angular/core';
import { LoggerService } from "../service/logger.service"

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.less']
})
export class HelloWorldComponent implements OnInit {
  constructor(private logger: LoggerService) {

  }
  message = "Hello Component!"
  pId = "hello-world"
  pColor = "blue"
  canClick = false
  showHeading = true
  count = 0

  toggleHeading() {
    this.showHeading = !this.showHeading
  }

  sayHello() {
    alert(this.message)
  }

  ngOnInit(): void {
  }

  onLogMe() {
    this.logger.writeCount(this.count)
    this.count++
  }
}
