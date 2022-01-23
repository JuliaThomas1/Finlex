import { Component,Inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecordsService } from 'src/app/home/records.service';
import { RecordData } from '../RecordData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  recordData = new RecordData();

  checkoutForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    birthdate: ['',Validators.required],
    firstname: '',
    lastname: '',
  });

  constructor(
    private recordService: RecordsService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    this.recordData.username = this.checkoutForm.get('username').value;
    this.recordData.email = this.checkoutForm.get('email').value;
    this.recordData.birthdate = this.checkoutForm.get('birthdate').value;
    this.recordData.firstname = this.checkoutForm.get('firstname').value;
    this.recordData.lastname = this.checkoutForm.get('lastname').value;
    this.recordData.id = "";

    this.recordService.CreateRecord(this.recordData);

    this.checkoutForm.reset();
  }
}
