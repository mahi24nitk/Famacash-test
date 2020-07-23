import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared.module';
import { HomeModalComponent } from './home-modal/home-modal.component'

const routes: Routes = [
{
	path: '',
	component: HomeComponent
}
]
@NgModule({
	declarations: [HomeComponent, HomeModalComponent],
	imports: [
	CommonModule,
	SharedModule,
	RouterModule.forChild(routes),

	],
	entryComponents: [HomeModalComponent]
})
export class HomeModule { }
