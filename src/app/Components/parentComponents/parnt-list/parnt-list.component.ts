import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/Interfaces/myinterfaces';
import { ParentService } from 'src/app/Services/parent.service';

@Component({
  selector: 'app-parnt-list',
  templateUrl: './parnt-list.component.html',
  styleUrls: ['./parnt-list.component.css']
})
export class ParntListComponent implements OnInit {

  photosurl:string=localStorage.getItem("mainurl")+"/photos/"
  List:Parent[];
  selectedOne:Parent;
  ModalTitle:String;
  ActivateAddEditEmpComp:boolean=false;
  activatecheldrencomponet: boolean;
  selectedprent:Parent;
//showinmageurl:string=localStorage.getItem("mainurl")+"/photos/";

  constructor(private parservice:ParentService) { }

  ngOnInit(): void {
    this.refreshlist();
  }

  OnclickEdit(item :Parent){
    this.selectedOne=item;

    this.ModalTitle="Edit parent";
    this.ActivateAddEditEmpComp=true;//عشان يحمل الداتا صح
    }

    OnclickDelete(item :Parent){
      var sure= confirm("are you shure deleteing it ??")
    if( sure.valueOf){  
    this.parservice.DeleteParent(item.id).subscribe(data=>{this.refreshlist();})
    }
      }
    
    
      
      closeClick(){
    
        this.ActivateAddEditEmpComp=false;
        this.refreshlist();
        this.selectedOne=<Parent>{id:0}
    
      }
      refreshlist(){
        this.parservice.GetParents().subscribe(data=>{
          this.List=<Parent[]>data;
        })

      }
      onCheldrnclick(item:any){
        this.activatecheldrencomponet=true;
        this.selectedprent=item;
        
          }


          closesemestersubjects(){
            this.activatecheldrencomponet=false;

          }
}
