
var body = document.body;
var mainDiv = document.getElementById('main');

var contentDiv = document.createElement('div');

contentDiv.setAttribute('id', 'content');

mainDiv.appendChild(contentDiv);

var contentPost1Div = document.createElement('div');

contentPost1Div.setAttribute('class', 'content-post');

contentDiv.appendChild(contentPost1Div);

var h1 = document.createElement('h1');

var h1Text = document.createTextNode('Judul Post 1');

h1.appendChild(h1Text);

contentPost1Div.appendChild(h1);

var span1 = document.createElement('span');

var span1Text = document.createTextNode('Published on 12 May 2016');

span1.appendChild(span1Text);

contentPost1Div.appendChild(span1);

var p1 = document.createElement('p');

var p1Text = document.createTextNode('Lorem Ipsum Dolor Sit Amet');

p1.appendChild(p1Text);

contentPost1Div.appendChild(p1);

var btn1 = document.createElement('button');

var btn1Text = document.createTextNode('Share this post!');

btn1.setAttribute('class', 'share-post-btn');

btn1.appendChild(btn1Text);

contentPost1Div.appendChild(btn1);

var contentPost2Div = document.createElement('div');

contentPost2Div.setAttribute('class', 'content-post');

contentDiv.appendChild(contentPost2Div);

var h2 = document.createElement('h1');

var h2Text = document.createTextNode('Judul Post 2');

h2.appendChild(h2Text);

contentPost2Div.appendChild(h2);

var span2 = document.createElement('span');

var span2Text = document.createTextNode('Published on 13 May 2016');

span2.appendChild(span2Text);

contentPost2Div.appendChild(span2);

var p2 = document.createElement('p');

var p2Text = document.createTextNode('Lorem Ipsum Dolor Sit Amet');

p2.appendChild(p2Text);

contentPost2Div.appendChild(p2);

var btn2 = document.createElement('button');

var btn2Text = document.createTextNode('Share this post!');

btn2.setAttribute('class', 'share-post-btn');

btn2.appendChild(btn2Text);

contentPost2Div.appendChild(btn2);

var share = document.getElementsByClassName('share-post-btn');

for (var i = 0; i < share.length; i++) {

    share[i].addEventListener('click', function() {

  alert('You have shared this post!');

});

}
