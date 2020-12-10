import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit{

  constructor() { 
  }
  

  result:any=[];
  result1:any=[];
  finalResult:any=[];
  finalCheckResult:any=[];
 
 public sendOptions(res):any{
    this.result = res;
    console.log("Result is " + this.result.length);
  }

 public sendArray1(res):any{
  this.result1 = res;
  console.log("Result is " + this.result1.length);
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

public getOptions1(){
  return this.result1;
}

public finalSendOptions(res:any):any{
      this.finalResult = res;
}

public finalGetOptions():any{
  return this.finalResult;
}

public finalCheckBoxes(res:any){
  this.finalCheckResult = res;

}

public getFinalCheckBoxes():any{
  return this.finalCheckResult;
}


ngOnInit(){
  this.chckOptions()
}  
  

}
