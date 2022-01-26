function binary (arr,x,y,find)
{
    try
    {
    if(!Array.isArray(arr) || !arr.length) throw 'INVALID';
}
catch (err)
{ console.log(err);}

    {
        let m = Math.floor((x+y)/2);

            if(arr[m] === find)
            {
                console.log(`${find} found at ${m+1} position`);
            }
            else if(arr[m] > find)
            {
                binary(arr,x,m+1,find);
            }
            else
            {
                binary(arr,m+1,y,find);
            }
    }
}
       
let a = [];
binary(a.sort(function(u, v){return u - v;}),0,a.length-1,100);