const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
        user: { 
          type: Schema.Types.ObjectId,
           ref: 'users' 
          },
        projectname: {
          type: String,
          required: true
        },
        stack: {
          type: String,
          required: true
        },
        description: {
          type: String
        },
        from: {
          type: Date,
          required: true
        },
        to: {
          type: Date
        },
        current: {
          type: Boolean,
          default: false
        }
})

module.exports = Project = mongoose.model('project', ProjectSchema);