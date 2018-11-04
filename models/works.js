const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Works = new Schema({
    title: String,
});

// create model 'Issue' from defined schema Issue
export default mongoose.model('Works', Works);