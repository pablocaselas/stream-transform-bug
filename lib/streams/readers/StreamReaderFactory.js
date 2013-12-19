var util=require("util"),
    stream=require("stream");
util.inherits(StreamReaderFactory, stream.Readable);

function StreamReaderFactory(generator) {
    this.generator=generator;
    stream.Readable.call(this, {objectMode: true});
}

StreamReaderFactory.prototype._read = function(n) {
    var self=this;
    setImmediate(
        function(){self.push(self.generator())}
    );
};
StreamReaderFactory.prototype.destroy=function(){
    this.emit("end");
}

module.exports=StreamReaderFactory;
