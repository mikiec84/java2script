Clazz.load(["$wt.events.TypedEvent"],"$wt.custom.BidiSegmentEvent",null,function(){
c$=$_C(function(){
this.lineOffset=0;
this.lineText=null;
this.segments=null;
$_Z(this,arguments);
},$wt.custom,"BidiSegmentEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.custom.BidiSegmentEvent,[e]);
this.lineOffset=e.detail;
this.lineText=e.text;
},"$wt.custom.StyledTextEvent");
$_S(c$,
"serialVersionUID",3257846571587547957);
});
