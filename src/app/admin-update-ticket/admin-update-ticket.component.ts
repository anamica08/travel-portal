import { Component, OnInit } from '@angular/core';
import { Location, formatDate } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { AdminHttpclientService } from '../service/admin-httpclient.service';
import { Model } from '../model/model';

@Component({
  selector: 'app-admin-update-ticket',
  templateUrl: './admin-update-ticket.component.html',
  styleUrls: ['./admin-update-ticket.component.css'],
})
export class AdminUpdateTicketComponent implements OnInit {
  historyState;
  isDataAvailable:boolean = false;
  _file;
  updateTicketForm;
  constructor(
    private _loc: Location,
    private _router: Router,
    private fb: FormBuilder,
    private _http: AdminHttpclientService
  ) {}

  ngOnInit(): void {
    this.historyState = history.state.state;
    this.isDataAvailable = true;
    if (history.state.state == null) {
      this._loc.back();
    }
    if(this.isDataAvailable == true){
      this.updateTicketForm = new FormGroup({
        status: new FormControl( this.historyState.status),
        remarks: new FormControl( this.historyState.remarks),
        ticketId: new FormControl( this.historyState.ticketId),
      });
    }
   
  }

  onFileChange(event) {
    
    this._file = event.target.files;
    
    //fileName.substr(fileName.lastIndexOf('.')+1)
  }

  back() {
    this._loc.back();
  }

  submit() {

    //if a file is uploaded.
    if (this._file != null) {
      if (this._file.length > 0) {
        const file = this._file[0];


        /**If file uploaded is not pdf */
        if(file.type != "application/pdf"){
          alert("Please upload only pdf file.")
          return false;
        }


        let formData: FormData = new FormData();
        formData.append('file', file, file.name);
        formData.append(
          'ticket',
          new Blob([JSON.stringify(this.updateTicketForm.value)], {
            type: 'application/json',
          })
        );


        
        this._http.uploadFormDetails(formData).subscribe(
          (response) => {
            alert('Changes Updated Succesfully.');
            this._loc.back();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
      //if no file uploaded.
      let formData: FormData = new FormData();
      formData.append(
        'ticket',
        new Blob([JSON.stringify(this.updateTicketForm.value)], {
          type: 'application/json',
        })
      );
      this._http.uploadFormDetails(formData).subscribe(
        (response) => {
          alert('Changes Updated Succesfully');
          this._loc.back();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
