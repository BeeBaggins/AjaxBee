// JavaScript Document
function set_process(set_data , set_url , callback){
  $.ajax({
        type: "POST",
        url: set_url,
        data: new FormData( set_data ),
        processData: false,
        contentType: false,
        dataType:"json",
        cache: false, // Clear cache IE
        beforeSend: function(){
          $(".loader").show();
        },
        success: function(data){
          $(".loader").hide();
          callback(data);
        }
      });
}
function get_process(set_id , set_url , callback){
  $.ajax({
        type: "POST",
        url: set_url,
        data: set_id,
        dataType:"json",
        cache: false, // Clear cache IE
        beforeSend: function(){
          $(".loader").show();
        },
        success: function(data){
          $(".loader").hide();
          callback(data);
        }
      });
}
function set_html(set_id , set_url , element){
  $.ajax({
        type: "POST",
        url: set_url,
        data: set_id,
        cache: false, // Clear cache IE
        beforeSend: function(){
          $(".loader").show();
        },
        success: function(data){
          $(".loader").hide();
          $(element).html(data);
        }
      });
}
function set_html_call(set_id , set_url , element , callback){
  $.ajax({
        type: "POST",
        url: set_url,
        data: set_id,
        cache: false, // Clear cache IE
        beforeSend: function(){
          $(".loader").show();
        },
        success: function(data){
          $(".loader").hide();
          $(element).html(data);
          callback();
        }
      });
}