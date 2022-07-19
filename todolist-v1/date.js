exports.getDate = function(){
    let options = {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric"
    };
    let today = new Date();
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function(){
    let options = {
        weekday: "long"
    };
    let today = new Date();
    return today.toLocaleDateString("en-US", options);

}



