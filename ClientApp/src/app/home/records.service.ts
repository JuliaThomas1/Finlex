import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { RecordData, IRecordData } from '../RecordData';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class RecordsService {

  httpService: HttpClient;
  baseUrl: string

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpService = http;
    this.baseUrl = baseUrl + 'api/Records';
  }

  async getRecordsAsync(): Promise<RecordData[]> {

    const response = await this.httpService.get<RecordData[]>(this.baseUrl).toPromise();
    return response;
  }

  // Some Issue with _id that is why i use direct written body
  // updateRecord and createRecord could be handled with one post method but wanted to use put,post,delte seperatly
  async CreateRecord(recordData: RecordData) {
    await this.httpService.post<RecordData>(this.baseUrl, {
      username: recordData.username,
      email: recordData.email,
      birthdate: recordData.birthdate,
      firstname: recordData.firstname,
      lastname: recordData.lastname
    }).subscribe({
      error: error => {
        this.handleError(error)
      }
    })
  }

  async RemoveRecordAsync(recordData: RecordData) {
   await this.httpService.delete<RecordData>(this.baseUrl + '/' + recordData.id).subscribe({
      next: data => {
        console.log('Delete successful');
      },
      error: error => {
        this.handleError(error)
      }
    })
  }

  async UpdateRecordAsync(recordData: RecordData) {
    this.httpService.put<RecordData>(this.baseUrl + '/' + recordData.id, recordData).subscribe({
      next: data => {
        console.log('Save successful');
      },
      error: error => {
        this.handleError(error)
      }
    })
  }

  // some error handling
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
