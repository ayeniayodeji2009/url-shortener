//import mongoose package
import mongoose, { ConnectOptions } from 'mongoose';


//declare a Database string URI
const DB_URI = "mongodb://localhost:27017/url-shortener";

// establishing a database connection
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions )

const connection = mongoose.connection;


//export the connection object
export default connection;