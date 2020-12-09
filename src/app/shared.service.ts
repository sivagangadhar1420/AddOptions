import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit{

  constructor() { 
  }
  

  result:any=[];
 
 public sendOptions(res):any{
    // this.result = res;
      this.result.push(res);
    console.log("Result is " + this.result);
  }



private  chckOptions():any{
  for (let i= 0; i< this.result.length; i++) {
  const element = this.result[i];
  console.log(" Required OutPut is  " + element)
  }
}

public getOptions(){
  return this.result;
}



ngOnInit(){
  this.chckOptions()
}  
  

}
