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
            if(arr[i] == find)
            {
                console.log(arr[i]);
                break;
            }
        }
    }
}
let a = [1,2,10,20,3,30,55];
line(a,10);