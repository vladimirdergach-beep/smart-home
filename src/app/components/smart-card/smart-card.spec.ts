import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCard } from './smart-card';

describe('SmartCard', () => {
	let component: SmartCard;
	let fixture: ComponentFixture<SmartCard>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SmartCard],
		}).compileComponents();

		fixture = TestBed.createComponent(SmartCard);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
