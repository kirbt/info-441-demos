import mongoose from 'mongoose'

// models will have my db collection connections

const models = {}
console.log('Connecting to mongodb')
await mongoose.connect('mongodb+srv://db_user:cheeseburger@cluster0.smaijgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

console.log('successfully connected into mongodb')

const userSchema = new mongoose.Schema({
  firstName: String,
  last_name: String,
  favorite_ice_cream: String
})
models.User = new mongoose.model('User', userSchema)

console.log('mongoose models created')

export default models
