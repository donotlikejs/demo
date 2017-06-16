$(function(){
  $(".innerbox").bind("mousemove",function(e){
    // 获取innerbox的width和height
    var innerbox=$(this);
    //console.log(innerbox);
    var innerboxw=innerbox.width();
    var innerboxh=innerbox.height();
    //计算box中心点到视口到距离
    var centerw = innerbox.offset().left+innerboxw/2;
    var centerh = innerbox.offset().top+innerboxh/2;

    //计算正切角度
    var boxdeg=(Math.atan(innerboxh/innerboxw)/Math.PI)*180;
    //计算box中点和鼠标坐标点连线对x轴对角度
    var mousex=centerw-e.pageX;
    var mousey=centerh-e.pageY;
    //console.log(mousex);
    //console.log(mousey);
    //atan2函数在-PI到PI之间，0deg在第二象限x轴，180在第一象限x轴上，第三第四象限为负角度，通过加-号和+180度，调整为+360度圆
    var mousedeg=-(Math.atan2(mousey,mousex)/Math.PI)*180+180;
    //console.log(mousedeg);
    //判断鼠标在box方向上的区间
    if(mousedeg<=(180-boxdeg)&&mousedeg>boxdeg){
      console.log('1');
    }else if(mousedeg>(360-boxdeg)||mousedeg<=boxdeg){
      console.log('2');
    }else if(mousedeg<=(360-boxdeg) && mousedeg>(180+boxdeg)){
      console.log('3');
    }else{
      console.log('4');
    };
  })


})
