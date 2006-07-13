Clazz.load(null,"$wt.custom.PopupList",["$wt.SWT","$wt.events.ControlListener","$.KeyListener","$.MouseListener","$wt.widgets.List","$.Listener","$.Shell"],function(){
c$=$_C(function(){
this.shell=null;
this.list=null;
this.minimumWidth=0;
$_Z(this,arguments);
},$wt.custom,"PopupList");
$_K(c$,
function(parent){
this.construct(parent,0);
},"$wt.widgets.Shell");
$_K(c$,
function(parent,style){
this.shell=new $wt.widgets.Shell(parent,$wt.custom.PopupList.checkStyle(style));
this.list=new $wt.widgets.List(this.shell,516);
this.shell.addListener(27,(function(i$,v$){
if(!$_D("org.eclipse.swt.custom.PopupList$1")){
$_H();
c$=$_C(function(){
$_B(this,arguments);
$_Z(this,arguments);
},$wt.custom,"PopupList$1",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(e){
this.b$["$wt.custom.PopupList"].shell.setVisible(false);
},"$wt.widgets.Event");
c$=$_P();
}
return $_N($wt.custom.PopupList$1,i$,v$);
})(this,null));
this.shell.addControlListener((function(i$,v$){
if(!$_D("org.eclipse.swt.custom.PopupList$2")){
$_H();
c$=$_C(function(){
$_B(this,arguments);
$_Z(this,arguments);
},$wt.custom,"PopupList$2",null,$wt.events.ControlListener);
$_V(c$,"controlMoved",
function(e){
},"$wt.events.ControlEvent");
$_V(c$,"controlResized",
function(e){
var shellSize=this.b$["$wt.custom.PopupList"].shell.getClientArea();
this.b$["$wt.custom.PopupList"].list.setSize(shellSize.width,shellSize.height);
},"$wt.events.ControlEvent");
c$=$_P();
}
return $_N($wt.custom.PopupList$2,i$,v$);
})(this,null));
this.list.addMouseListener((function(i$,v$){
if(!$_D("org.eclipse.swt.custom.PopupList$3")){
$_H();
c$=$_C(function(){
$_B(this,arguments);
$_Z(this,arguments);
},$wt.custom,"PopupList$3",null,$wt.events.MouseListener);
$_V(c$,"mouseDoubleClick",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseDown",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseUp",
function(e){
this.b$["$wt.custom.PopupList"].shell.setVisible(false);
},"$wt.events.MouseEvent");
c$=$_P();
}
return $_N($wt.custom.PopupList$3,i$,v$);
})(this,null));
this.list.addKeyListener((function(i$,v$){
if(!$_D("org.eclipse.swt.custom.PopupList$4")){
$_H();
c$=$_C(function(){
$_B(this,arguments);
$_Z(this,arguments);
},$wt.custom,"PopupList$4",null,$wt.events.KeyListener);
$_V(c$,"keyReleased",
function(e){
},"$wt.events.KeyEvent");
$_V(c$,"keyPressed",
function(e){
if((e.character).charCodeAt(0)==('\r').charCodeAt(0)){
this.b$["$wt.custom.PopupList"].shell.setVisible(false);
}},"$wt.events.KeyEvent");
c$=$_P();
}
return $_N($wt.custom.PopupList$4,i$,v$);
})(this,null));
},"$wt.widgets.Shell,~N");
c$.checkStyle=$_M(c$,"checkStyle",
($fz=function(style){
var mask=100663296;
return style&mask;
},$fz.isPrivate=true,$fz),"~N");
$_M(c$,"getFont",
function(){
return this.list.getFont();
});
$_M(c$,"getItems",
function(){
return this.list.getItems();
});
$_M(c$,"getMinimumWidth",
function(){
return this.minimumWidth;
});
$_M(c$,"open",
function(rect){
var listSize=this.list.computeSize(rect.width,-1,false);
var screenSize=this.shell.getDisplay().getBounds();
var spaceBelow=screenSize.height-(rect.y+rect.height)-30;
var spaceAbove=rect.y-30;
var y=0;
if(spaceAbove>spaceBelow&&listSize.y>spaceBelow){
if(listSize.y>spaceAbove){
listSize.y=spaceAbove;
}else{
listSize.y+=2;
}y=rect.y-listSize.y;
}else{
if(listSize.y>spaceBelow){
listSize.y=spaceBelow;
}else{
listSize.y+=2;
}y=rect.y+rect.height;
}listSize.x=rect.width;
if(listSize.x<this.minimumWidth)listSize.x=this.minimumWidth;
var x=rect.x+rect.width-listSize.x;
this.shell.setBounds(x,y,listSize.x,listSize.y);
this.shell.open();
this.list.setFocus();
var display=this.shell.getDisplay();
while(!this.shell.isDisposed()&&this.shell.isVisible()){
if(!display.readAndDispatch())display.sleep();
}
var result=null;
if(!this.shell.isDisposed()){
var strings=this.list.getSelection();
this.shell.dispose();
if(strings.length!=0)result=strings[0];
}return result;
},"$wt.graphics.Rectangle");
$_M(c$,"select",
function(string){
var items=this.list.getItems();
if(string!=null){
for(var i=0;i<items.length;i++){
if(items[i].startsWith(string)){
var index=this.list.indexOf(items[i]);
this.list.select(index);
break;
}}
}},"~S");
$_M(c$,"setFont",
function(font){
this.list.setFont(font);
},"$wt.graphics.Font");
$_M(c$,"setItems",
function(strings){
this.list.setItems(strings);
},"~A");
$_M(c$,"setMinimumWidth",
function(width){
this.minimumWidth=width;
},"~N");
});
