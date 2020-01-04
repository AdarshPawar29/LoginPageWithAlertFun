function myFunction()
{
    var fname = document.getElementById("FN").value;
    var lname = document.getElementById("LN").value;
    console.log(document.getElementsByName("LN").value);
    //document.getElementsByName("formID").submit();
    alert(fname +" "+ lname);
}