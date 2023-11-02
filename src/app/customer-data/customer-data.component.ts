//#region angular imports

import { Component, OnInit } from '@angular/core';

//#endregion angular imports

//#region services

import { CustomerDataService } from './customer-data.service';

//#endregion services


@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {
  
  // #region model properties

  public customerData : any;
  public errorMessage: any;

  // #endregion model properties

  // #region constructor

  constructor(private service: CustomerDataService) { 
    this.errorMessage = '';
  }

  // #endregion constructor

  //#region component events

  ngOnInit(): void {
    this.getCustomerData();
  }

  //#endregion component events

  //#region public functions/events assoaciated with UI elements

  /**
 * Method to get customerData
 */

  public getCustomerData(){
    this.service.getCustomerData().subscribe({
      next: (data: any) => {
        if (data) {
          this.customerData = data;
        }
      },
      error: (err: any) => {
        this.errorMessage = "Failed to load API definition";
      },
    })
  }

  //#endregion public functions/events assoaciated with UI elements


}
