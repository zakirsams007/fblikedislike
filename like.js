var count=0;
    function like(){   
         count++;
        output();
             
        }
    function dislike(){
        if(count!=0){
            count--;
            output();
            }
        }
    function output(){ 
    document.getElementById("counter").innerHTML = count;
}