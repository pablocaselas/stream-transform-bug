var readerFactory=require("../lib/streams/readers/StreamReaderFactory")
var filterFactory=require("../lib/streams/filters/FilterFactory")
var devnull=require("../lib/streams/writers/DevNullSink")

var reader=new readerFactory(function(){return {a:1}});
var filt1=new filterFactory(function(data){return data});
var filt2=new filterFactory(function(data){return data});
var filt3=new filterFactory(function(data){return data});
filt1._flush=function(done){console.log("FLUSH filt1");done()}
filt2._flush=function(done){console.log("FLUSH filt2");done()}
filt3._flush=function(done){console.log("FLUSH filt3");done()}
reader.pipe(filt1).pipe(filt2).pipe(filt3).pipe(new devnull());

setTimeout(function(){reader.destroy()}, 1000);
