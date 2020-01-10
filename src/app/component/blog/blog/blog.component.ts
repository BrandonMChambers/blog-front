import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog-service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    const id = +this.route.snapshot.paramMap.get('blogId');
    this.blogService.getBlog(id).subscribe(blog => this.blog = blog);
  }
}

