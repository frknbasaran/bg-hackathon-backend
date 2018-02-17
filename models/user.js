import mongoose from 'mongoose';
import md5 from 'md5';

mongoose.Promise = Promise;

const User = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    registered_at: Date.now(),
    reputation: Number,
    photo: String
});

User.pre("save", (next) => {
    if (this.isNew) {
        this.photo = "https://gravatar.com/avatar/" + md5(this.email.trim().toLowerCase()) + "?s=200";
    }
    next();
})

export default User;