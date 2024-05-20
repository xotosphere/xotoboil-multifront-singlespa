import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CounterComponent } from "../app/components/counter/counter.component";
import { EmptyRouteComponent } from "../app/pages/empty-route/empty-route-component";

const routes: Routes = [
	{ path: "angular", component: CounterComponent },
	{ path: "**", component: EmptyRouteComponent },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule { }
