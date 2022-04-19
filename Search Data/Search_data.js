var data =[
    {cname:"samsung" ,price:50000 , item:"laptop" },
    {cname:"samsung" ,price:50000 , item:"laptop" },
    {cname:"samsung" ,price:5000 , item:"mobile" },
    {cname:"samsung" ,price:5000 , item:"mobile" },
    {cname:"sony" ,price:25000 , item:"tablet" },
    {cname:"sony" ,price:25000 , item:"tablet" },
    {cname:"sony" ,price:20000 , item:"mobile" },
    {cname:"sony" ,price:20000 , item:"mobile" },
    {cname:"sony" ,price:200000 , item:"laptop" },
    {cname:"sony" ,price:200000 , item:"laptop" },
    {cname:"sony" ,price:20000 , item:"mobile" },
    {cname:"sony" ,price:20000 , item:"mobile" },
    {cname:"xiaomi" ,price:6000 , item:"mobile" },
    {cname:"xiaomi" ,price:6000 , item:"mobile" },
    {cname:"xiaomi" ,price:10000 , item:"tablet" },
    {cname:"xiaomi" ,price:10000 , item:"tablet" },
    {cname:"xiaomi" ,price:60000 , item:"laptop" },
    {cname:"xiaomi" ,price:60000 , item:"laptop" },
    {cname:"xiaomi" ,price:6000 , item:"mobile" },
    {cname:"xiaomi" ,price:6000 , item:"mobile" },
    {cname:"apple" ,price:50000 , item:"iphone" },
    {cname:"apple" ,price:50000 , item:"iphone" },
    {cname:"apple" ,price:500000 , item:"imac" },
    {cname:"apple" ,price:500000 , item:"imac" },
    {cname:"apple" ,price:80000 , item:"ipad" },
    {cname:"apple" ,price:80000 , item:"ipad" },
    {cname:"apple" ,price:50000 , item:"iphone" },
    {cname:"apple" ,price:50000 , item:"iphone" },
    {cname:"panasonic" ,price:8000 , item:"mobile" },
    {cname:"panasonic" ,price:8000 , item:"mobile" },
    {cname:"panasonic" ,price:10000 , item:"tablet" },
    {cname:"panasonic" ,price:10000 , item:"tablet" },
    {cname:"panasonic" ,price:80000 , item:"laptop" },
    {cname:"panasonic" ,price:80000 , item:"laptop" },
    {cname:"panasonic" ,price:8000 , item:"mobile" },
    {cname:"panasonic" ,price:8000 , item:"mobile" },
]
var table1= `<table width='500' border='2px'><tr><th>cname</th><th>price</th><th>item</th></tr>`
function output()
{
    for(let a of data)
    {
        table1 +=`<tr><th>${a.cname}</th><th>${a.price}</th> <th>${a.item}</th></tr>`
    }
    document.getElementById('out').innerHTML=table1;
    
   
}
     function hello()
      {
         var value1=document.getElementById('search').value;
         
            var filters= data.filter(function(x,i){
                if(x.cname.startsWith(value1) || x.price.toString().startsWith(value1) || x.item.startsWith(value1))
                {
                    return x;
                }
                 })
                 var table2= `<table width='500' border='2px'><tr><th>cname</th><th>price</th><th>item</th></tr>`
                 for(let g of filters){
                
                    table2 +=`<tr><th>${g.cname}</th><th>${g.price}</th> <th>${g.item}</th></tr>`
                }
             document.getElementById('out').innerHTML=table2;
            
           
    }
