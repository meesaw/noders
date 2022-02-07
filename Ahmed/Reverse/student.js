class Student{
    constructor(name, id){
       this.name=name;
       this.id=id;
    }
    
  }
  class LawStudent extends student
  {
    constructor(name,id,marks){
        super(name,id);
        this.marks=marks;
    }
    
  }
  
  let abc =new LawStudent('abdul', '22', '932');
  console.log(abc);