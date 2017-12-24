import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiDemoService } from './api-demo.service';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css']
})
export class ApiDemoComponent implements OnInit {

  apiDemoObservable: Observable<any>;

  constructor(private apiDemoService: ApiDemoService) { }

  ngOnInit() {
  }

  getApiDemoResponse() {
    this.apiDemoObservable = this.apiDemoService.getAllBitBucketRepo()
                                                .map(res => res.values);
  }

  resetApiDemoObs() {
    this.apiDemoObservable = null;
  }
}
