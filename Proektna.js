let isLiked = false;

function toggleLike() {
    isLiked = !isLiked;
    const likeButton = document.querySelector('.like-button');
    likeButton.classList.toggle('liked', isLiked);
}


window.onload=function(){
var profilna=document.getElementById("profilnakopce");
var close=document.getElementById("closebtn");
var najava=document.getElementById("najava");
var najavakopce=document.getElementById("login");
var ime=document.getElementById("username");
var lozinka=document.getElementById("password");
var profil=document.getElementById("div3");
var warning=document.getElementById("namewarning");
var warning1=document.getElementById("passwarning");
var odjava=document.getElementById("odjavise");
var odjava1=document.getElementById("odjaviDIV");
odjava1.style.visibility='hidden';
najavakopce.onclick=login;

odjava.onclick=function(){
    profilna.disabled=false;
    profil.textContent='Профил';
    odjava1.style.visibility='hidden';
}
close.onclick=closeNav;
profilna.onclick=openNav;
function proverka()
{
    return /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$)/.test(lozinka.value);
}
function login()
{
    
    if(!ime.value==""&&!/\s/.test(ime.value)&&proverka())
{
    profil.textContent=ime.value;
    
    warning1.style.color="transparent";
    warning.style.color="transparent";
    closeNav();
    profilna.disabled=true;
    odjava1.style.visibility='visible';
}
else if(!proverka()){
    warning1.style.color="red";
}
if(ime.value==""||/\s/.test(ime.value))
{
    warning.style.color="red";
}
}
function openNav()
{
    najava.style.width="250px";
    najava.style.backgroundColor="white";
    document.getElementById("main").style.marginRight = "250px";
  
}
function closeNav()
{
    
    najava.style.width="0px";
    najava.style.backgroundColor="transparent";
    document.getElementById("main").style.marginRight = "0px";
    document.getElementById("main").style.backgroundColor = "white";
}
var ovojMesec = new Date().toISOString().slice(0, 7);

    document.getElementById('expiry-date').setAttribute('min', ovojMesec);
document.getElementById('payment-button').onclick=proceedToPayment;
function proceedToPayment() {
    var quantity = document.getElementById('quantity').value;
    var cena = document.getElementById('cena').innerText.trim();
    cena = cena.replace('ден', '').trim();
    var totalPrice = parseFloat(quantity) * parseFloat(cena);

    document.getElementById('paymentArea').innerHTML = '<p>Вкупна Цена: ' + totalPrice.toFixed(2) + ' ден</p>';
}

}
// JavaScript code for comments
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-comment').addEventListener('click', function () {
        // Get comment text
        var commentText = document.getElementById('comment-text').value.trim();

        // Get user name from class "ime" or set it to "Anonymous"
        var userName = document.querySelector('.ime').textContent.trim();
        userName = (userName !== "Профил") ? userName : "Anonymous";

        // Check if comment text is not empty
        if (commentText !== "") {
            // Add the new comment to the comment section
            displayComment(userName, commentText);

            // Clear the comment text area
            document.getElementById('comment-text').value = "";
        }
    });

    // Add event delegation for the delete button
    document.querySelector('.comment-section').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-comment')) {
            // Remove the comment element
            var commentElement = event.target.closest('.comment');
            commentElement.remove();
        }
    });
});

function displayComment(author, text) {
    var commentElement = document.createElement('div');
    commentElement.className = 'comment';

    var authorElement = document.createElement('div');
    authorElement.className = 'comment-author';
    authorElement.textContent = author + ':';

    var textElement = document.createElement('div');
    textElement.className = 'comment-text';
    textElement.textContent = text;

    // Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-comment';
    deleteButton.textContent = 'X';

    commentElement.appendChild(authorElement);
    commentElement.appendChild(textElement);
    commentElement.appendChild(deleteButton);

    document.querySelector('.comment-section').appendChild(commentElement);
}