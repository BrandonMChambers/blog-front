import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Blog } from '../../model/blog';
import { MessageService } from '../message-service/message.service';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    )
  };

  private blogUrl = 'https://blog-team-1.herokuapp.com/blog';
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

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl).pipe(
      tap(_ => this.log('fetched blogs')),
      catchError(this.handleError<Blog[]>('getBlogs', []))
    );
  }

  getBlog(id: number): Observable<Blog> {
    const url = `${this.blogUrl}/${id}`;
    return this.http.get<Blog>(url).pipe(
      tap(_ => this.log(`fetched blog id=${id}`)),
      catchError(this.handleError<Blog>(`getBlog id=${id}`))
    );
  }

  addBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.blogUrl, blog, this.httpOptions).pipe(
      tap((newBlog: Blog) => this.log('created new blog')),
      catchError(this.handleError<Blog>('addBlog'))
    );
  }

  updateBlog(blog: Blog): Observable<any> {
    return this.http.put(this.blogUrl, blog, this.httpOptions).pipe(
      tap(_ => this.log(`updated blog id=${blog.id}`)),
      catchError(this.handleError<any>('updateBlog'))
    );
  }

  deleteBlog(blog: Blog | number): Observable<Blog> {
    const id = typeof blog === 'number' ? blog : blog.id;
    const url = `${this.blogUrl}/${id}`;

    return this.http.delete<Blog>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted blog id=${id}`)),
      catchError(this.handleError<Blog>('deleteBlog'))
    );
  }
}