import { Component, OnInit } from '@angular/core';
import { SpaceXService } from 'src/app/space-x.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  public spaceXLaunches: Object;

  constructor(private spaceX: SpaceXService) { }

  ngOnInit() {
    this._getAllLaunches();
  }


  private async _getAllLaunches(){
    this.spaceX.getAllLaunches().subscribe(res=>{
      this.spaceXLaunches=res;
      console.log('res', res);
    });
  }
}
