import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { BlogEntry } from '../../model/blogEntry';
import { MessageService } from '../message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class BlogEntryService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    )
  };
  blogEntries: BlogEntry[] = [];
  private entryUrl = 'https://blog-team-1.herokuapp.com/blogEntry';
  private log(message: string) {
    this.messageService.add(`BlogService: ${message}`);
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

  getBlogEntriesByBlogId(blogId: number): Observable<BlogEntry[]> {
    return this.http.get<BlogEntry[]>(`${this.entryUrl}/blog/${blogId}`, this.httpOptions).pipe(
      tap(_ => this.log('fetched blog entries')),
      catchError(this.handleError<BlogEntry[]>('getBlogEntriesByBlogId', []))
    );
  }

  getBlogEntry(entryId: number): Observable<BlogEntry> {
    return this.http.get<BlogEntry>(`${this.entryUrl}/${entryId}`, this.httpOptions).pipe(
      tap(_ => this.log(`fetched blog entry id=${entryId}`)),
      catchError(this.handleError<BlogEntry>(`getBlogEntry id=${entryId}`))
    );
  }

  addBlogEntry(blogEntry: BlogEntry): Observable<BlogEntry> {
    return this.http.post<BlogEntry>(this.entryUrl, blogEntry, this.httpOptions).pipe(
      tap(_ => this.log('added new blog entry')),
      catchError(this.handleError<BlogEntry>('addBlogEntry: failed to add blog entry'))
    );
  }

  editBlogEntry(blogEntry: BlogEntry): Observable<BlogEntry> {
    return this.http.put<BlogEntry>(`${this.entryUrl}/${blogEntry.id}`, blogEntry, this.httpOptions).pipe(
      tap(_ => this.log(`updated blog entry with id=${blogEntry.id}`)),
      catchError(this.handleError<BlogEntry>('editBlogEntry failed to update blog entry'))
    );
  }

  deleteBlogEntry(entryId: number): Observable<BlogEntry> {
    return this.http.delete<BlogEntry>(`${this.entryUrl}/${entryId}`, this.httpOptions).pipe(
      tap(_ => this.log(`deleted blog entry with id=${entryId}`)),
      catchError(this.handleError<BlogEntry>('deleteBlogEntry failed to delete blog entry'))
    );
  }
}
