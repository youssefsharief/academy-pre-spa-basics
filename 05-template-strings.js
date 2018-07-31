var name = "Bob", time = "today";


// Construct an HTTP request prefix is used to interpret the replacements and construction
const request = `http://foo.org
 Content-Type: application/json
     { "foo": ${name},
       "bar": ${time}}`

request