import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AutoFocusDirective } from './auto-focus.directive';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { ModifyPostComponent } from './modify-post/modify-post.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { InputPostComponent } from './input-post/input-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NavBarComponent,
    PostDetailsComponent,
    AutoFocusDirective,
    HtmlLineBreaksPipe,
    ModifyPostComponent,
    ErrorPageComponent,
    InputPostComponent,
    NewPostComponent,
    RegisterComponent,
    LoginComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
