import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "@/environments/environment";
import { rootReducer } from "@/app/store/root-reducer";

import { AppRoutingModule } from "@/assets/app-routing.module";
import { AppComponent } from "@/app/app.component";
import { EmptyRouteComponent } from "@/app/pages/empty-route/empty-route-component";
import { CounterComponent } from "@/app/components/counter/counter.component";
import { CommonModule } from "@angular/common";
import { UiLibrary } from "@xotoboil-multifront/ui-angular";

@NgModule({
	declarations: [AppComponent, EmptyRouteComponent, CounterComponent],
	imports: [
		StoreModule.forRoot(rootReducer),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		CommonModule,
		UiLibrary,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
