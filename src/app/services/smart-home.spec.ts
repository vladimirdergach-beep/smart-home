import { TestBed } from '@angular/core/testing';

import { SmartHome } from './smart-home';

describe('SmartHome', () => {
	let service: SmartHome;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SmartHome);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
