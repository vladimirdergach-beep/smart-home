import { Component, model } from '@angular/core';

@Component({
	selector: 'app-eco-toggle',
	imports: [],
	templateUrl: './eco-toggle.html',
	styleUrl: './eco-toggle.css',
})
export class EcoToggle {
	public readonly enabled = model(false);

	public toggle(): void {
		this.enabled.update((v) => !v);
	}
}
