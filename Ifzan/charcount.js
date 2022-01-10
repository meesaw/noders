function abc(q)
{
    let count = q.length;
    console.log(count);
    let m = new Map();
    if(count == 0)
    {
        console.log("Invalid");
        return; 
    }
    else
    {
    for (let i=0; i<count; i++)
    {
        let a = 0; 
        m.set(q[i],0);
        {
            if(m.has(q[i]))
            {m.set(q[i],a++);}
        }
        if(a>0)
        {console.log(`${q[i]} occurs ${a} times`);}
    }
}
}
abc("hfisuidgfiusdvvvvvvukuhsd");