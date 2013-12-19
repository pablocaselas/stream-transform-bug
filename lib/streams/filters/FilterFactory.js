var util=require("util"),
    stream=require("readable-stream"),
    _=require("underscore");
util.inherits(Filter, stream.Transform);
/**
 *  Creates a filter from a filtering function. Can be either boolean (data passes or not)
 *  or transforming function, depending on the return value: if it is boolean, it is a boolean filter,
 *  if it returns an object, that object is passed through. If the return type is falsy, no data is passed through
 */
function Filter(opts, filter){
    if(typeof opts =="function"){
        filter=opts;
        opts={};
    }
    this.opts=opts||{};
    this.filter=filter;
    if(!this.opts.objectMode)
        this.opts.objectMode=true;
    stream.Transform.call(this, this.opts);
}
Filter.prototype._transform=function(data, encoding, done){

    var filtered=this.filter(data);

    if(!filtered) return done();
    if(typeof filtered == "boolean"){
        if(filtered) this.push(data);
        return done();
    } else {
        this.push(filtered);
        return done();
    }
}
//Filter.prototype._flush=function(){}

module.exports=Filter;











