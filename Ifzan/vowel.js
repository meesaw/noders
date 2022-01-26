function vowel(str)
{
    console.log(str);
    let x;
    for(let i=0; i<str.length; i++)
    {
        switch(str[i])
        {
            case 'a':
               x = 'e';
                break;
            case 'e':
                x = 'i';
                break;
            case 'i':
                x = 'o';
                break;
            case 'o':
                x = 'u';
                break;  
            case 'u':
                x = 'a';
                break;
            case 'A':
                x = 'E';
                break;
            case 'E':
                x = 'I';
                break;
            case 'I':
                x = 'O';
                break;
            case 'O':
                x = 'U';
                break;
            case 'U':
                x = 'A';
                break;  
            default :             
                x = str[i];
                break;                                
        }
        console.log(x);
    }
}
vowel("aeiou");