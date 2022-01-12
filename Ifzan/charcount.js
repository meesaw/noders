function abc(q)
{
    let count = q.length;
    console.log(count);
    let m = new Map();
    for (let i=0; i<count; i++)
    {
        m.set(q[i],0);
    }
    if(count == 0)
    {
        console.log("Invalid");
        return; 
    }
    else
    {
    for (let i=0; i<count; i++)
    {
        let a = m.get(q[i]);
        if(m.has(q[i]))
           {
            m.set(q[i],a+1);
        }
        if(a>0)
        {
            console.log(`${q[i]} occurs ${a} times`);
        }
    }
}
}
abc("aassddffaass");