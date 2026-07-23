import { Component, input, output } from '@angular/core';
import { DeviceConfig } from '../../mocks/mock-smarthome';

@Component({
	selector: 'app-smart-card',
	imports: [],
	templateUrl: './smart-card.html',
	styleUrl: './smart-card.css',
})
export class SmartCard {
	public readonly config = input.required<DeviceConfig>();
	public readonly value = input.required<number>();
	public readonly disabled = input(false);

	public readonly valueChanged = output<number>();

	public changeValue(change: number): void {
		if (this.disabled()) {
			return;
		}

		this.valueChanged.emit(change);
	}
}
