import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BatchInfoAverages } from '../models/batch-info-averages';


@Injectable({
  providedIn: 'root'
})
export class AverageService {


 
  constructor(private http: HttpClient) {
   }

  getBatchInfo(batchId: number): Observable<BatchInfoAverages>{
  	return this.http.get<BatchInfoAverages>(environment.baseUrl+`batches/${batchId}`);

  }
}
