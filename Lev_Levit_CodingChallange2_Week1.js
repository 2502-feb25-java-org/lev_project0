let challenge = {};

challenge.fibbonaci = function(n){
    if (n==1 || n==2)
        return 1;
    else
        return this.fibbonaci(n-1) + this.fibbonaci(n-2);
}
