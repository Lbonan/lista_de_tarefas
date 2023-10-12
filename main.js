$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();

    const nomeDaTarefa = $("#nome-tarefa").val();
    const novaLinha = $(`<li>${nomeDaTarefa}</li>`);
    $(novaLinha).appendTo("ul");

    $("#nome-tarefa").val("");
  });

  $("ul").on("click", "li", function () {
    $(this).toggleClass("concluido");
  });
});
