import { Component, OnInit } from '@angular/core';
import { SpaceXService } from 'src/app/space-x.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  public spaceXRockets: Object;

  constructor(private spaceX: SpaceXService) { }

  ngOnInit() {
    this._getAllRockets();
  }

  private async _getAllRockets(){
    this.spaceX.getAllRockets().subscribe(res=>{
      this.spaceXRockets=res;
      console.log('res', res);
    });
  }

}
