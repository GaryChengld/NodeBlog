import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ModifyPostComponent } from './modify-post/modify-post.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'posts/:id', component: PostDetailsComponent },
    { path: 'posts/modify/:id', component: ModifyPostComponent },
    { path: 'error', component: ErrorPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
