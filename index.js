function getAge(dateString) {
    var today = new Date();
   var birthDate = new Date(dateString);
   var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
 }
return age;
}
document.getElementById('batuhanAge').innerText = getAge('1996/09/12').toString();