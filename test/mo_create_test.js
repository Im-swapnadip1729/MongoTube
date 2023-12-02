 const Student = require('../app/student');
 const assert = require("assert");

 describe("Create records", () => {
    it("creat a user in DB", () => {
        // assert(true);
        const sam = new Student({name: "sam"});
        sam
            .save()
            .then(() => {
                assert(!sam.isNew);
            })
            .catch(() => {
                console.log("error");
            })
    })
 })