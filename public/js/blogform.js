$(document).ready(function(){

  $(document).ready(function() {
    $('#topic').on('blur', function() {
        if( $('#topic').val().length < 20){
            $('#blog-title-warning').show();
            $('#blog-title-warning').text("Topic should contain atleast 20 charactrs.");
        }else{
            $('#blog-title-warning').hide();
        }
    });

    $('#blog-text').on('blur', function() {
        if( $('#blog-text').val().length < 200){
            $('#blog-text-warning').show();
            $('#blog-text-warning').text("Topic should contain atleast 200 charactrs.");
        }else{
            $('#blog-text-warning').hide();
        }
    });
  });

  $('#blog-form-submit').click(function(){
    var ext = $('#blog-image-warning').val().split('.').pop().toLowerCase();
    if( $('#topic').val().length < 20){
          $('#blog-title-warning').show();
          $('#blog-title-warning').text("Topic should contain atleast 20 charactrs.");
    }else if ($('#blog-text').val().length < 200) {
          $('#blog-text-warning').show();
          $('#blog-text-warning').text("Topic should contain atleast 200 charactrs.");
    }else if ($('#pic').get(0).files.length === 0) {
          $('#blog-image-warning').show();
          $('#blog-image-warning').text("No Image selected");
    }else if($.inArray(ext, ['png','jpg','jpeg']) == -1) {
          $('#blog-image-warning').show();
          $('#blog-image-warning').text("only images can be uploaded of type png, jpg, jpeg");
    }else{
          $('#blog-title-warning').hide();
          $('#blog-image-warning').hide();
          $('#blog-text-warning').hide();
      }
  });
  
  // $('#submitButton').click(function(){

  //       if( !$('#username').val() ) { //if it is blank. 
  //         $('#authentication-warning').show();
  //         $('#authentication-warning').text("Username can't be empty");   
  //       }else if(!$('#password').val()){
  //         $('#authentication-warning').show();
  //         $('#authentication-warning').text("password can't be empty");
  //       }else{
  //           $('#authentication-warning').hide();
            
  //           $.ajax({
  //               type: 'POST',
  //               data: 'username=' + $('#username').val() + '&password=' + $('#password').val(),
  //               contentType: "application/json",
  //               dataType:'json',
  //               async:false,
  //               url: 'http://localhost:8080/dashboard.html',                      
  //               success: function(response) {
  //                   alert(response);
  //                   // console.log(response);
  //                   // console.log(JSON.stringify(data));                               
  //               },
  //               error: function(error) {
  //                   console.log("some error in fetching the notifications");
  //                }
  //           });
  //       }
  // });
});