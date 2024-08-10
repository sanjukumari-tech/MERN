# MERN

basically it is driver which is helping you to use mongodb using javascript  like crud manipulation .

1. introduction to mongoose

Mongoose is an Object Data Mapping (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

Example

const mongoose = require('mongoose');

2. connection to mongodb

To interact with MongoDB, the first step is to establish a connection using Mongoose. This involves creating a connection string and connecting to the MongoDB database using the mongoose.connect() method.

Example

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });


3. schema and models
Mongoose uses schemas to model the structure of the data. A schema defines the structure of the document, default values, validators, etc. A model is a compiled version of the schema which is used to interact with the database.

Example

const blogSchema = new mongoose.Schema({
  title: {type:String,required:true},
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const Blog = mongoose.model('Blog', blogSchema);

Creating and Saving Documents

expand_less
To add documents to the database, first, create an instance of the model, and then call the save method on that instance to persist it to the database.

Example

const myBlog = new Blog({
  title: 'Introduction to Mongoose',
  author: 'Jane Doe',
  body: 'Mongoose simplifies the use of MongoDB...'
});

myBlog.save(function (err, myBlog) {
  if (err) return console.error(err);
  console.log('Document saved:', myBlog);
});

Querying

expand_less
Mongoose allows querying documents from the database using the model. Queries can be executed by find, findById, findOne, or where functions among others.

Example

Blog.find({ author: 'Jane Doe' }, function (err, blogs) {
  if (err) return console.error(err);
  console.log('Found blogs:', blogs);
});

Updating Documents

expand_less
Mongoose documents can be updated using methods like updateOne, updateMany, or findByIdAndUpdate. These methods provide flexibility in updating one or multiple documents based on conditions.

Example

Blog.updateOne({ title: 'Introduction to Mongoose' }, { title: 'Mongoose Basics' }, function(err, result) {
  if (err) return console.error(err);
  console.log('Update result:', result);
});

Deleting Documents

expand_less
To remove documents from the database, you can use methods like deleteOne, deleteMany, or findByIdAndRemove. These operations are straightforward and allow specifying conditions for deletion.

Example

Blog.deleteOne({ title: 'Mongoose Basics' }, function(err) {
  if (err) return console.error(err);
  console.log('Document removed');
});

Validation

expand_less
Mongoose provides a powerful way to validate the data before saving it to the database. Schema types have built-in validators, and custom validation can also be defined.

Example

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 65
  }
});

Middleware (Pre and Post Hooks)

expand_less
Mongoose supports middleware to be run before or after certain actions, such as saving documents. They are useful for writing plugins and complex business logic.

Example

personSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  this.name = this.name.trim();
  next();
});

personSchema.post('save', function(doc) {
  console.log('%s has been saved', doc.name);
});






