import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../app/api/spec";
import {Observable} from "rxjs";
import {Post} from "../app/components/post/post";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {
  }

  post(postId: string, content: string): Observable<Post[]> {
    const body: Comment = {postId: postId, content: content, token: "312321", userId: "31321"}
    return this.http.post<Post[]>("https://localhost:3000/post/comment", body );
  }

  comment(): void {
  }

  answer(): void {

  }

}
