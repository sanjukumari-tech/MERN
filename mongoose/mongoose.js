// const mongoose = require("mongoose");

// const Bloggschema = new mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number },
//     createdDate: { type: Date, default: Date.now }, // Corrected default value
// });

// const WebsiteModel = mongoose.model("dummyBlog", Bloggschema);

// async function main() {
//     // Await the connection
//     await mongoose.connect("mongodb://127.0.0.1:27017/dummyWebsiteer");
//     console.log('Connected to MongoDB');

//     // Create a new document in mongodb using javascript 

//     // const dummyblogs = new WebsiteModel({
//     //     name: "Sanju Kumari",
//     //     age: 23,
//     // });
//     // console.log(dummyblogs)
    
//     // await dummyblogs.save();
//     // console.log("Blog saved!");

//     // finding data 
//     // const dummyblogs = await WebsiteModel.findOne();
//     // console.log(dummyblogs)

//     //updating data
//     // const x = await WebsiteModel.find().skip(1).limit(1);
//     // console.log(x)


//     // const sort = await WebsiteModel.find().sort({name:"Sanju Kumari"});
//     // console.log(sort);

//     // Disconnect after saving
//     await mongoose.disconnect();
// }

// main().catch(err => console.log(err));





//////////////////////////////////////////////////////////////////////////////

const mongoose = require("mongoose");

// Model schema
const BlogSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String },
    createdAt: { type: Date, default: Date.now },
    content: { type: String },
    tags: { type: [String] },
});

const Blog = mongoose.model("Blog", BlogSchema);

async function main() {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/website");
    console.log("Connected...");


    // inserting data into mongodb using this
    // const blog = new Blog({  //inserting data in mongodb document-blog database website
    //     author: "sanju kumari",
    //     title: " got  job of 9 lpa ",
    //     content: "sanju  is good in communication will do best in life and she will buy home car in jan 2026 ...",
    //     tags: ["goal", "software engineer","handsome and loving husband","caring family","wealth generation by father and brother ","very properous and happy",],
    // });

    // await blog.save();
    // console.log("Blog saved!");


 // finding data 
//    const blog = await Blog.findOne(); // query findone
//    console.log(blog);//geting data in terminal 

    //   const blog = await Blog.findOne({author:"John Doe"});
    //   console.log(blog);



    //updating data 

    // const x = await Blog.find().skip(1).limit(1);
    const sort = await Blog.find().sort({title:-1});
    console.log(sort);



    await mongoose.disconnect(); // Disconnect after saving
}

main().catch(err => console.error(err));
