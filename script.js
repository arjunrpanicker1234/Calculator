function displayfunctn(val){
    document.getElementById('textfield').value= document.getElementById('textfield').value+val
}
function cleardisplay(){
    document.getElementById('textfield').value=''
}
function equals(){
    var text=document.getElementById('textfield').value
    var result=eval(text)
    document.getElementById('textfield').value=result
}