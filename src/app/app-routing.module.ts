import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListComponent } from './events/events-list.component';
import { EventsListResolver } from './events/shared/events-list-resolver.service';

const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent},
  // when this route is loaded the resolver gets executed
  {path: 'events', component: EventsListComponent, resolve:{events:EventsListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  // dynamic import of feature module
  {path: 'user', 
   loadChildren: () => import('./user/user.module')
  .then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
