const notifContainer = document.querySelector(".notifContainer");
const btn = document.querySelector(".btn");

const notificationInner = [
  "İnstagram Bildirimi",
  "Twitter Bildirimi",
  "Medium Bildirimi",
  "LinkedIn Bildirimi",
  "GitHub Bildirimi",
  "YouTube Bildirimi",
];

const colors = ["red", "blue", "gray", "yellow", "black", "orange"];

btn.addEventListener("click", () => getNotification());

function getNotification() {
  const notif = document.createElement("div");
  notif.classList.add("notif");
  notif.classList.add(bgColors());
  notif.innerHTML = notifInnerText();
  notifContainer.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function bgColors() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function notifInnerText() {
  return notificationInner[
    Math.floor(Math.random() * notificationInner.length)
  ];
}
