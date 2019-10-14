var express = require("express")
    bodyParser = require("body-parser")
    nodemailer = require("nodemailer")
    app = express()
    flash = require("connect-flash")
    require("dotenv").config().parsed;
    

app.use(flash())
app.use(require("express-session")({
    secret: "I am cool",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine","ejs")
app.use(express.static(__dirname + "/public"));
app.use(function(req, res, next){
    res.locals.success = req.flash("success")
    next()
})

app.get("/", function(req, res){
  res.render("portfolio")
})
app.get("/projectcards/BloggerInc", function(req, res){
    res.render("./projectcards/BloggerInc")
})
app.get("/projectcards/CampInsiders", function(req, res){
  res.render("./projectcards/CampInsiders")
})
app.get("/projectcards/GameCon", function(req, res){
  res.render("./projectcards/GameCon")
})
app.get("/projectcards/ProstheticHand", function(req, res){
  res.render("./projectcards/ProsthethicHand")
})

app.post("/email", function(req, res){
    var transporter = nodemailer.createTransport({
        host: "smtp@gmail.com",
        port: 465,
        service: 'gmail',
        auth: {
          user: 'labeebzaker@gmail.com',
          pass: process.env.MYGMAILPASS
        }
      });
      
      var mailOptions = {
        from: "labeebzaker@gmail.com",
        to: 'labeebzaker@gmail.com',
        // email: req.body.email,
        subject: req.body.subject,
        text: `${req.body.email} has sent the following message: ${req.body.message}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          req.flash("success", "Successfully sent email!")
          res.redirect("/")
        }
      });      
})
app.get('/favicon.ico', function(req, res){
  res.status(204)
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("server starts")
})