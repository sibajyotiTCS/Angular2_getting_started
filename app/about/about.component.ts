import { Component} from '@angular/core';

@Component({
	selector:'about',
	template:`<p>This is about component</p>
		<input #emp.box (keyup)="0">
    	<p>{{emp.box.value}}</p>
		`
})



export class AboutComponent {
	public emp:any = {};
}