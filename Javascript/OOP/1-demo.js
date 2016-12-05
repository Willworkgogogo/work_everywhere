var opts = {
	version:'1.0.0',
	name:'shanghaismm'
};

(function(opts){
	function Clazz() {
		return this.init(arguments);
	}
	Clazz.fn = Clazz.prototype = {
		init:function(opts){
			this.settings = opts;
			return this;
		},
		testInit:function(){
			//直接打印对象
			console.log(this.settings);
			//遍历对象输出
			for (var o in this.settings) {
				console.log(this.settings[0]);
			}
			return this;
		}
	}
	window.$ = new Clazz(opts);
})(opts)