$("input[name='search']").on("keyup", function() {
   var searchInput = this.value;

   $(".gallery li").each(function(i) {
      var caption = $(this).children().attr("data-title");
      var pureCaption = $(caption).text();

      if (pureCaption.indexOf(searchInput) > -1) {
         $(this).css('display', 'initial');
      } else {
         $(this).css('display', 'none');
      }
   });
});
