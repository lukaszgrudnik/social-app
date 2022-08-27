import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Post} from "./post";

@Component({
  selector: 'post',
  templateUrl: 'post.component.html'
})
export class PostComponent {

  showComments: boolean = false;

  @Input() post?: Post;

  @Output() comment: EventEmitter<any> = new EventEmitter<any>();

  commentCreatorContent: string = ''


  addComment(): void {

    this.comment.emit({
      postId: this.post?.id,
      content: this.commentCreatorContent
    });

    this.commentCreatorContent = ''
  }

}



