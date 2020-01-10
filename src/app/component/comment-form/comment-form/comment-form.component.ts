import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Comment } from 'src/app/model/comment';
import { User } from 'src/app/model/user';
import { CommentService } from 'src/app/service/comment-service/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  comment: Comment;
  user: User = {
    id: 1,
    username: 'wes',
    createdOn: null
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }

  addComment(body: string): void {
    const comment: Comment = {
      id: null,
      body,
      createdOn: new Date(),
      authorId: this.user.id,
      authorName: this.user.username,
      blogEntryId: +this.route.snapshot.paramMap.get('entryId')
    };
    this.commentService.addComment(comment).subscribe();//_ => this.location.go(`/blog/${+this.route.snapshot.paramMap.get('blogId')}/entry/${+this.route.snapshot.paramMap.get('entryId')}`));  // refactor?
  }
}
