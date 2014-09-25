module.exports = (function ( Util ){
	var st = Util.String = Util.string = {};

	// is and isnt
	st.is = Util.is.String;
	st.isnt = Util.isnt.String;

	st.trim = function ( str ) {
		return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	};

	st.splitWords = function ( str ) {
		return st.trim(str).replace(/,/g, ' ').split(/\s+/);
	};

	// Case conversions
		
		// from CamelCase to ...

		st.fromCamelToDash = function ( str ){
			return str
				.replace(/([A-Z])/g, function ( l ){return "-"+l.toLowerCase();})
				.replace(/^\-/g,'');
		};
		st.fromCamelToUnderscore = function ( str ){
			return str
				.replace(/([A-Z])/g, function ( l ){return "_"+l.toLowerCase();})
				.replace(/^\_/g,'');
		};
		st.fromCamelToSpaced = function ( str ){
			return str
				.replace(/([A-Z])/g, function ( l ){return " "+l;})
				.replace(/^ /g,'');
		};


		// from dash-case to ...
		
		st.fromDashToCamel = function ( str ){
			return str
				.replace(/(\-[a-z])/g, function ( l ){return l.toUpperCase().replace('-','');})
				.replace(/^[a-z]{1}/g,function ( l ){return l.toUpperCase();});
		};
		st.fromDashToUnderscore = function ( str ){
			return str
				.replace(/(\-[a-z])/g, function ( l ){return l.replace('-','_');})
				.replace(/^\_/g,'');
		};
		st.fromDashToSpaced = function ( str ){
			return str
				.replace(/(\-[a-z])/g, function ( l ){return l.toUpperCase().replace('-',' ');})
				.replace(/^\ /g,'')
				.replace(/^[a-z]{1}/g,function ( l ){return l.toUpperCase();});
		};


		// from underscore_case to ...

		st.fromUnderscoreToCamel = function ( str ){
			return str
				.replace(/(\_[a-z])/g, function ( l ){return l.toUpperCase().replace('_','');})
				.replace(/^[a-z]{1}/g,function ( l ){return l.toUpperCase();});
		};
		st.fromUnderscoreToDash = function ( str ){
			return str
				.replace(/(\_[a-z])/g, function ( l ){return l.replace('_','-');})
				.replace(/^\-/g,'');
		};
		st.fromUnderscoreToSpaced = function ( str ){
			return str
				.replace(/(\_[a-z])/g, function ( l ){return l.toUpperCase().replace('_',' ');})
				.replace(/^[a-z]{1}/g,function ( l ){return l.toUpperCase();});
		};

		// from spaced to ...

		st.fromSpacedToCamel = function ( str ){
			return str
				.replace(/(\ [a-z])/g, function ( l ){return l.toUpperCase();})
				.replace(/^[a-z]{1}/g,function ( l ){return l.toUpperCase();}).replace(/\s/g, '');

		};
		st.fromSpacedToUnderscore = function ( str ){
			return str
				.split(' ').join('_')
				.replace(/ /g,"_");
		};
		st.fromSpacedToDash = function ( str ){
			return str
				.replace(/ /g,"-");
		};

});