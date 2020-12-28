// function topMenu(){
//     document.getElementById("menuIcon").style.display = "none";
//     document.getElementById("topMenu2").style.display = "block";
// }
// function post_option_display(){
// 	$('#menuIcon').toggle();
	
// 	if($('#menuIcon').css("display", "block")){ 
//         document.getElementById("menuIcon").style.display = "none";
//         document.getElementById("menuIcon2").style.display = "block";
//     }
// }
// function topMenu(){
//     document.getElementById("menuIcon").style.display = "none";
//     document.getElementById("menuIcon2").style.display = "block";
// }

function topMenu(){
	$('#A').toggle();
	if($('#topMenu2').css("display", "block")){
        $('#topMenu').css("display", "none")
    }
	if($('#topMenu').css("display", "block")){
        $('#topMenu2').css("display", "none")
    }
}