import { Injectable } from '@angular/core';
import { ToAsync } from '../helpers/functions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JokeResponse } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  apiKey = 'some-key';
  url = 'https://v2.jokeapi.dev/joke/Programming?amount=10'

  // public getDataAsync(data: any): Promise<object> {
  //   let header = new HttpHeaders({
  //     Authorization:
  //       'Bearer ' + this.apiKey,
  //     'Content-Type': 'application/json',
  //   });
  //   var options = {
  //     headers: header,
  //   };
  //   const body = {
  //     "model": "gpt-3.5-turbo",
  //     "messages": [{"role": "user", "content": data}],
  //     "temperature": 0.7,
  //   };
  //   return ToAsync(this.http.post(this.url, body, options));
  // }


  public getDataAsync(): Promise<JokeResponse> {
    return ToAsync(this.http.get<JokeResponse>(this.url));
  }
}
