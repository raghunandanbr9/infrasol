import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }
  getIp(){
    let url:string = 'https://api.freegeoip.app/json/?apikey=2454ec50-954d-11ec-a3df-7fa072c54278';
    return this.http.get(url);
  }
}
