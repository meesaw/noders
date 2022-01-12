function binary (arr,x,y,find)
{
    if(Array.isArray(arr) !== true)
    {
    console.log('Invalid');
    }
    else if(x>y)
    {
    console.log("ARRAY EMPTY");
    }
    else
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
       
let a = [1,200,19,15,100,95,2,43,49,77];
binary(a.sort(function(u, v){return u - v;}),0,a.length-1,100);