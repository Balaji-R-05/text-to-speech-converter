const speech = new SpeechSynthesisUtterance();
let voices = [];

const voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    
    speech.voice = voices[0];

    voiceSelect.innerHTML = "";
    voices.forEach((voice, i) => {
        const option = new Option(voice.name + " (" + voice.lang + ")", i);
        voiceSelect.add(option);
    });
};

voiceSelect.addEventListener("change", () => {
    const selectedVoice = voices[voiceSelect.value];
    speech.voice = selectedVoice;
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
