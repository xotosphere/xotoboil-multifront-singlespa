import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";
import { UiLibrary } from "@xotoboil-multifront/ui-angular";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./components/counter/counter.component";
import { rootReducer } from "./store/root-reducer";

describe("AppComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, UiLibrary, StoreModule.forRoot(rootReducer)],
			declarations: [AppComponent, CounterComponent],
		}).compileComponents();
	});

	it("should create the app", () => {
		const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
		const app: AppComponent = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
