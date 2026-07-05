//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory"];

const buttons = document.getElementById("buttons");

sounds.forEach(sound => {
    const audio = new Audio(`sounds/${sound}.mp3`);

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSounds();
        audio.play();
    });

    buttons.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", stopSounds);

buttons.appendChild(stopBtn);

function stopSounds() {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}