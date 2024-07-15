$(() => {
  $('.header-include').load("./header.html", () => {
    $('header h1').click(() => {
      reload();
    });
  });

  $('.footer-include').load("./footer.html");
});

