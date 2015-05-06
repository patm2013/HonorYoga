$(document).ready(function() {

	function init() {
		Tabletop.init( { key: '1U90V7_jgHs4gOo-P2DjhaPXZRCTMllQhm-mxMEc44rQ',
           callback: function(data, tabletop) { addToWB(data) },
           simpleSheet: true } )
	}
	init();

	var addToWB = function(ttData){
		var templateData = {
                ttClasses: ttData
            };
		template = _.template($("#class-template").html());
            $("#gClasses").html(template(templateData));
    };
});
