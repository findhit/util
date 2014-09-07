module.exports = (function ( Util ){
	var st = Util.String = Util.string = {};

	// is and isnt
	st.is = Util.is.String;
	st.isnt = Util.isnt.String;

	st.trim = function ( str ) {
		return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	};

	st.splitWords = function ( str ) {
		return st.trim(str).replace(/,/g, '').split(/\s+/);
	};

});