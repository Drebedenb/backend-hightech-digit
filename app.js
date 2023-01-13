const express = require("express")
const config = require("config")
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

app.use("/api/auth")

const PORT = config.get('PORT') || 5000;

const uri = config.get("mongoUri")

async function start (){
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        client.connect(err => {
            const collection = client.db("test").collection("devices");
            client.close();
        });
        app.listen(PORT, () => console.log(`app has been started on port: ${PORT}`))
    } catch (e) {
        console.log("Server Error", e.message)
        process.exit(1)
    }
}

//
// async function start (){
//     try {
//         mongoose.set("strictQuery", false);
//         await mongoose.connect(config.get("mongoUri"), () => {
//             console.log("Connect DB")
//         });
//         app.listen(PORT, () => console.log(`app has been started on port: ${PORT}`))
//     } catch (e) {
//         console.log("Server Error", e.message)
//         process.exit(1)
//     }
// }

start();