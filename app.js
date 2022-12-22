var g = G$('Jackson', 'Froome');
$('#login').on('click', function () {
  $('#loginDiv').hide();
  g.setLang($('#lang').val()).setHTMLText('#greeting',true).log();
})
