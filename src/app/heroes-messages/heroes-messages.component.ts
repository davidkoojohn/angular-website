import { Component, OnInit } from '@angular/core';
import { MessageService } from "../service/message.service"

@Component({
  selector: 'app-heroes-messages',
  templateUrl: './heroes-messages.component.html',
  styleUrls: ['./heroes-messages.component.less']
})
export class HeroesMessagesComponent implements OnInit {

  constructor(
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}
