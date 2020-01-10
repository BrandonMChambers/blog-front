import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog-service/blog.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blog: Blog;
  currentUser: User = {
    id: 1,
    username: 'wes',
    createdOn: null
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private blogService: BlogService
  ) { }

  ngOnInit() {
  }
  addBlog(title: string, description: string) {
    const blogToAdd: Blog = {
      id: null,
      title,
      description,
      createdOn: new Date(),
      ownerId: this.currentUser.id,
      ownerName: this.currentUser.username
    };
    this.blogService.addBlog(blogToAdd).subscribe(_ => this.location.go("/home"));
  }
}
