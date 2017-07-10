import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  redditPosts = [{title: 'test', link: 'test-link'}];

  onPostAdded(newPost: {postTitle: string, linkAddress: string}) {
    this.redditPosts.push({
      title: newPost.postTitle,
      link: newPost.linkAddress
    })
  }

}
