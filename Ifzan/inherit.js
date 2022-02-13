class student{
    constructor(name, id){
       this.name = name;
       this.id = id;
    }
  }

  class section extends student
  {
    constructor(name, id, marks){
        super (name, id);
        this.marks = marks;
    } 
  }
  
  let abc =new section('abdul', 22, 932);
  console.log(abc);