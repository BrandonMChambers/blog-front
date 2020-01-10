import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Comment } from '../../model/comment';
import { MessageService } from '../message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    )
  };

  private commentUrl = 'https://blog-team-1.herokuapp.com/comments';
  private log(message: string) {
    this.messageService.add(`CommentService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getCommentsByEntryId(entryId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentUrl}/entry/${entryId}`, this.httpOptions).pipe(
      tap(_ => this.log(`fetched comments for blog entry id=${entryId}`)),
      catchError(this.handleError<Comment[]>('getCommentsByEntryId', []))
    );
  }

  getComment(commentId: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.commentUrl}/${commentId}`, this.httpOptions).pipe(
      tap(_ => this.log(`fetched comment id=${commentId}`)),
      catchError(this.handleError<Comment>(`getComment id=${commentId}`))
    );
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentUrl, comment, this.httpOptions).pipe(
      tap(_ => this.log('posted comment')),
      catchError(this.handleError<Comment>('comment failed to post'))
    );
  }

  editComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.commentUrl}/${comment.id}`, comment, this.httpOptions).pipe(
      tap(_ => this.log(`updated comment with id=${comment.id}`)),
      catchError(this.handleError<Comment>('editBlogEntry failed to update blog entry'))
    );
  }

  deleteComment(commentId: number): Observable<Comment> {
    return this.http.delete<Comment>(`${this.commentUrl}/${commentId}`, this.httpOptions).pipe(
      tap(_ => this.log(`deleted comment with id=${commentId}`)),
      catchError(this.handleError<Comment>('deleteComment failed to delete comment'))
    );
  }
}