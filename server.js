var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    articleone: {
     title: 'Article One|Willson Verma',
     heading:'Article One',
     date:'sep5 2017',
     content:` <p>
                hi this is content. hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is contentv
            </p>
            <p> hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content
            </p>
            <p> hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content
            </p>`
            
     
 },
    articletwo:{
     title:'Article Two|Willson Verma',
     heading:'Article Two',
     date:'sep3 2017',
     content:` <p>
                hi this is content. hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is contentv
            </p>
            <p> hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content
            </p>
            <p> hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content
            </p>`
            },
    artcilethree:{ title:'Article Three|Willson Verma',
     heading:'Article Three',
     date:'sep3 2017',
     content:` <p>
                hi this is content. hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is contentv
            </p>
            <p> hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content
            </p>
            <p> hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content hi this is content
            </p>`
            },
 };
 
 function createTemplate(data){
     var title=data.title;
     var date=data.date;
     var heading=data.heading;
     var content=data.content;
 var htmlTemplate=`
 <!DOCTYPE html>
<html>
<head>
   
   ${title}
     <link href="/ui/style.css" rel="stylesheet" />
    
</head>    
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        
        ${heading}
        <div>
            ${date}
        </div>
        <div  class="container">
           ${content}
         </div>
    </body>
</html>
`;
return htmlTemplate;
     
 }
var counter=0; 
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
    
})


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleone',function(req,res){
     res.send(createTemplate(articles[articleone]));
});

app.get('/articletwo',function(req,res){
    res.send('article two will be served here');
});

app.get('/articlethree',function(req,res){
    res.send('article three will be served here');
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
