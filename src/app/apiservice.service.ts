import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // connect front end with api
  apiUrl = 'http://localhost:8000/customer';

  // gett all data

  getAllData():Observable<any>{

    return this._http.get(`${this.apiUrl}`);
  }

  //create data

  addData(data:any):Observable<any>{
    console.log(data,'adddataapi==>');
    return this._http.post(`${this.apiUrl}`,data);
  }

  // delete data

  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //update data

  updateData(data:any, id:any):Observable<any>{
    let ids  =id;
    return this._http.patch(`${this.apiUrl}/${ids}`,data);
  }

  //get Single Data

  getSingleData(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

}
