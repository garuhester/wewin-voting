var User = require("../schemas/user");

//登陆
var doStart = function (req, res) {
    var name = req.body.name;
    var phone = req.body.phone;
    var code = req.body.code;
    var success = { result: 1, name, phone, };

    User.find({ "phone": phone }, function (err, user) {
        //已有用户
        if (user.length != 0) {
            var u1 = {
                "id": user[0]._id,
                "name": user[0].name,
                "type": user[0].type,
                "ticket": user[0].ticket
            }
            req.session.user = u1;
            res.json(success);
        } else {
            var types = isType(phone);
            console.log(types);
            var u2 = new User({
                name,
                phone,
                type: types.type,
                ticket: types.ticket
            });
            u2.save(function (err, result) {
                var u3 = {
                    "id": result._id,
                    "name": result.name,
                    "type": result.type,
                    "ticket": result.ticket
                }
                req.session.user = u3;
                res.json(success);
            });
        }
    });
}

function isType(phone) {
    var type = 0, ticket = 0;
    if (phone == 18696595777 || phone == 13883452999) {
        type = 4; // 10
        ticket = 10;
    } else if (phone == 15086652010 || phone == 13628308589 || phone == 18696628729) {
        type = 3; // 8
        ticket = 8;
    } else if (phone == 18523982898 || phone == 13983052552 || phone == 13983133175 || phone == 18723986668 || phone == 13512369065 || phone == 17723152866 || phone == 15922924768 || phone == 15808007460 || phone == 18696871120 || phone == 15922639408 || phone == 18324145654 || phone == 15802382782 || phone == 15320575229 || phone == 15215188168) {
        type = 2; // 6
        ticket = 6;
    } else if (phone == 13883089054 || phone == 18716322068 || phone == 17382333572 || phone == 18983417191 || phone == 18983677246 || phone == 18983241392 || phone == 13637733267 || phone == 13983654385 || phone == 18580346316 || phone == 13883656483 || phone == 13752911782 || phone == 18375790183 || phone == 13996369909 || phone == 15923520418 || phone == 18696547854 || phone == 13883630878 || phone == 15023603183 || phone == 18983263031 || phone == 18581056182 || phone == 13658313688 || phone == 18716685460 || phone == 15823838804 || phone == 18983610375 || phone == 13983084606 || phone == 13996200964 || phone == 15123145272 || phone == 13983680036 || phone == 15922932202 || phone == 18883314159 || phone == 13098689090 || phone == 13983645550 || phone == 13594134542 || phone == 15123886176 || phone == 15826100298 || phone == 13206130966 || phone == 17823829052 || phone == 13752937030 || phone == 18375662886 || phone == 18102388848 || phone == 15823009488 || phone == 15223354918 || phone == 15601915755 || phone == 15922550108 || phone == 13983717493 || phone == 13618299708 || phone == 15523491199 || phone == 15736036578 || phone == 18716361502 || phone == 13883222845 || phone == 15919008889 || phone == 18694995685 || phone == 13996292425 || phone == 18623091710 || phone == 18996332963 || phone == 18996091827 || phone == 15215081199 || phone == 13752943305 || phone == 15923571711) {
        type = 1; // 4
        ticket = 4;
    } else {
        type = 0; // 2
        ticket = 2;
    }
    return {
        type,
        ticket,
    };
}

module.exports = {
    doStart,
}