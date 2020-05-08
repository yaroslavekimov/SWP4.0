    $("#wdh_form").submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/wdh_send_form.php",
            data: $("#wdh_form").serialize(),
            success: function(data){
                $('#wdh_result_form').html(data);
            }
        });
    });