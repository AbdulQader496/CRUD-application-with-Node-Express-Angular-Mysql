import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-all-contact',
  templateUrl: './show-all-contact.component.html',
  styleUrls: ['./show-all-contact.component.css']
})
export class ShowAllContactComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successMessage:any;

  ngOnInit(): void {
    
    this.service.getAllData().subscribe((res)=>{
      console.log(res, "All Data <==>");
        this.readData = res.data;
    });
  }

  // delete data
  deleteData(id:any){
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res, "deleteData <==>");
      this.successMessage = res.message;

      this.service.getAllData().subscribe((res)=>{
        console.log(res, "All Data <==>");
          this.readData = res.data;
      });
    })
  }

}
