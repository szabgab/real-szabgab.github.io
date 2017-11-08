$().ready(function(){
    $.getJSON( "/data.json", function( data ) {
    console.log(data);
    $("#text").html("hello");
  });
});
