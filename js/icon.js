var data_Icon_List = [
    {
        "ClassName": "icon icon-ACCOUNT1",
        "Name": "iconACCOUNT1"
    },
    {
        "ClassName": "icon icon-appoment1",
        "Name": "iconappoment1"
    },
    {
        "ClassName": "icon icon-chamsoc1",
        "Name": "iconchamsoc1"
    },
    {
        "ClassName": "icon icon-cus1",
        "Name": "iconcus1"
    },
    {
        "ClassName": "icon icon-facebook1",
        "Name": "iconfacebook1"
    },
    {
        "ClassName": "icon icon-labo1",
        "Name": "iconlabo1"
    },
    {
        "ClassName": "icon icon-marketing1",
        "Name": "iconmarketing1"
    },
    {
        "ClassName": "icon icon-mobile1",
        "Name": "iconmobile1"
    },
    {
        "ClassName": "icon icon-repport1",
        "Name": "iconrepport1"
    },
    {
        "ClassName": "icon icon-serv1",
        "Name": "iconserv1"
    },
    {
        "ClassName": "icon icon-service1",
        "Name": "iconservice1"
    },
    {
        "ClassName": "icon icon-service-011",
        "Name": "iconservice-011"
    },
    {
        "ClassName": "icon icon-setting1",
        "Name": "iconsetting1"
    },
    {
        "ClassName": "icon icon-task1",
        "Name": "icontask1"
    },
    {
        "ClassName": "icon icon-user_settings-011",
        "Name": "iconuser_settings-011"
    },
    {
        "ClassName": "icon icon-user-setting1",
        "Name": "iconuser-setting1"
    },
    {
        "ClassName": "icon icon-warehouse1",
        "Name": "iconwarehouse1"
    },
    {
        "ClassName": "icon icon-creat-csu1",
        "Name": "iconcreat-csu1"
    },
    {
        "ClassName": "icon icon-creat-profile1",
        "Name": "iconcreat-profile1"
    },
    {
        "ClassName": "icon icon-dash1",
        "Name": "icondash1"
    },
    {
        "ClassName": "icon icon-desk1",
        "Name": "icondesk1"
    },
    {
        "ClassName": "icon icon-export-ex1",
        "Name": "iconexport-ex1"
    },
    {
        "ClassName": "icon icon-icon-bacsi1",
        "Name": "iconicon-bacsi1"
    },
    {
        "ClassName": "icon icon-icon-casher1",
        "Name": "iconicon-casher1"
    },
    {
        "ClassName": "icon icon-lich1",
        "Name": "iconlich1"
    },
    {
        "ClassName": "icon icon-notifaction1",
        "Name": "iconnotifaction1"
    },
    {
        "ClassName": "icon icon-phong1",
        "Name": "iconphong1"
    },
    {
        "ClassName": "icon icon-print1",
        "Name": "iconprint1"
    },
    {
        "ClassName": "icon icon-trongngay1",
        "Name": "icontrongngay1"
    },
    {
        "ClassName": "icon icon-vietnam1",
        "Name": "iconvietnam1"
    },
    {
        "ClassName": "icon icon-x-ray1",
        "Name": "iconx-ray1"
    },
    {
        "ClassName": "icon icon-attach1",
        "Name": "iconattach1"
    },
    {
        "ClassName": "icon icon-birth-day1",
        "Name": "iconbirth-day1"
    },
    {
        "ClassName": "icon icon-call1",
        "Name": "iconcall1"
    },
    {
        "ClassName": "icon icon-cancel1",
        "Name": "iconcancel1"
    },
    {
        "ClassName": "icon icon-clear1",
        "Name": "iconclear1"
    },
    {
        "ClassName": "icon icon-client_send1",
        "Name": "iconclient_send1"
    },
    {
        "ClassName": "icon icon-comment1",
        "Name": "iconcomment1"
    },
    {
        "ClassName": "icon icon-dot1",
        "Name": "icondot1"
    },
    {
        "ClassName": "icon icon-face_icon1",
        "Name": "iconface_icon1"
    },
    {
        "ClassName": "icon icon-face_w1",
        "Name": "iconface_w1"
    },
    {
        "ClassName": "icon icon-facelink1",
        "Name": "iconfacelink1"
    },
    {
        "ClassName": "icon icon-fillter1",
        "Name": "iconfillter1"
    },
    {
        "ClassName": "icon icon-gotomess1",
        "Name": "icongotomess1"
    },
    {
        "ClassName": "icon icon-hide1",
        "Name": "iconhide1"
    },
    {
        "ClassName": "icon icon-like1",
        "Name": "iconlike1"
    },
    {
        "ClassName": "icon icon-messenger1",
        "Name": "iconmessenger1"
    },
    {
        "ClassName": "icon icon-name1",
        "Name": "iconname1"
    },
    {
        "ClassName": "icon icon-nodelete_b1",
        "Name": "iconnodelete_b1"
    },
    {
        "ClassName": "icon icon-nohide1",
        "Name": "iconnohide1"
    },
    {
        "ClassName": "icon icon-no-reply1",
        "Name": "iconno-reply1"
    },
    {
        "ClassName": "icon icon-no-see1",
        "Name": "iconno-see1"
    },
    {
        "ClassName": "icon icon-ok1",
        "Name": "iconok1"
    },
    {
        "ClassName": "icon icon-phone-21",
        "Name": "iconphone-21"
    },
    {
        "ClassName": "icon icon-profile1",
        "Name": "iconprofile1"
    },
    {
        "ClassName": "icon icon-sex1",
        "Name": "iconsex1"
    },
    {
        "ClassName": "icon icon-staff1",
        "Name": "iconstaff1"
    },
    {
        "ClassName": "icon icon-start1",
        "Name": "iconstart1"
    },
    {
        "ClassName": "icon icon-tag1",
        "Name": "icontag1"
    },
    {
        "ClassName": "icon icon-teamplate1",
        "Name": "iconteamplate1"
    }
]

