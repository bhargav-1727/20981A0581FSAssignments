//1.Basic Types:
let n: number=10;
let str: string="Hii";
let f: boolean=true;
let arr: number[]=[1,2,4]
let tup: [string,number]=["hii",20];
enum week {Sunday=1,monday,Tuesday,Wednesday,Thursday,Friday,Saturaday};
console.log(week)

//2.Functions:
function add(v:number,a:number){
    return(v+a);
}
console.log(add(10,20));
let cap1 = (x:string) =>{ 
    return(x.charAt(0).toUpperCase() + x.slice(1));
}
console.log(cap1("fullstack"));

//3.Interfaces
interface Person{
    name:string;
    age:number;
    email:string;
}
let User = (point:Person)=>{
}
User({
    name:"Shiva",
    age:20,
    email:"sivakapuganti1@gmail.com"
})

//4.Classes
 class Car{
    make?: string;
    model?: string;
    year?: number;
    constructor(make?:string,model?:string,year?:number){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    displayinfo(){
        console.log(this.make,this.model,this.year);
    }
    }
let s=new Car("Benz","sclass",2024);
s.displayinfo();

//5.Generics
function reverseArray(m:any[]){
    let b=[]
    for (let i=m.length-1;i>=0;i--){
        b.push(m[i])
    }
    return b;
}
var c1=[2,3,4,"Bhargav"];
console.log(reverseArray(c1));

