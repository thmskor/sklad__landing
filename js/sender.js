$(document).ready(function(){

    $(".section-feedback__form").submit(function(e){
        e.preventDefault();
    
        $.ajax({
            url: 'send-mail.php',
            type: 'POST',
            cache: false,
            data: $(this).serialize(),
            success: function(data) {
                var jsonData = JSON.parse(data);

                if (jsonData.success == "1")
                {
                   $(".section-feedback").addClass("hide");
                   $(".section-feedback__sended").addClass("show");
                }
                else
                {
                    alert('Invalid Credentials!');
                }

            },
        });
    
    });
    

});

