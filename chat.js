async function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  messages.innerHTML += `<div class="user">Du: ${input.value}</div>`;

  const response = await fetch("HIER_BACKEND_URL/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input.value })
  });

  const data = await response.json();
  messages.innerHTML += `<div class="bot">Bot: ${data.reply}</div>`;

  input.value = "";
}
