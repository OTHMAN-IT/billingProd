import { Component, OnInit } from '@angular/core';
import { BillingsService } from '../services/billings.service';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.css']
})
export class BillingsComponent implements OnInit {

public billings: any;

  constructor(private billService:BillingsService) { }

  ngOnInit(): void {
    this.onGetBillings();
  }

  onGetBillings(): void{
    this.billService.getBillings()
    .subscribe(data=>{
      this.billings=data;
    },err=>{
      console.log(err);
    });
  }

}
