import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-ski-result',
  templateUrl: './ski-result.component.html',
  styleUrls: ['./ski-result.component.css']
})
export class SkiResultComponent implements OnInit {
    height : string ='';
    weight : string = '';
  ski_level: string = '';
  terrain: string = '';
  constructor(private shared : SharedService) { }

  ngOnInit(): void {
   this.height = this.shared.getHeight()
   this.weight = this.shared.getWeight()
   this.ski_level = this.shared.getSkiLevel()
   this.terrain = this.shared.getTerrainType()
   console.log(this.weight +"weight")
   console.log(this.height +"height")
   console.log(this.ski_level + "ski level")
   console.log(this.terrain + "terrain")
  }

}
