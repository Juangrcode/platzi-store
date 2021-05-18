import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
	products: Product[] = [
		{
			id: '1',
			image: 'assets/images/camiseta.png',
			title: 'Camiseta',
			price: 80000,
			description: 'bla bla bla bla bla',
		},
		{
			id: '2',
			image: 'assets/images/camiseta.png',
			title: 'Camiseta',
			price: 80000,
			description: 'bla bla bla bla bla',
		},
		{
			id: '3',
			image: 'assets/images/camiseta.png',
			title: 'Camiseta',
			price: 80000,
			description: 'bla bla bla bla bla',
		},
		{
			id: '4',
			image: 'assets/images/camiseta.png',
			title: 'Camiseta',
			price: 80000,
			description: 'bla bla bla bla bla',
		},
		{
			id: '5',
			image: 'assets/images/camiseta.png',
			title: 'Camiseta',
			price: 80000,
			description: 'bla bla bla bla bla',
		},
		{
			id: '6',
			image: 'assets/images/camiseta.png',
			title: 'Camiseta',
			price: 80000,
			description: 'bla bla bla bla bla',
		},
	];

	constructor() {}

	ngOnInit(): void {}

	clickProduct(id: number) {
		console.log('product');
		console.log(id);
	}
}
