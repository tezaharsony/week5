var pageTitleElement = document.getElementById("fill-me");
pageTitleElement.innerHTML = '<h1>HALO!</h1>'

var pageParagrafElement = document.getElementsByClassName('change-all-of-me');
for (var i = 0; i < pageParagrafElement.length; i++) {
  pageParagrafElement[i].innerHTML = 'halo juga'
}

var pageFooterElement = document.getElementsByTagName('h2')
console.log(pageFooterElement);
pageFooterElement[0].innerHTML = 'Apa Kabar!'
