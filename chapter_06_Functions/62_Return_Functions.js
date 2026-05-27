function getstatus(codes) {
    if (codes >= 200 && codes <= 300) return 'success';
    if (codes >= 400 && codes <= 500) return 'Client error';
    if (codes > 500) return 'server error';
}
console.log(getstatus(404));

//To return multiple values , but for that we need to use array or objects

function aaa() {
    return [1, 2, 3, 4];
}
console.log(aaa()); //this will retrun multiple value