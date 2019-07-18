var urls = ['/v1', '/v1', '/v1', '/v1', '/v1', '/v1']
const resolvePromise = (url) => {
    while (urls.length) {
        fetch(url[0]).then(resolvePromise());
        urls.shift();
    }
}


var resolvedPromise = Promise.resolve();

for (var i = 0; i < urls.length; i++ ){
    resolvePromise = resolvePromise.then( _ => fetch(urls[i]));
}
resolvePromise.then(val => {
    console.log(val);
})