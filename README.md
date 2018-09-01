# faketestapi

to post data use url add/data.
example:
    .axios.post('faketestapi.herokuapp.com/add/data',{name:"rishab",score:5 })
        .then(response => response.json())
        .then(json => console.log(json))

to retrieve data use url get/data.

