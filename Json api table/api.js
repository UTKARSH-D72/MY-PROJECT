fetch(`https://fakestoreapi.com/products`)
.then(res=>{
    res.json().then(json=>{
        console.log(json);
        if (json.length > 0) {

          var temp = "";
          json.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.id + "</td>";
            temp += "<td>" + itemData.title + "</td>";
            temp += "<td>" + itemData.price + "</td>";
            temp += "<td>" + itemData.description +"</td>";
          });
          document.getElementById('data').innerHTML = temp;
        }
    }
  )
}
)
