<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>faketestapi</h1>

<h2>to post data use url add/data.</h2>
<div>
    example:
    <div>
        <pre>
        .axios.post('faketestapi.herokuapp.com/add/data',{name:"rishab",score:5 })
        .then(response => response.json())
        .then(json => console.log(json))
    </pre>
    </div>
    
</div>
<h2>to retrieve data use url get/data.</h2>
    <div>
        <div>
            <pre>
            fetch(url, {
                method: 'POST',
                headers: {<br />
                    "Content-type": 'application/json;',
                },
                body:JSON.stringify({
                    score:69
                }),
            })
            .then(response => response.json())
            .then(json => {console.log(json); res.send(json)})
            .catch(err => res.send(err))
        </pre>
        </div>
    </div>
url http://faketestapi.herokuapp.com
</body>
</html>