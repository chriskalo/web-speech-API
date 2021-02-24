const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
var hasSpoken = false;

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

const speech = new SpeechSynthesisUtterance();
speech.text = "Welcome, for instructions, click anyware on the screen and say instructions. If you know the instructions then you know what to do.";
window.speechSynthesis.speak(speech);



recognition.onstart = function () {
  console.log("voice is activated, you can speak");
};


recognition.onresult = function (event) {
  hasSpoken = true;
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  clearBox("sound");
  content.textContent = transcript;
};

btn.addEventListener ('click', () => {
  clearBox("sound");
  clearBox("cont");
  playclip();
  recognition.start();
  document.getElementById("sound").innerHTML +=  '<img src="sound.gif" style="width:250px;height:250p;">';
});

recognition.addEventListener('end', function() {
  playclip();
  if (hasSpoken == false) {
    clearBox("sound");
  }
  hasSpoken = false;
});

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function playclip() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "soundEffect.mp3";
 }
}

else {
{
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}
}
