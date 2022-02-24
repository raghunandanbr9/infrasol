import { Component, OnInit } from '@angular/core';
import { IpService } from '../ip.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss'],
  providers: [IpService]
})
export class IpComponent implements OnInit {
details:any;
  constructor(private ip: IpService) { }

  ngOnInit(): void {
    this.ip.getIp().subscribe((res:any)=>{
      console.log(res);
      this.details = res;
    },(err:any)=>{
      //handle error
    })
  }

}
