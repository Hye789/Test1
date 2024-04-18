// 1. css에서 .side_menu_wrap이 먼저 나타나야함 뭔소리야
// 2. css에서 .side_menu를 오른쪽으로 밀어서 가려줘야함
// 3. 모바일버튼을 클릭했을 때 .side_menu>wrap이 나타나고, .side_menu가 오른쪽에서 왼쪽으로 슬라이드되어 나타나야함
// 4. close 버튼을 눌렀을 때 .side_menu_wrap이 사라지고 side_menu는 왼쪽에서 오른쪽으로 슬라이드되어야함 진짜뭔소리야
// 5. **모바일버튼 클릭 후 스크롤 내렸을 때 뒷배경 스크롤 없애기 >> wrap에 사이즈를 준 뒤, overflow:hidden; 개빡치네
// 6. close를 눌렀을 때, 사이즈, overflow 원래대로 되돌리기


let Wrap = document.querySelector(".wrap")
let MBtn = document.querySelector("#mo_btn")
let SideMenuWrap = document.querySelector(".side_menu_wrap")
let SideMenu = document.querySelector(".side_menu")
let SideX = document.querySelector(".side_x")

function MBtnClick(){
 Wrap.style.height="100vh"
 Wrap.style.overflow="hidden"
 SideMenuWrap.style.zIndex="100"
 SideMenu.style.right="0"
 SideMenu.style.transition="all 0.5s"
}
MBtn.addEventListener("click",MBtnClick)

function SideXClick(){
 Wrap.style.height="auto"
 Wrap.style.overflow="hidden"
 SideMenuWrap.style.zIndex="-1"
 SideMenuWrap.style.transition="all 0.5s"
 SideMenu.style.right="-350px"
 SideMenu.style.transition="all 0.5s"
}
SideX.addEventListener("click",SideXClick)


$(".s_menu>ul>li").click(function(){
 // 사이드메뉴를 클릭했을 때
 let Ssubmenu = $(this).children(".s_submenu")
 // 사이드메뉴의 서브메뉴가 한개씩 내려옴
 $(".s_submenu").not(Ssubmenu).slideUp()
 // 다른 사이드메뉴를 클릭했을 때 내려와 있는 서브메뉴는 올라감
 Ssubmenu.stop().slideToggle()
 // 서브메뉴가 토글(스위치)되어 클릭하면 슬라이드되어 내려오고 클릭하면 슬라이드되어 올라감
 $(this).toggleClass("active")
 // 클릭했을 때 새로운 스위치 클래스 부여
})

// let SMenu = document.querySelector(".s_menu")
// let SubMenu = document.querySelector(".s_submenu")

// function SMenuClick(){
//  SMenu.style.background="#154283"
//  SubMenu.style.display="block"
// }
// SMenu.addEventListener("click",SMenuClick)