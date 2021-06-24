student_array=[];
function submit (){
    var name_1 = document.getElementById("student1").value;
    var name_2 = document.getElementById("student2").value;
    var name_3 = document.getElementById("student3").value;
    var name_4 = document.getElementById("student4").value;
    var name_5 = document.getElementById("student5").value;
    student_array.push (name_1);
    student_array.push (name_2);
    student_array.push (name_3);
    student_array.push (name_4);
    student_array.push (name_5);
    document.getElementById("displaynames").innerHTML=student_array;
    document.getElementById("meme").style.display="none";
    document.getElementById("bruh").style.display="inline-block";
}
function sorting (){
    student_array.sort();
    document.getElementById("displaynames").innerHTML=student_array;
}