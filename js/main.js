$(document).ready(function () {
    Event_Click_Nav_Icon();
    Event_Click_Out_Main();
    Event_Click_Link_Redirect();
    //Event_Click_Link_Redirect_First_Link();
})


////#region // Event Click Show Hide Menu
function Event_Click_Nav_Icon() {
    let navicon = $("#header_navicon");
    navicon.on("click", function () {
        $("#menu_list").toggleClass("wrap");
        $("#menu,#main").toggleClass("wrap")
    })
}
////#endregion


////#region // Event Click Out 
function Event_Click_Out_Main() {
    $(document).on("mousedown", function (e) {
        if ($(window).width() < 800) {
            let menu = $("#menu")
            let navicon = $("#header_navicon");
            if ((!menu.is(e.target) && menu.has(e.target).length === 0)
                && (!navicon.is(e.target) && navicon.has(e.target).length === 0)) {
                $("#menu,#main").removeClass("wrap");
            }
        }
    })
}
////#endregion

////#region // Event Click Out 
function Event_Click_Link_Redirect() {
    $("#menu_list").on("click", '.menu_item', function (e) {
        let link = $(this).attr("data-href");
        if (link != "") {
            $("#box-loading").show();
            setTimeout(function () {
                $("#main_section").load(link, function () {
                    $("#box-loading").hide();
                });
            }, 2000)
        }
    });
}
function Event_Click_Link_Redirect_First_Link() {
    $("#menu_list .menu_item:nth-child(2)").click();
}
////#endregion