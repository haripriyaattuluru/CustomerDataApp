//#region angular imports

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//#endregion angular imports

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  // #region model properties

  private customerData = "https://6466e9a7ba7110b663ab51f2.mockapi.io/api/v1/pack1"

  // #endregion model properties

  //#region constructor

  constructor(private http: HttpClient) { }

  //#endregion constructor

  //#region public functions

  /**
   * method to get Customer Data
   * 
   * @returns data as observable
   */
  public getCustomerData(): Observable<any> {
    return this.http.get<any>(this.customerData);
  }

  //#endregion public functions
}
