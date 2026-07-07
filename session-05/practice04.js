// CALLBACKS
function process(data, callback) {
    console.log("Processing:", data);
    const result = data * 2;
    callback(result);
}

process(5, function (result) {
    console.log("Result:", result);
});
