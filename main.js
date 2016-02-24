//Initialize the module
require(["TM","require_source/Engine"], function (TM,Engine) {
    var tm = new TM();
    tm.test();
    console.log(tm.name);

	var enginetest = new Engine();
	console.log(enginetest);
	console.log(enginetest.name_info());
});
