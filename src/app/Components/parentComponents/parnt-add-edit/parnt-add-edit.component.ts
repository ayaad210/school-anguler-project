import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialUser } from 'angularx-social-login';
import { Parent, ParentVModel } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { ParentService } from 'src/app/Services/parent.service';

@Component({
  selector: 'app-parnt-add-edit',
  templateUrl: './parnt-add-edit.component.html',
  styleUrls: ['./parnt-add-edit.component.css']
})
export class ParntAddEditComponent implements OnInit {

  @Input("selectedOne") selectedOne:Parent;

  Model:ParentVModel;
  form:FormData;
  filename:string;
  showinmageurl:string|ArrayBuffer
  message: string="";
  imagePath: any;
  constructor(private parservice:ParentService,private acc:AccountService) { }

  ngOnInit(): void {
    console.log("selected one");    


   this.getdata();
  }

  getdata(){
    
    


    if  (  this.selectedOne )
    {
if  (this.selectedOne.id>0)

   { 
     this.Model=<ParentVModel>{
   id:this.selectedOne.id,
  

      name:this.selectedOne.user.name,
      email:this.selectedOne.user.email,
      age:this.selectedOne.user.age,
      photoFileName:this.selectedOne.user.photoFileName,
      
      password:"not changed",
      confirmPassword:"not changed",
      userid:this.selectedOne.user.id
    

    }
    this.showinmageurl=localStorage.getItem("mainurl")+"/photos/"+this.Model.photoFileName;
      return
   } 

  }
    this .Model =<ParentVModel>{ id:0,
     name:"",
     email:"",
     age:0,
     photoFileName:null,


     

    }
  }

  
  onaddclick(){

     this.parservice.CreateParent(this.Model,this.form).subscribe(
      
      
      (data:any)=>{alert(data.value)},
       (error:any)=>{alert(error.error)}
       
      
    
    
   );
    
      }
    
      onEditclick(){
        this.parservice.UpdateParent(this.Model,this.form,this.selectedOne.user.photoFileName).subscribe( 
           (data:any)=>{alert(data.value)},
          (error:any)=>{alert(error.error)}
          
         );
    
      }
  
    onsupmit(form:NgForm){
   

     this.Model.name=(form.value).name;
     this.Model.age=(form.value).age;
     this.Model.email=(form.value).email;
   



    
    if (this.Model.id==0)
    {
      this.Model.password=(form.value).password;
      this.Model.confirmPassword=(form.value).confirmPassword;
      this.onaddclick();
    }
    if(this.Model.id>0){
      
      this.onEditclick();
    }
    
    }

    handleFileInput(event){
      var file=event.target.files[0];
this.previewiamge(event.target.files)
     var time=new Date();
    var newname =time.getMinutes().toString()+time.getDay().toString()+time.getMilliseconds().toString() +file.name;
      const formData:FormData=new FormData();
      formData.append('uploadedFile',file,newname);
      this.form=formData;
      this.Model.photoFileName=  newname;
    
    }
    
    previewiamge(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
     // this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.showinmageurl = reader.result; 
      }
    }

    public externalLogin = () => {
      // this.showError = false;
       this.acc.signInWithGoogle()
       .then(res => {
         const user: SocialUser = { ...res };
       
         this.Model.name=user.name;
         this.Model.age=0;
         this.Model.email=user.email;
         this.Model.provider=user.provider
         this.Model.identifier=user.id;
         this.Model.providertoken=user.idToken;
         this.onaddclick();

        console.log(user);
      }, error => console.log("error "+error))


      


    }
    

}
