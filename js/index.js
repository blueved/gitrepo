document.getElementById("demo").style.fontSize = "35px";

const https = require('https');

const weatherApiKey = "22c467b46c6b59542962e633858b9c30";
const weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={22c467b46c6b59542962e633858b9c30}";

https.get(weatherUrl, res => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

//   res.on('data', chunk => {
//     data.push(chunk);
//   });

  res.on('end', (json) => {
    console.log('Response ended: ');
    console.log(JSON.stringify(json));
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});

/*
<!DOCTYPE html>
<html>
<head>
<title>Weather</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>
    function gettingJSON(){
        document.write("jquery loaded");
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ee6596241130f193adf1ba90e625cc10",function(json){
            document.write(JSON.stringify(json));
        });
    }
    </script>
</head>
<body>
<button id = "getIt" onclick = "gettingJSON()">Get JSON</button>
</body>
</html>
*/