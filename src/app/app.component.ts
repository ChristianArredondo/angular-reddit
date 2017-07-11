import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() redditPosts = [{title: 'Went to the movies this weekend and saw this', link: 'imgur.com', votes: 0}];

  onPostAdded(newPost: {postTitle: string, linkAddress: string}) {
    this.redditPosts.push({
      title: newPost.postTitle,
      link: newPost.linkAddress,
      votes: 0
    })
  }

  sortedPosts() {
    return this.redditPosts.sort(((a, b) => b.votes - a.votes))
  }

}
