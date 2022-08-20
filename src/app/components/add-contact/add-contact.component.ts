import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { ApiserviceService } from 'src/app/apiservice.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errorMessage:any;
  successMessage:any;
  getParamId:any;

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');
    if(this.getParamId){
      this.service.getSingleData(this.getParamId).subscribe((res)=>{

        console.log(res,'single data')
          this.contactForm.patchValue({
            'name': res.data.name,
            'email': res.data.email,
            'phoneNumber': res.data.phoneNumber,
            'address': res.data.address,
            'gender': res.data.gender,
  
          })
      });
    }
    
  }

  contactForm = new FormGroup({
    'name':new FormControl('', Validators.required),
    'email':new FormControl('',[Validators.required, Validators.email]),
    'phoneNumber':new FormControl('',Validators.required),
    'address':new FormControl('',Validators.required),
    'gender':new FormControl('',Validators.required),

  });

  get email(){
    return this.contactForm.get('email')
  };

  contactSubmit(){
    
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
      this.service.addData(this.contactForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.contactForm.reset();
        this.successMessage = res.message;
      })
    }
    else{
      this.errorMessage = "All field required";
    }
  }

  contactUpdate(){
    console.log(this.contactForm.value, 'contactUpdate');

    if(this.contactForm.valid){
      this.service.updateData(this.contactForm.value,this.getParamId).subscribe((res)=>{
        console.log(res, 'updated <==>');
        this.successMessage = res.message;
      })
    }
    else{
        this.errorMessage = "All field required";
    }
  }
}
