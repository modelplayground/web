import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  @Input() title:String 
  @Input() shortDescription:String
  @Input() longDescription:String

  constructor() { }

  ngOnInit() {
  }

}
