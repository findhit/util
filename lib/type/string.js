module.exports = (function ( ƒ ){
	var st = ƒ.String = ƒ.string = {};

	// is and isnt
	st.is = ƒ.is.String;
	st.isnt = ƒ.isnt.String;

	st.trim = function ( str ) {
		return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	};

	st.splitWords = function ( str ) {
		return st.trim(str).replace(/,/g, ' ').split(/\s+/);
	};

	st.capitalize = function ( str ) {
		return str.slice(0,1).toUpperCase() + str.slice(1);
	};

	st.decapitalize = function ( str ) {
		return str.slice(0,1).toLowerCase() + str.slice(1);
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

});
