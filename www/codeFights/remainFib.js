function remainFib(N) {
    var f1 = 3;
    var f2 = 5;
    var fn;
    var f = false;
    var n = 0;
    var d = 0;
    var l = parseInt(N);
    while(!f){
        d = f2-f1-1;
        if(d> 0 && n+d<l){
            n=n+d;
            fn = f1 + f2;
            f1 = f2;
            f2 = fn;
            console.log(n);
        }
        if(d > 0 && n+d >= l){
            f1 = f1 + (l -n);
            f = true;
            console.log(f1);
        }

    }
    return f1.toString();
}
