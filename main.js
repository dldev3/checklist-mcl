// var numberNotChecked = $('input:checkbox:not(":checked")').length;
// console.log(numberNotChecked);



const desktop = () => {
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
}

desktop();


const mobile = () => {
    $('input:checkbox:not(":checked")').change(function () {
        var numberNotChecked = $('input:checkbox:not(":checked")').length;
        console.log(20 - numberNotChecked);

        let final = (20 - numberNotChecked)

        $('#count-checked-checkboxes-mobile').text(final);

        if (final > 5) {
            $(".float").addClass('bg-red-500');
        } else {
            $(".float").removeClass('bg-red-500');
        }
    });
}

mobile();


var height = $(window).height();
var width = $(window).width(); //768

if (width > 768) {
    let remDom = document.getElementById("checklist-mobile");
    remDom.remove();
} else {
    let remDom = document.getElementById("checklist");
    remDom.remove();
}

//refresh screen web resizing
// $(window).resize(function () {
//     location.reload(true)
// });







// function showFunction() {
//     if (document.body.scrollTop < 200) {
//         document.getElementById("float").style.display = "none";
//     } else {
//         document.getElementById("float").style.display = "block";
//     }
// }

// window.addEventListener("scroll", function () { showFunction() });




















