window.onload = function() {
   
 var value3= document.getElementById("testforlist").getElementsByTagName("li");
    

QUnit.test( "First Unit Test", function( assert ) {

  
  

  assert.equal(value3[0].innerHTML.trim(),"hi","passed!");
  assert.equal(value3[1].innerHTML.trim(),"hello","passed!");
  assert.equal(value3[2].innerHTML.trim(),"how","passed!");
 

  assert.ok(isTermsAvailable(),"Terms And Conditions Avalailable");

 

  //console.log(elems);

});

function isTermsAvailable(){
 
    var TermsAndCondition = document.getElementById("terms");

    if(TermsAndCondition){
        return true;
    }

    return false;

}


}