$(document).ready(function(){
    Event_Click_Remove_Text_Search();
    Render_Data_List_Icon(data_Icon_List,"Icon_List");
})

function Event_Click_Remove_Text_Search(){
    $(".button_remove").on("click",function(){
        $("#InputSearchIcon").val("");
    })
}


function Render_Data_List_Icon(data,id){
    let htmls = "";
    if(data != undefined && data.length != 0){
        htmls = data.map((item) => {
                let string = `
                    <div class="icon_item">
                        <div class="icon_content">
                            <i class="${item.ClassName}"></i>
                        </div>
                        <div class="icon_name">${item.Name}</div>
                    </div>
                `
                return string;
        })
    }
    $("#" + id).html(htmls.join(""));
    Event_Click_Copy_Clipboard_Icon();
}

function OnkeyupSearchIcon(){
    try{
        let search = ($("#InputSearchIcon").val()).trim();
        let data = [];
        if(search != ""){
            data = data_Icon_List.filter((work) => {
                return work["Name"].includes(search) || work["ClassName"].includes(search)
            })
        }
        else{
            data = data_Icon_List;
        }
        Render_Data_List_Icon(data,"Icon_List");
    }
    catch{
    }
}

function Event_Click_Copy_Clipboard_Icon(){
    $("#Icon_List .icon_item").on("click",function(){
            let icon = $(this).children(".icon_content");
            let icon_html = (icon.html()).trim();
            if(Event_Copy_Text_To_Clipboard(icon_html) == true)
                $.notify("Copy To Clipboar", "success",
                    { 
                        position:"bottom"      
                    }
                );
    })
}

function Event_Copy_Text_To_Clipboard(text){
    var m = document;
    text = m.createTextNode(text);
    var w = window;
    var b = m.body;
    b.appendChild(text);
    if (b.createTextRange) {
        var d = b.createTextRange();
        d.moveToElementText(text);
        d.select();
        m.execCommand('copy');
    } 
    else {
        var d = m.createRange();
        var g = w.getSelection;
        d.selectNodeContents(text);
        g().removeAllRanges();
        g().addRange(d);
        m.execCommand('copy');
        g().removeAllRanges();
    }
    text.remove();
    return true;
}