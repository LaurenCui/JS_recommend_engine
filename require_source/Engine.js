//define an object called engine with all the methods
define(function(){
	function Engine(){
		this.identifier = null,//string as one of record property
		this.userRecord = null,//obj
		this.records = null,//array?
		this.otherUsers = null,//optional

		this.name_info = function(){
			alert("This is greeting from Engine!");
		},
		this.recommend = function(newIdentifier,newUserInfo,newRecords){
			//call from outsider 
			if(newIdentifier !== null && newUserInfo !== null && newRecords[0].hasOwnProperty(newIdentifier)){
				this.identifier = newIdentifier;
				this.userRecord = newUserInfo;
				this.records = newRecords;
			}
		},
		this.addWeight =  function(){
			//map the identifier weight :formalize the prefrence:different from the content types of the identifier
			
		},
		this.coefficient = function(){

		}
	}

	Engine.prototype = {
		constructor: Engine	,
	};
	return Engine;
});


//var enginetest = new Engine();
//enginetest.name_info();