function count(str)
{
    let len = str.length;
    if(len == 0)
    {
        console.log("empty");
        return;
    }
    for(let i=0; i<len; i++)
    {
        let a = 0;
        for(let j=0; j<len; j++)
        {
            if(str[i] == str[j] && i>j)
            {
                break;
            }
            if(str[i] == str[j])
            {
                a++;
            }
        }
        if(a>0)
        console.log(`In the string ${str[i]} occurs ${a} times`);
    }
}
count("aaaaaaaabbbbbbbbcddggggguu");