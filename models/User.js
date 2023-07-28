const mongoose = require(`mongoose`)

const userSchema = new mongoose.Schema(
    {
        username: 
        {
            type: String,
            required: true,
            unique: true,
        },
        email:
        {
            type: String,
            required: true,
            unique: true,
        },
        password:
        {
            type: String,
            required: true,
        },
        isAdmin:
        {
            type: Boolean,
            default: false,
        },
        img:
        {
            type: String,
            default: "https://cdn-icons-png.flaticon.com/128/9453/9453981.png",
        },
        amount:
        {
            type: Number,
            default: 0
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("User", userSchema)