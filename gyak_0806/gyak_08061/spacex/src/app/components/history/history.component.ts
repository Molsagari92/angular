import { Component, OnInit } from '@angular/core';
import { SpaceXService } from 'src/app/space-x.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public spaceXHistory: Object;

  constructor(private spaceX: SpaceXService) { }

  ngOnInit() {
    this._getAllHistory();
  }

  private async _getAllHistory(){
    this.spaceX.getAllHistory().subscribe(res=>{
      this.spaceXHistory=res;
      console.log('res', res);
    });
  }

}
