import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.less'],
})
export class AboutInfoComponent implements OnInit {

  constructor() { }
  isBlue: boolean = true
  styleObj = {
    color: "blue",
    height: "100px",
    lineHeight: "100px",
    border: "1px dashed #333",
    marginBottom: "10px"
  }
  val = "default val"

  ngOnInit(): void {
  }

  handleChange(value: string) {
    this.val = value
  }

  handleClick(event: any) {
    console.log(event.path)
  }

  handleSubmit(ele: any, event: any) {
    event.preventDefault()
    console.log(ele)
    // return false
  }
}
