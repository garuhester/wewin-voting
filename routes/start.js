var User = require("../schemas/user");

//登陆
var doStart = function (req, res) {
    var name = req.body.name;
    var phone = req.body.phone;
    var success = { result: 1, name, phone, };
    var fail = { result: 0 };

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
            if (types.type != -1) {
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
            } else {
                res.json(fail);
            }
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
    } else if (phone == 15676888877 || phone == 15215095737 || phone == 17623505853 || phone == 15334550747 || phone == 13594606517 || phone == 13594499134 || phone == 18623594430 || phone == 17782339493 || phone == 18623687070 || phone == 15178895606 || phone == 18716336156 || phone == 17382274900 || phone == 18883881583 || phone == 18203035505 || phone == 13629757748 || phone == 18323460296 || phone == 17782339427 || phone == 18223083743 || phone == 15123890448 || phone == 13996462534 || phone == 18983702976 || phone == 15902334490 || phone == 18523312326 || phone == 18523424565 || phone == 17502366622 || phone == 13512386979 || phone == 15111892214 || phone == 15086967639 || phone == 18080030360 || phone == 18875037271 || phone == 15825903045 || phone == 18983426699 || phone == 15178895637 || phone == 15178718519 || phone == 13212301508 || phone == 18983206775 || phone == 13708378747 || phone == 13527437673 || phone == 15696544090 || phone == 13983679207 || phone == 18680850314 || phone == 13628443150 || phone == 15520051212 || phone == 18083033854 || phone == 18323689017 || phone == 17723719148 || phone == 18716643768 || phone == 18163997805 || phone == 18680755846 || phone == 18758189692 || phone == 13193049102 || phone == 15102386227 || phone == 13658333908 || phone == 18511060171 || phone == 15884725161 || phone == 18983785666 || phone == 15178895706 || phone == 17383044559 || phone == 18911615265 || phone == 15023287465 || phone == 15023619546 || phone == 15213000797 || phone == 13060206366 || phone == 15923567360 || phone == 13629750957 || phone == 15223006370 || phone == 13883383780 || phone == 18325221027 || phone == 15683241524 || phone == 15213233878 || phone == 15922503436 || phone == 15202333886 || phone == 18875050024 || phone == 18623554432 || phone == 18696962611 || phone == 18883878354 || phone == 13983202576 || phone == 15922715247 || phone == 18702359036 || phone == 13983794126 || phone == 15736181298 || phone == 13271811685 || phone == 13399814947 || phone == 18523461029 || phone == 15923531223 || phone == 13627649417 || phone == 15696217989 || phone == 18323424402 || phone == 13657626530 || phone == 18612311928 || phone == 18716613162 || phone == 15123121322 || phone == 13527322428 || phone == 15923923221 || phone == 15178895769 || phone == 13677601861 || phone == 15178895808 || phone == 15096669147 || phone == 18602323254 || phone == 13527370430 || phone == 15213206323 || phone == 18323438087 || phone == 13512367498 || phone == 15102335753 || phone == 18223919963 || phone == 15681015392 || phone == 15178895639 || phone == 15922994010 || phone == 15909306347 || phone == 15696301517 || phone == 13648356668 || phone == 18716481194 || phone == 15215190358 || phone == 15178895609 || phone == 18642675330 || phone == 18983212408 || phone == 15923069885 || phone == 13512379141 || phone == 13996294761 || phone == 18623128612 || phone == 15223482975 || phone == 15730273123 || phone == 13167955682 || phone == 17783095371 || phone == 13638378097 || phone == 15213022115 || phone == 13752928353 || phone == 18523516931 || phone == 15213268679 || phone == 13883119591 || phone == 18996330317 || phone == 13452175628 || phone == 13452468859 || phone == 18302392501 || phone == 15178895611 || phone == 13628463703 || phone == 18623080726 || phone == 13594652626 || phone == 13436008282 || phone == 15922568741 || phone == 18523950124 || phone == 15823344617 || phone == 15182033380 || phone == 13996290266 || phone == 15340555016 || phone == 15923570778 || phone == 15523235959 || phone == 18908367849 || phone == 18883539553 || phone == 15178895529 || phone == 18602372712 || phone == 13527463539 || phone == 13647604075 || phone == 17723563480 || phone == 18580760331 || phone == 13896940687 || phone == 15213335620 || phone == 18623550525 || phone == 13883637493 || phone == 13667690112 || phone == 18055118025 || phone == 13996264247 || phone == 18623110159 || phone == 13996457186 || phone == 18723215941 || phone == 18580493191 || phone == 15025735423 || phone == 17623718670 || phone == 18523318915 || phone == 13098780546 || phone == 13372680433) {
        type = 0; // 2
        ticket = 2;
    } else {
        type = -1;
        ticket = 0;
    }
    return {
        type,
        ticket,
    };
}

module.exports = {
    doStart,
    isType,
}