import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurrentWidget } from '../interfaces/current-widget';


@Injectable({
  providedIn: 'root'
})
export class CurrentService {

  constructor(private _httpClient: HttpClient) { }

  public get(query: string){
    return this._httpClient.get<ICurrentWidget>('http://api.weatherapi.com/v1/current.json', {
      params:{
        key: '0fb493cfb5f14f75836112052232903',
        query
      }
    }).subscribe()
  }

  
}
