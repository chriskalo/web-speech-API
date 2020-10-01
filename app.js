const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is activated, you can speak");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  clearBox("sound");
  content.textContent = transcript;
};

btn.addEventListener ('click', () => {
  clearBox("cont");
  recognition.start();
  document.getElementById("sound").innerHTML +=  '<img src="sound.gif" style="width:250px;height:250p;">';
});

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
