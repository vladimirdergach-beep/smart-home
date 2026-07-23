import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoToggle } from './eco-toggle';

describe('EcoToggle', () => {
	let component: EcoToggle;
	let fixture: ComponentFixture<EcoToggle>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EcoToggle],
		}).compileComponents();

		fixture = TestBed.createComponent(EcoToggle);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
