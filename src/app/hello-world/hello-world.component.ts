import {Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import {LoggerService} from '../service/logger.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.less'],
  // 无封装，会把 CSS 添加到全局样式中
  // encapsulation: ViewEncapsulation.None,
  // 默认值, 通过预处理（并改名）CSS 代码来模拟 Shadow DOM 的行为，以达到把 CSS 样式局限在组件视图中的目的
  // encapsulation: ViewEncapsulation.Emulated,
  // 仅将此组件的样式添加到 shadow DOM 宿主元素中, shadow DOM 之外是不可见的
  // encapsulation: ViewEncapsulation.ShadowDom,
  // 自动添加上一个 _nghost
  // _ngcontent 属性标记出该元素属于哪个宿主的模拟 Shadow DOM
})
export class HelloWorldComponent implements OnInit {
  @Input() count10?: number;
  @Input() msg?: string;
  @Output() rMsg = new EventEmitter<string>()
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
    this.rMsg.emit(this.msg?.split("").reverse().join(", "))
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
