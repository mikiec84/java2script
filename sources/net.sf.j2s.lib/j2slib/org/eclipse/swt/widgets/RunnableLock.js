c$=$_C(function(){
this.runnable=null;
this.thread=null;
this.throwable=null;
$_Z(this,arguments);
},$wt.widgets,"RunnableLock");
$_K(c$,
function(runnable){
this.runnable=runnable;
},"Runnable");
$_M(c$,"done",
function(){
return this.runnable==null||this.throwable!=null;
});
$_M(c$,"run",
function(){
if(this.runnable!=null)this.runnable.run();
this.runnable=null;
});
