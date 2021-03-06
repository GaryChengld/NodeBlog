import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { SearchPostsComponent } from './search-posts/search-posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ModifyPostComponent } from './modify-post/modify-post.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: LatestPostsComponent },
    { path: 'search/:text', component: SearchPostsComponent },
    { path: 'posts/:id', component: PostDetailsComponent },
    { path: 'posts/modify/:id', component: ModifyPostComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: 'newpost', component: NewPostComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
