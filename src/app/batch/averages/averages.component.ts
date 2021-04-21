import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BatchInfoAverages } from '../../models/batch-info-averages';
import { AverageService } from '../../services/average.service';

@Component({
  selector: 'app-averages',
  templateUrl: './averages.component.html',
  styleUrls: ['./averages.component.css']
})
export class AveragesComponent implements OnInit {

	batchInfoAverages: BatchInfoAverages = new BatchInfoAverages();



  constructor(private averageService : AverageService) {
  		averageService.getBatchInfo(1).subscribe(
  			(infoReturned) => this.batchInfoAverages = infoReturned
  		)
   }

  ngOnInit(): void {
  }

}
