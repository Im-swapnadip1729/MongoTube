const mongoose = require("mongoose");
mongoose.Promise = global.Promise;//ES6 promises



before((done) => { 
    //connecting with mongo db
    mongoose.connect("mongodb://localhost/mongotube",{useNewUrlParser:true});

    //after connection successfull
    mongoose.connection
        .once("open", () => {
            // console.log("Connected");
            done();
        })
        .on("error", (error) =>{
            console.log("Your Error", error);
        });
});

beforeEach(done =>{
    mongoose.connection.collections.students.drop(() => {
        done();
    })
});