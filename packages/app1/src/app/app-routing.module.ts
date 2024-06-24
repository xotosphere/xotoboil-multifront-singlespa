
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CounterComponent } from "./components/counter/counter.component";
import { EmptyRouteComponent } from "./pages/empty-route/empty-route-component";

const routes: Routes = [
	{ path: "**", component: EmptyRouteComponent },
	{ path: "", component: CounterComponent },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
