import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ActionsComponent } from './components/actions/actions.component';
import { DonateComponent } from './components/donate/donate.component';
import { NewsComponent } from './components/news/news.component';
import { UsComponent } from './components/us/us.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "actions",
    component: ActionsComponent
  },
  {
    path: "donate",
    component: DonateComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "us",
    component: UsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
