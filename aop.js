

/*
//先after
function(){
	function(){ alert(1) }()
	function(){
		function test(){ alert(2)}()
		function(){ alert(3) }()
	}()	
}()


//先before

function(){
	function(){
		function(){ alert(1) }()
		function test(){ alert(2)}()
	}()
	function(){ alert(3) }()
}()


*/

Function.prototype.before = function(fn){
	var __self = this;	
	return function(){
		if(fn.apply(__self, arguments) == false) return false;
		return __self.apply(__self, arguments);
	}	
}
Function.prototype.after = function(fn){
	var __self = this;
	return function(){
		var result = __self.apply(__self, arguments);		
		if(result == false) return false;		
		if(fn.apply(__self, arguments) == false) return false;
		if(result) return result;
		return true;	
	}	
}















