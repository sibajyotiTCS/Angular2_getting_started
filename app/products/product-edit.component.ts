import  { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: 'app/products/product-edit.component.html'
});

export class  EditProductComponent implements OnInit, OnDestroy{

	pageTitle: string = 'Edit Product Detail';
	private sub: Subscription;
	product: IProduct;
	errorMessage:string;


	public EditProductForm = this.productForm.group({
    	productName: ["", Validators.required],
    	productCode: ["", Validators.required],
    	description: ["", Validators.required],
    	releaseDate: ["", Validators.required],
    	price: ["", Validators.required]
    });

	constructor(private productForm: FormBuilder,
				private _route: ActivatedRoute,
				private _router:Router,
				public _productService:ProductService
				) {
		
	}

	getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

	ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}

