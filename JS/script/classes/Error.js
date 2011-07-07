/**
 * @author cuzz
 */

var Error = function(e){
	
	/*
	    PUBLIC VARS
	 */
	
	/*
	    PRIVATE VARS
	 */
	
	/*
	    PUBLIC METHODS
	 */

	/*
	    PRIVATE METHODS
	 */

    
    Log("Error:"+e);
}

Error.add = function(e){
    Log("Error:"+e);
};
Error.stop = function(e){
    throw e;
}
Error.warn = function(e){
    Log("Error:"+e);
}