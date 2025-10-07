$(document).ready(function () {
    $(".view").click(function () {
        $(".details").addClass("active");
    });

    $(".close").click(function () {
        $(".details").removeClass("active");
    });
});
