(function () {
  "use strict";

  // ---- Configuração central do WhatsApp -----------------------------
  // Número informado pela cliente: +55 66 99027509
  var WHATSAPP_NUMBER = "556699027509";

  // Preenche todos os links marcados com data-whatsapp usando o número
  // acima e a mensagem específica de cada botão (data-wa-text).
  var links = document.querySelectorAll("[data-whatsapp]");
  links.forEach(function (link) {
    var text = link.getAttribute("data-wa-text") || "Olá! Vim pelo site da Glowvy.";
    link.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  });

  // ---- Ano corrente no rodapé ----------------------------------------
  var yearEl = document.getElementById("ano");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();