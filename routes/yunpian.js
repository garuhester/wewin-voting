var https = require('https');
var qs = require('querystring');

var apikey = 'fcb492c004a75b530a6a9433e4035fe8';
var sms_host = 'sms.yunpian.com';
// 指定发送的模板编号
var tpl_id = 2175270;
// 查询账户信息https地址
var get_user_info_uri = '/v2/user/get.json';
var postResult = "";

var getCode = function (req, res) {
    // 修改为您要发送的手机号码，多个号码用逗号隔开
    var mobile = req.body.phone;
    // 指定发送模板的内容
    var random_code = Math.floor(Math.random() * 9000) + 1000;
    var tpl_value = { '#code#': random_code };

    // 指定模板发送接口https地址
    send_tpl_sms_uri = '/v2/sms/tpl_single_send.json';
    // query_user_info(get_user_info_uri,apikey);
    send_tpl_sms(send_tpl_sms_uri, apikey, mobile, tpl_id, tpl_value);
    res.json({ result: random_code, postResult, });
}

function query_user_info(uri, apikey) {
    var post_data = {
        'apikey': apikey,
    };//这是需要提交的数据
    var content = qs.stringify(post_data);
    post(uri, content, sms_host);
}
function send_tpl_sms(uri, apikey, mobile, tpl_id, tpl_value) {
    var post_data = {
        'apikey': apikey,
        'mobile': mobile,
        'tpl_id': tpl_id,
        'tpl_value': qs.stringify(tpl_value),
    };//这是需要提交的数据  
    var content = qs.stringify(post_data);
    post(uri, content, sms_host);
}
function post(uri, content, host) {
    var options = {
        hostname: host,
        port: 443,
        path: uri,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    };
    var req = https.request(options, function (res) {
        // console.log('STATUS: ' + res.statusCode);  
        // console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            postResult = chunk.msg;
            console.log('BODY: ' + chunk);
        });
    });
    //console.log(content);
    req.write(content);

    req.end();
}

module.exports = {
    getCode,
}