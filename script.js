$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        var nomeTarefa = $('#task-input').val();
        if(nomeTarefa !== '') {
            $('#task-list').append('<li>' + nomeTarefa + '</li>');
            $('task-input').val('');
        }

    });

    $(document).on('click', '#task-list li', function(){
        $(this).toggleClass('completed');
    });
});