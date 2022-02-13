class Mla
{
    constructor(name,constituency)
    {
        this.name=name;
        this.constituency=constituency;
    }
    work()
    {

        console.log("2 years")
    }
}
class Chiefminiister extends Mla{
    constructor(name,constituency,majority)
    {
        super(name,constituency);
        this.majority=majority;

    }
    work()
    {
        console.log("3 months")
    }
}
let abc=new Chiefminiister('jagan','pulivendula','70000')
let abd=new Chiefminiister('stalin','selam','40000')
Chiefminiister.work();
console.log(abc);

    
