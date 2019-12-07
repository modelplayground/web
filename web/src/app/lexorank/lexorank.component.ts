import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-lexorank',
  templateUrl: './lexorank.component.html',
  styleUrls: ['./lexorank.component.css']
})
export class LexorankComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  result : String
                    
  entityList : Entity[]

  ngOnInit() {
  }

  createManager(){

  }
  getList(){
    // this.apiService.getEntityList("").subscribe((entityList)=>{
    //   this.entityList = entityList
    //   entityList.forEach((entity)=>console.log(entity.id))
    // })
  }

}
