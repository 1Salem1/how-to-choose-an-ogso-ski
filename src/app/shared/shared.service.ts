import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  Terrain_type : string = ''
   height: string ='';
   weight: string = '';
   ski_level:string =''
  constructor() { }
  setHeight(data: string){
    this.height = data

  }
  getHeight(){
    return this.height;
  }
  setWeight(data: string){
    this.weight = data

  }
  getWeight(){
    return this.weight;
  }
  setSkilevel(data: string){
    this.ski_level = data

  }
  getSkiLevel(){
    return this.ski_level;
  }
  setTerrainType(data: string){
    this.Terrain_type = data

  }
  getTerrainType(){
    return this.Terrain_type;
  }

}
