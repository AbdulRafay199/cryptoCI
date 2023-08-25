import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"blog",
    component: BlogComponent
  },
  {
    path:"blog/article",
    component: ArticleComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"faq",
    component:FaqComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
