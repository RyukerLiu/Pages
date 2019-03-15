var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/i_want_all.jpg') {
      myImage.setAttribute ('src','images/i_want_all_2.jpg');
    } else {
      myImage.setAttribute ('src','images/i_want_all.jpg');
    }
}

var myButton = document.querySelector('button');

myButton.onclick = function() {
  alert('很調皮喔!')
}

function welcome() {
  var Name = prompt('嗨~ 你好，你叫甚麼名字啊?');
    prompt(Name + ' 你有聽過安麗嗎?');
    alert('先別說這個了，想當年我也是個冒險者，直到我膝蓋種了一箭，只好留在這裡看管網頁，唉...不說了，' + Name + '隨意逛逛吧~');
}

welcome();
