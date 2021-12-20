function onSubmit()
{
    var name=document.getElementById('name').value;
    var mail=document.getElementById('mail').value;
    console.log(name,mail);

}

var input =document.createElement("input");
input.type ="text";
input.id="mail";

var parent = document.getElementById('email');
parent.appendChild(input);