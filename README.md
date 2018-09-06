# faketestapi

#####to post data use url add/data.<br/>
######example:
    ```
    .axios.post('faketestapi.herokuapp.com/add/data',{name:"rishab",score:5 })
        .then(response => response.json())
        .then(json => console.log(json))
    ```
#####to retrieve data use url get/data.
    ```javascript
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
    ```
url http://faketestapi.herokuapp.com