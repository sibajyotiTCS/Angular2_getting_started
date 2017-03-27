import  {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



import {ISupplier} from './supplier';

@Injectable()
export class SupplierService {
	private _supplierUrl="./api/Suppliers/suppliers.json";

	constructor(private _http:Http){}
	getSupplier(): Observable<ISupplier[]>{
		return this._http.get(this._supplierUrl)
		.map((response:Response)=> <ISupplier[]> response.json())
		.do(data => console.log("All:"+JSON.stringify(data)))
		.catch(this.handleError);
	}




	private handleError(error:Response){
		console.log("error");
		return Observable.throw(error.json().error || "server error");
	}
}

