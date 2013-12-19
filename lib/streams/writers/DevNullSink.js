var util=require("util"),
    stream=require("stream");

util.inherits(DevNullSink, stream.Writable);

function DevNullSink(opt) {
    this.opt=opt||{};
    if(!this.opt.objectMode) this.opt.objectMode=true;
    stream.Writable.call(this, this.opt);
}

DevNullSink.prototype._write = function(data, encoding, callback) {
    return  callback();
};
module.exports=DevNullSink;