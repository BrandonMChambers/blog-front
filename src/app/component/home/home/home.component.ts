import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog-service/blog.service';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 blogs: Blog[] = [];
  // blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }
}
