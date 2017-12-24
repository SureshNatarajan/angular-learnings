import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiDemoService {
  
  private bitBucketUrl = 'https://api.bitbucket.org/2.0/repositories';

  constructor(private http: HttpClient) { }

  getAllBitBucketRepo(): Observable<any> {
    return this.http.get(this.bitBucketUrl);
  }
}
