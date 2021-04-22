import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BatchInfoAverages } from '../../models/batch-info-averages';
import { AverageService } from '../../services/average.service';

@Component({
  selector: 'app-averages',
  templateUrl: './averages.component.html',
  styleUrls: ['./averages.component.css']
})
export class AveragesComponent implements OnInit {

	batchInfoAverages!: BatchInfoAverages;

  constructor(private averageService : AverageService) {
  		//this.batchInfoAverages = batchInfoAverages;
  		this.averageService.getBatchInfo(1).pipe(take(1)).subscribe(
  			(response: BatchInfoAverages) => this.batchInfoAverages = response,
  			(error) => console.log("There is an error"),
  			() => console.log(this.batchInfoAverages)
  		)

  		//console.log("checking for value again: " + this.batchInfoAverages.batch.description);
  }

   

  ngOnInit(): void {

  }

}
