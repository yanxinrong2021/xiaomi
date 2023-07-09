/* 
pc端布局：
1）浮动
2）布局思路：从外到里，div嵌套

盒子模型多用于移动端，pc端布局用浮动

头部设置宽度高度，想居中就在内部嵌套div，内部div只设置宽度，不设置高度，高度由内容自动撑开。

设置字体大小、颜色、间距，给父元素添加行高，使得字体水平居中。

em相对于父元素字体大小，rem相对于根元素字体大小。

行内元素，margin和padding的上下不生效，左右是生效的
 /* 行内元素设置margin和padding的上下不生效 */

/* 鼠标悬停在li上 里面的a字体颜色变为橘色 */
/* .cart:hover>a{
    color: #ff6700;
} */


元素设置宽高和设置宽高有区别：
1.不设置高度时，元素高度默认由内容撑开，设置高度为0时，元素中的内容会溢出
2.不设置宽度时，块级元素宽度默认占满父元素，设置宽度为0，不会占满父元素。

设置鼠标悬停时出现的菜单列表：
1.设置菜单元素height=0
2.菜单中有内容会溢出，设置overflow:hidden溢出隐藏
3.设置悬停li元素时样式，对应菜单height=菜单显示时的高度
4.设置动画样式transition:all .3s;使得菜单出现或隐藏效果缓慢进行

设置下拉列表：
1.绝对定位
2.display设置显示或隐藏
3.注意z-index设置列表的层级

.download{
    overflow: hidden;
    width: 124px;
    height: 0px;
    transition:all .3s;
}
.header-left>li:hover>.download{
    height: 148px;
}



div实现水平垂直居中：
1.移动端用弹性盒模型
2.pc端有定位用定位
3.没有定位用margin，上下margin相同，就垂直居中了,同理可以设置垂直居中
4.字体实现垂直居中，可以设置父元素的line-height=height，来实现
5.设置字体水平居中，可用text-align:center
6.行内元素/行内块元素水平居中，给父元素设text-align:center
块级元素，元素水平居中margin：0 auto;

设置鼠标悬停时出现的下拉列表：
html结构往往写在<li>标签的对应内容之后，原因是css选择器受限，鼠标悬停在<li>时，要么选中子代，要么选中兄弟
1.设置下拉列表的宽高，
2.寻找相对父元素设置relative，给下拉列表设置绝对定位
3.设置悬停时display:block,和下拉列表本身设置display：none



行高是可以继承的，父元素设置行高，子元素会继承父元素的行高。



搜索框设置两种情况：
1.外层div设边框，里层input和button
2.input和button设边框

button中设置type="button"一个没有功能的按钮
<button type="button"></button>


outline: none;去掉input点击时黑色的边框


两个元素没有一行显示的原因：
1.考虑是否被挤下去了
2.看是否是行内块,例如input,button，img，行内块识别元素之间的空白
可以给元素设置浮动，浮动后元素被自动设置为块级元素，可以设置宽高


可以过度的属性：
1.颜色
2.数值
3.阴影
4.转换
*/


外层盒子不建议设置高度，以免内部元素高度超过外层盒子时溢出，
此时对外层盒子设置清除浮动无效，内部溢出部分会绊住下层浮动元素，
使得下方浮动元素不能浮动到指定位置
里层某些内部需要防止元素的盒子，也不建议设置宽度，如果要设置宽度，一定要注意，内部元素的宽度和是否超过外层盒子的宽度，
如果超出宽度，内层元素就会换行显示！


清除浮动效果的方法
1.清除浮动，给外层class设置clearfix
2.给外层盒子描边，设置边框
<div style="border: 1px solid transparent;"></div>

3.
<div style="background: red;height: 0;overflow: hidden;"></div>





两行字垂直居中，给第一行设置margin，padding往下走走

伪对象绝对定位，不占据位置，不算做宽高
伪类选择器
.row::after{
    position: absolute;
    bottom: 0;
    left: 6px;
    content: "";
    width: 64px;
    height: 1px;
    background-color: pink;
}


绘制小圆形
.more>i{
    display: inline-block;
    width: 20px;
    height: 22px;
    background-color: #b0b0b0;
    border-radius: 50%;
    text-align: center;
    line-height: 22px;
}


千万千万不要设置大范围的后代选择器，否则可能对后面的元素产生影响找不到错误！！！！！！


一行文字溢出省略号显示：
white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;


清除浮动的几种方法:
1.高度已知，直接加高度，
2.overflow:hidder，子元素溢出的部分会被隐藏调
最外层大容器可以加overflow,子元素布局，我高度不受影响，自动找高
  /* 自动找高 */
    overflow: hidden;
不想让子元素溢出部分隐藏则用下面
3.伪对象法(推荐)
clearfix:after{   content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;}
4.空div法



相对定位，相对于自身移动，三个定位中唯一不脱离文档流的。
/* 自己小范围移动 */
    position: relative;
    top: 5px;