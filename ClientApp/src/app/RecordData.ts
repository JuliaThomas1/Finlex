import { Component } from '@angular/core';

export interface IRecordData {
  id: string;
  username: string;
  email: string;
  birthdate: string;
  firstname: string;
  lastname: string;
}


export class RecordData implements IRecordData {
    id: string;
    username: string;
    email: string;
    birthdate: string;
    firstname: string;
    lastname: string;
}
