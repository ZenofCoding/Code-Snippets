.filter || .map

//return an array of ids using the map function
var ids = items.map(function(item) {
    return {
        id: item.id,
        price: item.price
    }
});

var cheapItems = items.filter(function(item) {
    return item.price <= 20;    
});

items.map(function(item) {
    return item.price
}).reduce(function(previous, current) {
    return previous + current;
});


