// Here, we are ask the user to give us his permission in order to use the app
navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
        console.log('You let me use your mic!')
        greetings();
      })
      .catch(function(err) {
        console.log('No mic for you!')
      });


const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
var hasSpoken = false;

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'el-Greek';

const speech = new SpeechSynthesisUtterance();




recognition.onstart = function () {
  console.log("voice is activated, you can speak");
};


recognition.onresult = function (event) {
  hasSpoken = true;
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  clearBox("sound");
  
  if (transcript == "Μουστάκας" || transcript == "μουστάκας") {
        
        ask(transcript);
        
        
  } else {
        
     content.textContent = transcript;   
  }
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
    document.getElementById("sound").innerHTML = "";
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

function greetings(){
//       speech.text = "Welcome, for instructions, click anyware on the screen and say instructions. If you know the instructions then you know what to do.";
//       window.speechSynthesis.speak(speech);
      responsiveVoice.speak("Καλησπέρα και καλή βραδιά", "Greek Female");
}

function ask(words) {
      
      responsiveVoice.speak(words, "Greek Female");
}

speech.addEventListener('end', function(event) {
    document.getElementById("sound").innerHTML +=  'test';

});
      
