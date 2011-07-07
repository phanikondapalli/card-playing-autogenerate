/**
 * @author cuzz
 */

var Cards = function(){
	
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

}

/*
    SHARED INSTANCE METHODS
*/

// returns cards with suit and type
Cards.combine_suit_and_types = function(suits,types){
    var r = [];
    for(var i=0; i<suits.length ; i++)
        for(var j=0; j<types.length ; j++){
            r.push(new Card(suits[i],types[j]));
        }
    return r;
}

Cards.combine = function(suit,type){
    return suit+"_"+type;
}

// creates from an array of strings(suit types) a suit object
Cards.arr_to_suit = function(arr){
    var r = [];
    for(var i=0 ; i<arr.length ; i++)
        if(arr[i] in Cards.SUIT)
            r.push(Cards.SUIT[arr[i]]);
    return r;
    // Cards.arr_to_suit(["ACE","JACK","QUEEN","KING"]) returns [0,10,11,12]
}

// creates from an array of strings(type types) a type object
Cards.arr_to_type = function(arr){
    var r = [];
    for(var i=0 ; i<arr.length ; i++)
        if(arr[i] in Cards.TYPE)
            r.push(Cards.TYPE[arr[i]]);
    return r;
    // Cards.arr_to_types(["SPADE","CLUB"]) returns [0,3]
}

/*
    CONSTANTS
 */

Cards.SUIT = {
    ACE:0,
    TWO:1,
    THREE:2,
    FOUR:3,
    FIVE:4,
    SIX:5,
    SEVEN:6,
    EIGHT:7,
    NINE:8,
    TEN:9,
    JACK:10,
    QUEEN:11,
    KING:12,
    JOKER:13
};
Cards.TYPE = {
	SPADE:0,
	HEART:1,
	DIAMOND:2,
	CLUB:3
};
Cards.ALL = {
    SUITS:{
        ALL:Cards.arr_to_suit(["ACE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","JACK","QUEEN","KING","JOKER"]),
        CSUITS:{
            HEIGHS:Cards.arr_to_suit(["ACE","JACK","QUEEN","KING"]),
            LOWS:Cards.arr_to_suit(["TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN"])
        }
    },
    TYPES:{
        ALL:Cards.arr_to_type(["SPADE","HEART","DIAMOND","CLUB"]),
        CTYPES:{
            
        }
    }
};
Cards.ALL.COMBINED = Cards.combine_suit_and_types(Cards.ALL.SUITS.ALL, Cards.ALL.TYPES.ALL);