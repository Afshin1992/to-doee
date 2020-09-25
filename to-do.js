$(document).ready(function() {
    $('.btn-primary').click(function() {
        if ($('#text').val().length != 0) {
            var x = $('.task').html();
            var y =
                `<div class="alert alert-warning alert-dismissible fade in"> 
<a href="#" class="close" data-dismiss="alert" aria-label="close">×</a> 
                   ` + $('#text').val() + `</div>`;
            $('.task').html(y + x);
            $('#text').val("");
        } else alert("Enter some Text!");
    });

    $(document).on('click', '.alert', function() {
        if ($(this).css('text-decoration-line') == "none")
            $(this).css('text-decoration-line', 'line-through');
        else
            $(this).css('text-decoration-line', 'none');
    });
});