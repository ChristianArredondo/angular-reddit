import { Component, Input } from '@angular/core';
import {Post} from './reddit-post/post.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts: Post[];

  constructor() {
    this.posts = [
      new Post('Angular 4', 'http://angular.io', 3),
      new Post('Front-End', 'http://carredondo.site', 2),
      new Post('Texas Longhorns', 'http://utexas.edu', 4)
    ]
  }

  onPostAdded(newPost: {postTitle: string, linkAddress: string}) {
    this.posts.push(new Post(newPost.postTitle, newPost.linkAddress, 0));
    newPost.postTitle = '';
    newPost.linkAddress = '';
  }

  sortedPosts() {
    return this.posts.sort(((a: Post, b: Post) => b.votes - a.votes))
  }

}
