function copyToClipboard() {
  var textarea = document.getElementById("text");
  textarea.select();
  document.execCommand("copy");

  const alert = document.getElementById("alert");
  alert.classList.remove("hidden");

  setTimeout(function () {
    alert.classList.add("hidden");
  }, 3000);
}

function convertToUppercase() {
  var textarea = document.getElementById("text");
  textarea.value = textarea.value.toUpperCase();
}

function convertToLowercase() {
  var textarea = document.getElementById("text");
  textarea.value = textarea.value.toLowerCase();
}

function convertToProperCase() {
  var textarea = document.getElementById("text");
  var words = textarea.value.split(" ");

  for (var i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      // Skip empty words
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }

  textarea.value = words.join(" ");
}

function convertToSentenceCase() {
  var textarea = document.getElementById("text");
  var sentences = textarea.value.split(/(?<=[.!?])\s+/);

  for (var i = 0; i < sentences.length; i++) {
    if (sentences[i] !== "") {
      // Skip empty sentences
      sentences[i] =
        sentences[i][0].toUpperCase() + sentences[i].slice(1).toLowerCase();
    }
  }

  textarea.value = sentences.join(" ");
}
