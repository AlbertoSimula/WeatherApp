import { Component, Input, OnInit } from '@angular/core';
import { CurrentService } from '../../services/current.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit{

  constructor(private _currentService:CurrentService) {}

  @Input()
  

  ngOnInit(): void {
    
    this._currentService.get('Rome')
    this._currentService.get('London')
    this._currentService.get('Tokyo')
  
    
  }


}
