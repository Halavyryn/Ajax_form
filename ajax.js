/*Submit ajax form on button click*/
$( document ).ready(function() {
    $("#btn").click(
        function(){
            sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //server page url(action_ajax_form.php)
        type:     "POST", //sending method
        dataType: "html", //data format
        data: $("#"+ajax_form).serialize(),  // Serialize the object
        success: function(response) { //Data sent successfully
            result = $.parseJSON(response);
            $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
        },
        error: function(response) { // Data not sent
            $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    });
}