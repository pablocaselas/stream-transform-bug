//Common libraries
exports.ChannelStream={
    Readable: require("./readers/ChannelStreamReader"),
    Writable:require("./writers/ChannelStreamWriter"),
    MultiReadable: require("./readers/MultiChannelStreamReader")
};
exports.transformers=require("./filters/transformers");
exports.SubsamplingFilter=require("./filters/SubsamplingFilter")
exports.Router=require("./filters/StreamRouter")
exports.Devnull=require("./writers/DevNullSink")
exports.Filter=require("./filters/FilterFactory")
exports.DeadLetter=require("./writers/DeadLetterSink")
exports.mongoStream={
    Readable: require("./readers/MongoStreamReader"),
    Writable: require("./writers/MongoStreamWriter")
}
exports.StreamReader=require("./readers/StreamReaderFactory")
exports.LoggerStreamWriter=require("./writers/LoggerStreamWriter")
