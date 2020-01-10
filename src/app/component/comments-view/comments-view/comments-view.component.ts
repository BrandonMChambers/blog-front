import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from 'src/app/model/comment';
import { CommentService } from 'src/app/service/comment-service/comment.service';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.css']
})
export class CommentsViewComponent implements OnInit {
  comments: Comment[] = [];
  editCommentId: number = -1;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    const entryId = +this.route.snapshot.paramMap.get('entryId');
    this.commentService.getCommentsByEntryId(entryId).subscribe(comments => this.comments = comments);
  }

  deleteComment(commentId: number): void {
    this.commentService.deleteComment(commentId).subscribe(_ => this.getComments());
  }

  editComment(comment: Comment, body: string): void {
    comment.body = body;
    this.commentService.editComment(comment).subscribe();
  }

  setEditCommentId(commentId: number): void {
    this.editCommentId = commentId;
  }
}
