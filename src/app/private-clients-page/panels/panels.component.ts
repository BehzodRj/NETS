import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/all.service';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {
  allChannels: any = []
  constructor(public request: RequestsService) {}

  ngOnInit() {
  }

  
}
