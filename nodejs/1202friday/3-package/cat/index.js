/**
 * Created by willwang on 2016/12/2.
 */
var head = require('./head');
var body = require('./body');

exports.create = function(name) {
    return {
        name: name,
        head: head.create(),
        body: body.create()
    }
}