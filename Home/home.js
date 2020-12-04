$('.ui.toggle input').click(function () {
    if ($(this).is(':checked')) {
        console.log("dark mode");
    }
}); 

$('.context.example .ui.sidebar')
  .sidebar({
    context: $('.context.example .bottom.segment')
  })
  .sidebar('attach events', '.context.example .menu .item')
;