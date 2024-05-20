import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CounterComponent } from "./counter.component";
import { StoreModule } from "@ngrx/store";
import { rootReducer } from "../../store/root-reducer";
import { DecrementCounter, IncrementCounter, ResetCounter } from "../../store/actions/counter.actions";

describe("CounterComponent", () => {
	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CounterComponent],
			providers: [],
			imports: [StoreModule.forRoot(rootReducer)],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	describe("ngOnInit", () => {
		it("should set localCounter selector value", (done) => {
			component.ngOnInit();
			expect(component.localCounter).toBeDefined();
			component.localCounter.subscribe((localCounter) => {
				expect(localCounter).toBe(0);
				done();
			});
		});
	});

	describe("incrementCounter", () => {
		it("should dispatch the IncrementCounter action", () => {
			const fnDispatch = jest.spyOn(component["store"], "dispatch");
			component.ngOnInit();
			component.incrementCounter();
			expect(fnDispatch).toHaveBeenCalledWith(new IncrementCounter());
		});
	});

	describe("decrementCounter", () => {
		it("should dispatch the DecrementCounter action", () => {
			const fnDispatch = jest.spyOn(component["store"], "dispatch");
			component.decrementCounter();
			expect(fnDispatch).toHaveBeenCalledWith(new DecrementCounter());
		});
	});

	describe("reset", () => {
		it("should dispatch the Reset action", () => {
			const fnDispatch = jest.spyOn(component["store"], "dispatch");
			component.resetCounter();
			expect(fnDispatch).toHaveBeenCalledWith(new ResetCounter());
		});
	});
});
