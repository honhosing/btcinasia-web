

$(function () {
    $('#menu-podcast').hover(function () {
        $('#sub-menu-podcast').css("display","block");
        $('#sub-menu-podcast').css("visibility","visible");
    });
    $('#menu-item-2380').mouseleave(function () {
        $('#sub-menu-podcast').css("display","none");
        $('#sub-menu-podcast').css("visibility","hidden");
    });

    $('a.play-podcast').click(function () {
        var music = $(this).find("audio")[0];
        var image = $(this).parent().parent().prev();

        // console.log(image);
        if(music.paused){
            music.play();
            image.css("border","2px solid #f7952e");
            image.css("filter","drop-shadow(2px 4px 6px black)");
        }else {
            music.pause();
            image.css("border","none");
            image.css("filter","none");
        }
    });

    window.onload = function(){
            console.log('页面加载完毕');
            watchChangeSize();

        };
        window.οnresize=function(){
            console.log('监听变化');
            watchChangeSize();
        };

        function watchChangeSize () {
            var offsetWid = document.documentElement.clientWidth;
            var offsetHei = document.documentElement.clientHeight;
            console.log(offsetWid);
            console.log(offsetHei);
        }
});

function getWidth(val) {
  this.processWidth=(window.innerWidth || 	document.documentElement.clientWidth)-210 +'px';
}
getWidth(1);

//通过注册resize监听器，实现对窗口大小的监听
window.addEventListener('resize', e => { this.getWidth(1); }, false);
// window.removeEventListener('resize', e => { this.getHeight(1); });



