import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() search = new EventEmitter<string>();

  onSearch(){
    console.log("on search")
    this.search.emit(this.text);
  }

  text="";

  

  // inputChange(event:any)
  // {
  //   console.log("input change",event.target.value) 
  // }

  // onTyping(event:any){
  //   console.log("ontyping called",this.text)
  // }


}
