import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {
  @Output() addPost = new EventEmitter<{postTitle: string, linkAddress: string}>();
  constructor() { }

  ngOnInit() {
  }

  onNewPost(titleInput: HTMLInputElement, linkInput: HTMLInputElement) {
      this.addPost.emit({
        postTitle: titleInput.value,
        linkAddress: linkInput.value
      });
    }
}
