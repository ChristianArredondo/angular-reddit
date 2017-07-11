import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})
export class RedditPostComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postLink: string;
  @Input() postVotes: number;

  constructor() {

  }

  ngOnInit() {
  }

  voteUp() {
    this.postVotes ++;
  }

  voteDown() {
    this.postVotes --;
  }

}
