
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import { HomeModalComponent } from './home-modal/home-modal.component'
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobile','action'];
	dataSource: MatTableDataSource<any>;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;

	constructor(private dialog: MatDialog){}

	ngOnInit() {
		this.dataSource = new MatTableDataSource([
			{firstName: "Mahendra", lastName: "Patidar",email: "mahendra@gmail.com", mobile: '9999999999'},
			{firstName: "Rohan", lastName: "Sharma" ,email: "rohan@gmail.com", mobile: '8888888888'},
			{firstName: "Vinay", lastName: "Tiwari" ,email: "vinay@gmail.com", mobile: '7777777777'},

			]);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}


	//Add employee
	onAddEmployee(mode) {
		console.log("adding emp");
		const dialogRef = this.dialog.open(HomeModalComponent, {
			width: '600px',
			data: {mode: mode}

		})

		dialogRef.afterClosed()
		.subscribe( data =>{
			if(data){
			this.dataSource.data.push(data);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		}
		})
	}

	//Delete employee
	onDeleteEmployee(row) {
		console.log(row);
		this.dataSource.data = this.dataSource.data.filter( (e )=> e['email'] != row.email);

	}

	//filtering data
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}


}


