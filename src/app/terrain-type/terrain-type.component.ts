import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-terrain-type',
  templateUrl: './terrain-type.component.html',
  styleUrls: ['./terrain-type.component.css']
})
export class TerrainTypeComponent implements OnInit {
  myForm: any;

  constructor(private fb : FormBuilder ,private shared:SharedService , private router: Router) { 
    this.myForm = this.fb.group({
      height : ''
    });
  }

  ngOnInit(): void {
  }
  onChange(x: string){
    this.shared.setTerrainType(x)
  }


}
