import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./components/post/post";
import {Comment} from "./components/comment/comment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts?: Post[];

  constructor(private http: HttpClient) {

  }

  comment(comment: Comment): void {
    console.log(comment);
    this.http.post<Post[]>("http://localhost:3000/post/comment", comment).subscribe({
      next: (posts: Post[]) => {
        const [incomingPost] = posts;
        const post = this.posts?.find(post => post.id === incomingPost.id);
        if (post)
          post.comments = incomingPost.comments;
      }
    })

  }


  ngOnInit() {
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      }
    })
  }

}
