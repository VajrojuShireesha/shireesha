var users=10;
var sum=0;
for(var i=1; i<= users; i++) {
    if(i%2 == 0){
        document.write(i+"<br>")
        sum = sum+i;
    }
}

document.write("total of even numbers = "+sum);
