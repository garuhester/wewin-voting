var User = require("../schemas/user");
var Department = require("../schemas/department");

//获取后台管理数据
var getAdminData = function (type) {
    return new Promise(function (resolve, reject) {
        var data = {};
        data.departments = [];
        data.users = [];
        if (type == "depart") {
            Department.find().sort({ 'votes': -1 }).exec(function (err, des) {
                data.departments = des;
                var sum = 0;
                for (var i = 0; i < des.length; i++) {
                    var d = des[i];
                    sum += d.votes;
                }
                data.sum = sum;
                resolve(data);
            });
        } else if (type == "user") {
            User.find(function (err, users) {
                data.users = users;
                resolve(data);
            });
        }
    });
}

//添加选手
var addDepart = function (req, res) {
    var departName = req.body.departName;
    var depart = new Department({
        name: departName
    });
    depart.save(function (err, de) {
        if (!err) {
            res.json({ result: 1, de, });
        }
    });
}

//初始化
var initData = function (req, res) {
    Department.update({}, { '$set': { 'votes': 0, "userList": [] } }, { multi: true }, function (err, result) {
        res.json({ result: 1 });
    });
}

var getList = function (req, res) {
    var dId = req.body.dId;
    Department.findById(dId).populate('userList.userId', 'name phone type').exec(function (err, des) {
        res.json(des);
    });
}

module.exports = {
    getAdminData,
    addDepart,
    initData,
    getList,
}