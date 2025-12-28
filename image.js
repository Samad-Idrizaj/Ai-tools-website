async function generateImage() {
  const prompt = document.getElementById("prompt").value;
  const img = document.getElementById("result");

  const res = await fetch("HIER_BACKEND_URL/image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  img.src = data.url;
}
