import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  public showGreen:boolean;
  public showYellow:boolean;
  public showBlue:boolean;
  public customers:any
  public displayStyle:string

  constructor(){
            this.customers = [
              {name:'Akash Kumar', id:'00765454' , location:'Hyderabad', date:'2-8-2022', status:'New'},
              {name:'Nitin Kumar', id:'00765454' , location:'Delhi', date:'2-8-2022', status:'Pipeline'},
              {name:'Gaurav Kumar', id:'00765454' , location:'Noida', date:'2-8-2022', status:'Assigned TO SP'},
              {name:'Sachin Kumar', id:'00765454' , location:'Gurugram', date:'2-8-2022', status:'New'},
              {name:'Deepak Kumar', id:'00765454' , location:'Mumbai', date:'2-8-2022', status:'Pipeline'},
              {name:'Pawan Kumar', id:'00765454' , location:'Dubai', date:'2-8-2022', status:'New'},
              {name:'Abhishek Kumar', id:'00765454' , location:'Jaipur', date:'2-8-2022', status:'Pipeline'},
              {name:'Dipu Kumar', id:'00765454' , location:'Hyderabad', date:'2-8-2022', status:'New'},
              {name:'Arvind Kumar', id:'00765454' , location:'Delhi', date:'2-8-2022', status:'Assigned TO SP'}
            ]
            this.showBlue = false;
            this.showGreen = false;
            this.showYellow = false;
            this.displayStyle = 'none'
  }
        
      ngOnInit(): void {
        // for(const each of this.customers){
        //   if(each.status === 'New'){
                
        //   }
        //   else if(each.status === 'Pipeline'){

        //   }
        //   else{

        //   }
        // }
      }

      public openPopup():void{
        this.displayStyle = 'block'
      }

      public closePopup():void{
        this.displayStyle = 'none'
      }
}
