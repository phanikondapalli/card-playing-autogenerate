/**
 * @author cuzz
 */

var Game = function(){
	
	// public vars

	// private vars
	var _users = [];
	var _deck = new Deck();
	var _rules = new Rules();
	
	// public functions
    this.draw = function(){
        var card_drawn = _deck.draw();

        return card_drawn;
    }

    this.getDeck = function(){
        return _deck;
    }

	// private functions
	var onRulesLoaded = function(){
        _deck.shuffle();
        Main.start();
    }

    _rules.load_rules("macaua",onRulesLoaded.bind(this));
}