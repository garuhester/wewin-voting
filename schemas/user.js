var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String, // 姓名
    phone: String, // 手机号码
    type: Number, // 类型(0:普通(2) 1:主管(4) 2:经理(6) 3:总经理(8) 4:副总(10))
    ticket: Number, // 剩余票数
    createTime: { type: Date, default: Date.now } // 创建时间
});

module.exports = mongoose.model("User", UserSchema);