function line(arr,find)
{
    if(Array.isArray(arr) !== true || arr == '')
    {
        console.log('Invalid');
        return;
    }
    else
    {
        let len = arr.length;
        for(let i=0; i<len; i++)
        {
            let a =  0;
            if(arr[i] == find)
            {
                a++;
            }
            if(a>0)
            {
                console.log(`${arr[i]} found at index ${i}, position ${i+1}`);
            }
        }
        if(a<0)
            {console.log("DOES NOT EXISTS")}
    }
}
let a = [1,2,10,20,3,30,55];
line(a,10);