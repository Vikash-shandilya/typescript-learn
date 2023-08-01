const num1Element=document.getElementById('num1') as HTMLInputElement
const num2Element=document.getElementById('num2') as HTMLInputElement
const buttonElement=document.querySelector('button')!

const numberArray:number[]=[]
const textArray:string[]=[]

type numOrStr=number| string

interface resultobj
{
    val:number,
    timestamp:Date
}

function Add(num1:numOrStr,num2:numOrStr)
{
    if(typeof num1==='number' && typeof num2==='number')
    {
        return num1+num2;
    } 
    else if(typeof num1==='string' && typeof num2==='string')  
    {
        return num1+' '+num2;
    }
    else{
        return +num1+ +num2;
    }
}

function printResult(result:resultobj)
{
    console.log(result.val);
    
}

buttonElement.addEventListener('click',()=>{
    let num1=num1Element.value;
    let num2=num2Element.value;
    const result=Add(+num1,+num2)
    const stringresult=Add(num1,num2)
    numberArray.push(result as number);
    textArray.push(stringresult as string);
    console.log(result);
    console.log(stringresult);
    printResult({val:result as number,timestamp:new Date})
    console.log(numberArray,textArray);
    
    
    


})

const mypromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked')
        
    },1000)
})
mypromise.then((result)=>{
    console.log(result.split('w'));
    
})

