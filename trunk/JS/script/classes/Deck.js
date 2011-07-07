/**
 * @author cuzz
 */

var Deck = function(allowed){
	
	/*
	    PUBLIC VARS
	 */
	
	/*
	    PRIVATE VARS
	 */
	var _cards = [];
	var index = {
        card_type:{},
        card_suit:{},
        card_combined:{}
    };
    var _allowed = allowed?allowed:{suits:Cards.ALL.SUITS.ALL,types:Cards.ALL.TYPES.ALL};
	var _history = [];
    
	/*
	    PUBLIC METHODS
	 */
    //getters
    this.getSuitCards = function(suit){
        return index.card_suit[suit];
    }
    this.getTypeCards = function(type){
        return index.card_type[type];
    }
    this.getCards = function(){
        return _cards;
    }
    //seters

    //misc
    this.shuffle = function(){
        _cards.shuffle();
        create_indexs();
        return this;
    };
    this.draw = function(nr){
        if(nr){
            var r = [];
            for(var i=0 ; i<nr ; i++)
                r.push(this.draw());
            return r;
        }
        return _history[_history.push(remove_card(_cards[0].suit,_cards[0].type))-1];
    };
    this.getLastCardDrawn = function(){
        return _history[_history.length-1];
    };
    this.toString = function(){
        var s = "";
        for(var i=0 ; i<_cards.length ; i++)
            s+=_cards[i].toString()+"|";
        return s;
    };
    this.historyToString = function(){
        var s = "";
        for(var i=0 ; i<_history.length ; i++)
            s+=_history[i].toString()+"|";
        return s;
    };

	/*
	    PRIVATE METHODS
	 */
    function remove_card(suit,type){
        var card = _cards.splice(index.card_combined[Cards.combine(suit,type)],1);
        create_indexs();
        return card;
    }
    function add_card(card){
        _cards.push(card);
        create_indexs();
    }
    function create_indexs(){

        for(var i=0 ; i<_allowed.suits.length ; i++){
            index.card_suit["_"+_allowed.suits[i]] = [];
        }
        for( var j=0 ; j<_allowed.types.length ; j++){
            index.card_type["_"+_allowed.types[j]] = [];
        }
        for(var i=0 ; i<_cards.length ; i++){
            index.card_suit["_"+_cards[i].suit].push(i);
            index.card_type["_"+_cards[i].type].push(i);
            index.card_combined[Cards.combine(_cards[i].suit,_cards[i].type)] = i;
        }
    }

    /*
        CONSTRUCT
     */

    _cards = Cards.combine_suit_and_types(_allowed.suits, _allowed.types);
    create_indexs();
    
}