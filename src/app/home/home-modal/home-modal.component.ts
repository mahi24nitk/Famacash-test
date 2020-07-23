import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
	selector: 'app-home-modal',
	templateUrl: './home-modal.component.html',
	styleUrls: ['./home-modal.component.scss']
})
export class HomeModalComponent implements OnInit {

	constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<HomeModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any){}

	employeeForm = this.fb.group({
		firstName: ['',[Validators.required]],
		lastName: ['',[Validators.required]],
		mobile: ['',[Validators.required]],
		email: ['',[Validators.required, Validators.email]],

	})
	ngOnInit(): void {
		
		
	}

	onSubmit() {
		console.log(this.employeeForm.valid)
		if(!this.employeeForm.valid){
			return
		}
		this.dialogRef.close(this.employeeForm.value);
	}


}
