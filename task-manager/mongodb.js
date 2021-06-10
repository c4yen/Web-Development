// CRUD: create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID =  mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').findOne({ _id: new ObjectID("60c20221eaae2e6f9cff9505") }, (error, user)=>{
        if (error){
            return console.log('Unable to find user')
        }

        console.log(user)
    })

    db.collection('users').find({ age: 27} ).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 27} ).count((error, count) => {
        console.log(count)
    })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Take out the Garbage',
    //         completed: false
    //     },
    //     {
    //         description: 'Do Udemy Course',
    //         completed: false
    //     }
    // ], (error, result)=>{
    //     if (error){
    //         return console.log("Unable to insert tasks!")
    //     }
    //     console.log(result.ops)
    // })
   
})