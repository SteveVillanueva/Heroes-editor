import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
// * declares public messageService property for angular to inject singleton messageservice into
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
