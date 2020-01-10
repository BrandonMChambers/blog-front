import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { BlogComponent } from './component/blog/blog/blog.component';
import { BlogEntry } from './model/blogEntry';
import { BlogFormComponent } from './component/blog-form/blog-form/blog-form.component';
import { EntryFormComponent } from './component/entry-form/entry-form/entry-form.component';
import { AppComponent } from './app.component';
import { MessagesComponent } from './component/messages/messages/messages.component';
import { EntriesViewComponent } from './component/entries-view/entries-view/entries-view.component';
import { CommentsViewComponent } from './component/comments-view/comments-view/comments-view.component';
import { CommentFormComponent } from './component/comment-form/comment-form/comment-form.component';
import { BlogcastHeaderComponent } from './component/blogcast-header/blogcast-header/blogcast-header.component';
import { BlogEntryViewComponent } from './component/blog-entry-view/blog-entry-view/blog-entry-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog/:blogId', component: BlogComponent },
  { path: 'blog/:blogId/entry/:entryId', component: BlogEntry },
  { path: 'create/blog', component: BlogFormComponent },
  { path: 'blog/:blogId/create', component: EntryFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    EntryFormComponent,
    EntriesViewComponent,
    CommentsViewComponent,
    CommentFormComponent,
    BlogcastHeaderComponent,
    BlogFormComponent,
    BlogEntryViewComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
