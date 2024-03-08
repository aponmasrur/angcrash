import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from '../message-details/message-details.component';
import { FirstOpsService } from '../services/first-ops.service';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [MessageDetailsComponent, FormsModule, CommonModule],
  templateUrl: './first-block.component.html',
  styleUrl: './first-block.component.scss',
})
export class FirstBlockComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(private service: FirstOpsService) {
    this.messages = this.service.getAllMessage();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.service.Insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    console.log(this.messages);
  }
  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
