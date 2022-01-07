let str = "An Apple A Day Keeps The Doctor Away";
console.log(str);
str = str.replace(/\s+/g, '');
console.log(str);
let res = '';
let len = str.length;
function maxchar ()
{
    let count = [256];
    for (let i = 0; i < 256; i++)
    {
        count[i] = 0;
    }
    for (let i = 0; i < len; i++)
		{
            count[str[i].charCodeAt()]++;
		}
        let max = 0;
        for (let i = 0; i < len; i++)
		{
            if (max < count[str[i].charCodeAt()])
            {
                max = count[str[i].charCodeAt()];
                res = str[i];
            }
		}
        console.log(res);
}
maxchar();
