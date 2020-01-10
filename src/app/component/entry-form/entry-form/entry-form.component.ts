import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogEntry } from 'src/app/model/blogEntry';
import { User } from 'src/app/model/user';
import { BlogEntryService } from 'src/app/service/blog-entry-service/blog-entry.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  currentUser: User = {
    id: 1,
    username: 'wes',
    createdOn: null
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private entryService: BlogEntryService
  ) { }

  ngOnInit() {
  }

  addBlogEntry(title: string, body: string, ) {
    const entry: BlogEntry = {
      id: null,
      authorId: this.currentUser.id,
      authorName: this.currentUser.username,
      title,
      body,
      createdOn: new Date(),
      blogId: +this.route.snapshot.paramMap.get('blogId')
    };
    this.entryService.addBlogEntry(entry).subscribe(_ => this.location.go(`/blog/${+this.route.snapshot.paramMap.get('blogId')}`));
  }

  goBack() {
    // this.location.go(`/blog/${+this.route.snapshot.paramMap.get('blogId')}`);
  }

}

