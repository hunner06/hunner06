import { Component, OnInit } from '@angular/core';
import { JokeResponse } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jokeData!: JokeResponse;
  constructor(private httpService: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.jokeData = await this.httpService.getDataAsync();
  }
}
