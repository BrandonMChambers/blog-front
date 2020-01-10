import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { BlogComponent } from './component/blog/blog/blog.component';
import { BlogEntry } from './model/blogEntry';
import { BlogFormComponent } from './component/blog-form/blog-form/blog-form.component';
import { EntryFormComponent } from './component/entry-form/entry-form/entry-form.component';
import { BlogEntryViewComponent } from './component/blog-entry-view/blog-entry-view/blog-entry-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog/:blogId', component: BlogComponent },
  { path: 'blog/:blogId/entry/:entryId', component: BlogEntryViewComponent },
  { path: 'create/blog', component: BlogFormComponent },
  { path: 'blog/:blogId/create', component: EntryFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
