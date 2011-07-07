/**
 * @author cuzz
 */

var Card = function(suit,type){
	
	/*
	    PUBLIC VARS
	 */
    this.suit = suit;
    this.type = type;
	
	/*
	    PRIVATE VARS
	 */

    /*
        PUBLIC METHODS
     */
    this.toString = function(){
        return this.suit+"_"+this.type;
    }

	/*
	    PRIVATE METHODS
	 */

}

/*
    SHARED INSTANCE METHODS
*/

/*
    CONSTANTS
 */
