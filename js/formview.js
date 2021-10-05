$(document).ready(function(){
    Load_Data_File_XML();
})

function Load_Data_File_XML(){
    $.ajax({
        type: "GET",
        url: "xml/vttech.xml",
        dataType: "xml",
        success: function (xml) {
            console.log(xml)
            let html = xml.getElementsByTagName("html")[1].childNodes[0].nodeValue;
            console.log(html)
            $("#FORMVIEW").html('<div class="item-box">' + html+ "</div>")
        },
        error: function () {
            console.error("error");
        }
    });
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         myFunction(this);
    //     }
    // };
    // xhttp.open("GET", "xml/vttech.xml", true);
    // xhttp.send();

    // function myFunction(xml) {
    //     var xmlDoc = xml.responseXML;
    //     console.log(xmlDoc)
    //     let string= "";
    //     var x = xmlDoc.getElementsByTagName("html")[0].childNodes[0];
    //     x.forEach(element => {
    //         string += `<div class="item-box">${ element.childNodes[0].nodeValue }</div>`
    //     });
    //     document.getElementById("FORMVIEW").innerHTML = string;
    // }
}