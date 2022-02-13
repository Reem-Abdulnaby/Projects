var form = document.getElementById("contactForm")

form.addEventListener("input", function(element){
     switch(element.target.id){
         case "username":
         nameValidation(element.target)
         break
         case "userEmail":
           emailValidation(element.target)
         break
          case "userPassword":
              passwordValidation(element.target)
              break
     }
})
 function nameValidation(input){
     var inputValue= input.value.trim()
     if(inputValue.length < 3) {
     handleError(input , " pleas enter at least 3 character")}
     else 
    { handleError(input)}

 }


 function emailValidation(input){
    var inputValue = input.value
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    console.log(regExp.test(inputValue))

    if(regExp.test(inputValue)) handleError(input)
    else handleError(input , " please enter a valid email")}

 function passwordValidation(input){
     var inputValue=input.value
     var regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
     console.log(regExp.test(inputValue))
     if(regExp.test(inputValue))
     handleError(input)
     else {

        handleError(input,"please enter complex password")
     }
 }

 function handleError(ele, msg=""){
     ele.nextElementSibling.innerText = msg
     
 }
 form.addEventListener("submit" , function(e){
    e.preventDefault()
    validateInput()
  

    

 })

function validateInput(){
  var  n=document.getElementById("username")
  var  m=document.getElementById("userEmail")
  var  p=document.getElementById("userPassword")

    
   
    if(n.value==""&& m.value==""&& p.value==""){
                handleError(n, "this fild required!")
                handleError(m, "this fild required!")
                handleError(p, "this fild required!")
                form.style="border :1px solid #ffea00"
    var p =document.createElement("p")
    p.innerText="One or more fields have an error. Please check and try again"
    form.append(p)
        return false
    }
        else if(n.value==""&& p.value==""){
            handleError(n, "this fild required!")
            handleError(p, "this fild required!")
            handleError(m)
            form.style="border :1px solid #ffea00"
            var p =document.createElement("p")
            p.innerText="One or more fields have an error. Please check and try again"
            form.append(p)

            return false}
           else if(n.value==""&& m.value==""){
                handleError(n, "this fild required!")
                handleError(m, "this fild required!")
                handleError(p)
                form.style="border :1px solid #ffea00"
    var p =document.createElement("p")
    p.innerText="One or more fields have an error. Please check and try again"
    form.append(p)
            return false}
            else if(m.value==""&& p.value==""){
                handleError(m, "this fild required!")
                handleError(p, "this fild required!")
                handleError(n)
                form.style="border :1px solid #ffea00"
    var p =document.createElement("p")
    p.innerText="One or more fields have an error. Please check and try again"
    form.append(p)
                return false}
                else if(p.value==""){
                    handleError(p, "this fild required!")
                    handleError(m)
                    handleError(n)
                    form.style="border :1px solid #ffea00"
    var p =document.createElement("p")
    p.innerText="One or more fields have an error. Please check and try again"
    form.append(p)
                    return false
                }
                else if(n.value==""){
                    handleError(n, "this fild required!")
                    handleError(p)
                    handleError(m)
                    form.style="border :1px solid #ffea00"
    var p =document.createElement("p")
    p.innerText="One or more fields have an error. Please check and try again"
    form.append(p)
                    return false
                }
                else if(m.value==""){
                    handleError(m, "this fild required!")
                    handleError(p)
                    handleError(n)
                    form.style="border :1px solid #ffea00"
    var p =document.createElement("p")
    p.innerText="One or more fields have an error. Please check and try again"
    form.append(p)
                    return false
                }
                else{
                handleError(m)
                handleError(n)
                handleError(p)

          return true}
        
    
}
var topBtn=document.getElementById("topBtn")

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>250)
    topBtn.style="display:block"
    else{
        topBtn.style="display:none"
    }
})
if(document.documentElement.scrollTop==0)
    topBtn.style="display:none"