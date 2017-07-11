import {Component, Input, OnInit} from '@angular/core';
import {Post} from './post.model'

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})
export class RedditPostComponent implements OnInit {
  @Input() post: Post;

  constructor() {

  }

  ngOnInit() {
  }

  voteUp() {
    this.post.voteUp();
  }

  voteDown() {
    this.post.voteDown();
  }

}
