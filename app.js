//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
//import alert from 'alert-node';
const homeStartingContent = "Hi, I'm Atul. Currently pursuing B-tech at IIT dh, I am a code enthusiast, open - source contributor and a web developer. Apart from that, I love reading and writing,music and art and play rated chess.The blog is like a personal dairy with all the major and fun events I am a part of.";
const aboutContent = "The blog is designed to serve as a report of all the activities undertaken over time. More exciting projects are available at gitHub. I shall do my best to be regular at writing updates regarding the activities. Wish you a happy reading!";
//const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/blog", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
    });
});
app.get("/posts/blog", function(req, res){
   res.redirect("/blog");
});

var url = "https://drive.google.com/open?id=1PA-iGfVHiLC5MorOXxfnZlZn5NHKFw9p";


app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});
app.get("/posts/about", function(req, res){
   res.redirect("/about");
});



// app.get("/contact", function(req, res){
//   res.render("contact", {contactContent: contactContent});
// });

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);

  res.redirect("/dash");

});


app.get("/posts/:postName", function(req, res){
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }
  });

});


////////////cover page/////////////////
app.get("/",function(req,res){
  res.render("coverPage",{url:url});
});

app.get("/coverPage",function(req,res){
  res.render("coverPage",{url:url});
});


/////////main page////////////
app.get("/mainPage",function(req,res){
  res.render("mainPage",{url:url});
});

///Expertise-
let exps = [{
  title: "Java",
  content: "An expertise in core Java 8.0, have also worked with servlets,maven,cradle,spring framework,spring boot,JDBC.",
  img: "https://www.edureka.co/blog/wp-content/uploads/2018/01/2-2.png"

},
{
  title: "Competitive Coding",
  content: "Able to do competitive coding in Java,C++,Python,Javascript. Link to my Hackerrank profile can be found in the contacts section below. Have taken part in various Competitive Coding contests. Coding has been my passion since 2009.",
  img: "https://lh3.googleusercontent.com/proxy/f_LBh7rOiTRIX9ewue1Qx8VXOPubg4HYZOcip6LoYTSTRPZ3Qvejacg-oTkgLuyI2agwaS1tJST_LzhR0WsUIVsOPTZ3v-n2L-7jiuI74GkXvj0edCWH5Eg" 
},
{
  title: "Web-development",
  content: "Able to make web based applications. Can do the same via both Java and NodeJS(using ExpressJS and npm). Front-end skills include HTML 5,CSS,Bootstrap,Javascript,Jquery,EJS.",
  img: "https://qph.fs.quoracdn.net/main-qimg-6491f722fd66b3bc281ac9f93021389e"
},
{
  title: "Data Science",
  content: "Have done courses regarding the same. Have a solid mathematical background required for the same.",
  img: "https://dv-website.s3.amazonaws.com/uploads/2016/04/pg_dsskills1_040316.png"
},{
  title: "Database",
  content: "Have a strong foundation in relational and non-relational database systems. Have done a number of projects using mysql and mongoDB.",
  img: "https://cdn5.vectorstock.com/i/1000x1000/96/99/blue-round-dbms-concept-vector-19219699.jpg"
},{
  title: "Operating systems",
  content: "The major operating systems I have worked on include Winddows,Ubuntu,Unix,Android,IOS.",
  img: "https://www.howtogeek.com/thumbcache/2/200/8b2cb8c7c5fc73604d66fd5f0c38be7a/wp-content/uploads/2018/08/img_5b68e80f77e33.png"
},{
  title: "Arduino",
  content: "Have developed several projects using Arduino and other similar micro-controllers.",
  img: "https://cdn.antratek.nl/media/product/b20/arduino-uno-rev3-a000066-5f8.jpg"
},{
  title: "Mathematics",
  content: "Have a thorough understanding and applicative capabilities of topics which circle around Probability,Multivariable Calculus,Linear Algebra,Statistics,Set-theory,Permutations and Combinations,Differential equations",
  img:"https://lh3.googleusercontent.com/proxy/VO9LAwrhqZaZ6HlLNjzxW8NiVaoMdcleTeyNqpPJXlVrNEa0GDEjRK6OnTgEpeXb6kITA_y28gR4nRB1tg4NHfLlqZW_hPI4yck1BkheyqSypOQ876PZQOWNzMY"
}


];
app.get("/expertise", function(req, res){
  res.render("expertise", {exps:exps});
});

/////////education:
let edus = [{
  title: "Schooling-till 10th grade",
  content: "The Oxford Senior Secondary School, this is where the major part of my personality development occured;",
  img: "https://content3.jdmagicbox.com/comp/bangalore/r3/080pxx80.xx80.140418151759.g9r3/catalogue/oxford-senior-secondary-school-jp-nagar-1st-phase-bangalore-schools-3nsulhe.jpg"

},
{
  title: "Schooling - 11th and 12th",
  content: "Bangalore International Academy, spent mainly in preparations for JEE Advanced.",
  img: "https://www.edustoke.com/assets/uploads-new/6c927a5f-5d85-4c4e-a358-2cbba534c6ca.jpg" 
},
{
  title: "B-Tech",
  content: "Indian Institute of Technology, Dharwad (2019-2023), This is where I stand now!!",
  img: "https://m.jagranjosh.com/imported/images/E/Articles/iit_dharwad.jpg"
}];
app.get("/Myedu", function(req, res){
  res.render("Myedu", {edus:edus});
});
//////achievements:
let ach = [{
  title: "KVPY",
  content: "The prestegious KVPY olympiad was cracked in 2017-2018, Have also attended the Vijyoshi camp organized at IISc,Bangalore.",
  img: "https://m.jagranjosh.com/imported/images/E/Articles/KVPY_2019_Test.jpg"

},
{
  title: "IAPT-NSEA",
  content: "A national level exam in Astronomy (2019). Managed to clear stage 1 of the same.",
  img: "https://www.noticebard.com/wp-content/uploads/2017/06/download-1-3.png" 
}
];
app.get("/ach", function(req, res){
  res.render("ach", {ach:ach});
});


/////////resume page//////////
app.post("/dash",function(req,res){
url=req.body.url;

console.log("updated");

});



/////////login page//////////

app.get("/loginPage",function(req,res){
res.render("loginPage",{ errormessage: '',url:url});
});
app.get("/posts/loginPage",function(req,res){
 res.redirect("/loginPage");
});


//////signin page
app.post("/Signin",function(req,res){
const uid = req.body.uid;
const pwd = req.body.pwd;

if(uid=="atulsingh.pks@gmail.com"&&pwd=="emyre2001"){
   res.redirect("/dash");
   console.log("logged in");
}
else {res.render("loginPage", {errormessage: 'incorrect credentials'});}

});


//////dash page
app.get("/dash",function(req,res){
  res.render("dash");
});


///compose pages:(post)


app.post("/composeEdu", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
    url: req.body.url
  };

  edus.push(post);

  res.redirect("/dash");

});


app.post("/composeE", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
    url: req.body.url
  };

  exps.push(post);

  res.redirect("/dash");

});

app.post("/composeA", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
    url: req.body.url
  };

  ach.push(post);

  res.redirect("/dash");

});


//compose pages(get):
app.get("/composeA", function(req, res){
  res.render("composeA");
});

app.get("/composeE", function(req, res){
  res.render("composeE");
});

app.get("/composeEdu", function(req, res){
  res.render("composeEdu");
});

//////////////////////////////////////////////
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
