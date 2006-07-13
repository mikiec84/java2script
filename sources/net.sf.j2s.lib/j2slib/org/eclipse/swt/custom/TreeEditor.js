Clazz.load(["$wt.custom.ControlEditor"],"$wt.custom.TreeEditor",["java.lang.Runnable","$wt.events.ControlListener","$.TreeListener","$wt.graphics.Rectangle"],function(){
c$=$_C(function(){
this.tree=null;
this.item=null;
this.column=0;
this.columnListener=null;
this.treeListener=null;
$_Z(this,arguments);
},$wt.custom,"TreeEditor",$wt.custom.ControlEditor);
$_K(c$,
function(tree){
$_R(this,$wt.custom.TreeEditor,[tree]);
this.tree=tree;
this.columnListener=(function(i$,v$){
if(!$_D("org.eclipse.swt.custom.TreeEditor$1")){
$_H();
c$=$_C(function(){
$_B(this,arguments);
$_Z(this,arguments);
},$wt.custom,"TreeEditor$1",null,$wt.events.ControlListener);
$_V(c$,"controlMoved",
function(e){
this.b$["$wt.custom.TreeEditor"].resize();
},"$wt.events.ControlEvent");
$_V(c$,"controlResized",
function(e){
this.b$["$wt.custom.TreeEditor"].resize();
},"$wt.events.ControlEvent");
c$=$_P();
}
return $_N($wt.custom.TreeEditor$1,i$,v$);
})(this,null);
this.treeListener=(function(i$,v$){
if(!$_D("org.eclipse.swt.custom.TreeEditor$2")){
$_H();
c$=$_C(function(){
$_B(this,arguments);
this.runnable=null;
$_Z(this,arguments);
},$wt.custom,"TreeEditor$2",null,$wt.events.TreeListener);
$_Y(c$,function(){
this.runnable=(function(i$,v$){
if(!$_D("org.eclipse.swt.custom.TreeEditor$2$3")){
$_H();
c$=$_C(function(){
$_B(this,arguments);
$_Z(this,arguments);
},$wt.custom,"TreeEditor$2$3",null,Runnable);
$_V(c$,"run",
function(){
if(this.b$["$wt.custom.TreeEditor"].editor==null||this.b$["$wt.custom.TreeEditor"].editor.isDisposed())return;
if(this.b$["$wt.custom.TreeEditor"].tree.isDisposed())return;
this.b$["$wt.custom.TreeEditor"].resize();
this.b$["$wt.custom.TreeEditor"].editor.setVisible(true);
});
c$=$_P();
}
return $_N($wt.custom.TreeEditor$2$3,i$,v$);
})(this,null);
});
$_V(c$,"treeCollapsed",
function(e){
if(this.b$["$wt.custom.TreeEditor"].editor==null||this.b$["$wt.custom.TreeEditor"].editor.isDisposed())return;
this.b$["$wt.custom.TreeEditor"].editor.setVisible(false);
e.display.asyncExec(this.runnable);
},"$wt.events.TreeEvent");
$_V(c$,"treeExpanded",
function(e){
if(this.b$["$wt.custom.TreeEditor"].editor==null||this.b$["$wt.custom.TreeEditor"].editor.isDisposed())return;
this.b$["$wt.custom.TreeEditor"].editor.setVisible(false);
e.display.asyncExec(this.runnable);
},"$wt.events.TreeEvent");
c$=$_P();
}
return $_N($wt.custom.TreeEditor$2,i$,v$);
})(this,null);
tree.addTreeListener(this.treeListener);
this.grabVertical=true;
},"$wt.widgets.Tree");
$_V(c$,"computeBounds",
function(){
if(this.item==null||this.column==-1||this.item.isDisposed())return new $wt.graphics.Rectangle(0,0,0,0);
var cell=this.item.getBounds(this.column);
var rect=this.item.getImageBounds(this.column);
cell.x=rect.x+rect.width;
cell.width-=rect.width;
var area=this.tree.getClientArea();
if(cell.x<area.x+area.width){
if(cell.x+cell.width>area.x+area.width){
cell.width=area.x+area.width-cell.x;
}}var editorRect=new $wt.graphics.Rectangle(cell.x,cell.y,this.minimumWidth,this.minimumHeight);
if(this.grabHorizontal){
if(this.tree.getColumnCount()==0){
cell.width=area.x+area.width-cell.x;
}editorRect.width=Math.max(cell.width,this.minimumWidth);
}if(this.grabVertical){
editorRect.height=Math.max(cell.height,this.minimumHeight);
}if(this.horizontalAlignment==131072){
editorRect.x+=cell.width-editorRect.width;
}else if(this.horizontalAlignment==16384){
}else{
editorRect.x+=Math.floor((cell.width-editorRect.width)/2);
}editorRect.x=Math.max(cell.x,editorRect.x);
if(this.verticalAlignment==1024){
editorRect.y+=cell.height-editorRect.height;
}else if(this.verticalAlignment==128){
}else{
editorRect.y+=Math.floor((cell.height-editorRect.height)/2);
}return editorRect;
});
$_M(c$,"dispose",
function(){
if(this.column>-1&&this.column<this.tree.getColumnCount()){
var treeColumn=this.tree.getColumn(this.column);
treeColumn.removeControlListener(this.columnListener);
}this.columnListener=null;
if(this.treeListener!=null)this.tree.removeTreeListener(this.treeListener);
this.treeListener=null;
this.tree=null;
this.item=null;
this.column=0;
$_U(this,$wt.custom.TreeEditor,"dispose",[]);
});
$_M(c$,"getColumn",
function(){
return this.column;
});
$_M(c$,"getItem",
function(){
return this.item;
});
$_M(c$,"setColumn",
function(column){
var columnCount=this.tree.getColumnCount();
if(columnCount==0){
this.column=(column==0)?0:-1;
this.resize();
return;
}if(this.column>-1&&this.column<columnCount){
var treeColumn=this.tree.getColumn(this.column);
treeColumn.removeControlListener(this.columnListener);
this.column=-1;
}if(column<0||column>=this.tree.getColumnCount())return;
this.column=column;
var treeColumn=this.tree.getColumn(this.column);
treeColumn.addControlListener(this.columnListener);
this.resize();
},"~N");
$_M(c$,"setItem",
function(item){
this.item=item;
this.resize();
},"$wt.widgets.TreeItem");
$_M(c$,"setEditor",
function(editor,item,column){
this.setItem(item);
this.setColumn(column);
this.setEditor(editor);
},"$wt.widgets.Control,$wt.widgets.TreeItem,~N");
$_M(c$,"setEditor",
function(editor,item){
this.setItem(item);
this.setEditor(editor);
},"$wt.widgets.Control,$wt.widgets.TreeItem");
$_M(c$,"resize",
function(){
if(this.tree.isDisposed())return;
if(this.item==null||this.item.isDisposed())return;
var columnCount=this.tree.getColumnCount();
if(columnCount==0&&this.column!=0)return;
if(columnCount>0&&(this.column<0||this.column>=columnCount))return;
$_U(this,$wt.custom.TreeEditor,"resize",[]);
});
});
