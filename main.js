// var numberNotChecked = $('input:checkbox:not(":checked")').length;
// console.log(numberNotChecked);

$('input:checkbox:not(":checked")').change(function () {
    var numberNotChecked = $('input:checkbox:not(":checked")').length;
    console.log(20 - numberNotChecked);

    let final = (20 - numberNotChecked)

    $('#count-checked-checkboxes').text(final);

    if (final > 5) {
        $(".count-check").addClass('text-red-500');
    } else {
        $(".count-check").removeClass('text-red-500');
    }


});

