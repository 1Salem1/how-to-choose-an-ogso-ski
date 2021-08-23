import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-ski-level',
  templateUrl: './ski-level.component.html',
  styleUrls: ['./ski-level.component.css']
})
export class  SkiLevelComponent implements OnInit {

  visible : boolean = true ;
myForm :FormGroup;
  location: any;


  constructor(private fb : FormBuilder ,private shared:SharedService , private router: Router) { 
    this.myForm = this.fb.group({
      height : ''
    });
  }  
  ngOnInit(): void {
    


  }
  onChange(x: string){
    this.shared.setSkilevel(x)
    console.log(x)


  }

}
