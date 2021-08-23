
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
visible : boolean = true ;
myForm :FormGroup;
  location: any;


  constructor(private fb : FormBuilder ,private shared:SharedService , private router: Router) { 
    this.myForm = this.fb.group({
      height : ''
    });
  }  
  ngOnInit(): void {
  

    this.myForm.valueChanges.subscribe(() =>{
      this.visible = false ;
   
        let jsonF = JSON.stringify(this.myForm.value);
        var obj = JSON.parse(jsonF);
        this.shared.setHeight(obj.height)
        console.log(obj.height)
      })

  }





}
