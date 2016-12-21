function CodeFight(n) {

    var c =[];
    for(var i=1;i<=n;i++){
        if(i%35 == 0) c.push("CodeFight");
       else  if(i%5 == 0) c.push("Code");
        else if(i%7 == 0) c.push("Fight");
        else c.push("" + i);
         }
    return c;
}
