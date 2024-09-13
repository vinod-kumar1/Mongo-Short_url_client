let shortUrl = document.getElementById("shortURL");
let shortUrlDiv = document.getElementById("divver");
let loader = document.getElementById("loader").style.display;

function sendUrl() {
  document.getElementById("loader").style.display = "block";
  let url = document.getElementById("url").value;
  fetch(
    `https://server-auth-twgx-23c9y5orx-vinodakumara-as-projects.vercel.app/geturl`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: url,
      }),
    }
  )
    .then((res) => {
      document.getElementById("loader").style.display = "none";
      return res.json();
    })
    .then((data) => {
      shortUrl.innerText = `https://server-auth-twgx-23c9y5orx-vinodakumara-as-projects.vercel.app/${data.hash}`;
      shortUrlDiv.style.display = "block";
    });
}

let copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", (event) => {
  event.preventDefault();
  navigator.clipboard.writeText(shortUrl.innerText);
  copyButton.innerHTML = "Copied";
  setTimeout(() => {
    copyButton.innerHTML = "Click to copy";
  }, 1000);
});
