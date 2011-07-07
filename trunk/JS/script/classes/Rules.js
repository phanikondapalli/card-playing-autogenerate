/**
 * @author cuzz
 */

var Rules = function(rule,cbk){
	
	/*
	    PUBLIC VARS
	 */
	this.cards_allowed = {suits:[],types:[]};
    this.first_draw = 0;
    this.draw_number = 0;
    this.card_powers = [];
    this.special_cards = [];
    this.draw_rules = [];
    this.put_down_rules = [];
    this.win_conditions = [];
	/*
	    PRIVATE VARS
	 */
	
	/*
	    PUBLIC METHODS
	 */
	this.load_rules = function(rule,cbk){
        $.getJSON("Rules/"+rule+".json",function(o){
            for(var i in o)
                if(i in this)
                    set(i,o[i]);
            cbk();
        }.bind(this));
    }
	/*
	    PRIVATE METHODS
	 */
    var break_in_to_array = function(o,size){
        if(o.indexOf("_")>-1){
            var r = o.split("_");
            if(size){
                if(size==r.length) return r;
            }else
                return r;
            return false;
        }else{
            return [o];
        }
    }

    var set = function(o,data){
        if("set_"+o in setters){
            setters["set_"+o](data);
        }else if(o in this){
            this[o] = data;
        }
    }.bind(this);

    var checkTree = function(arr,o){
        var a = arr.splice(0,1);
        if(a in o){
            if(arr.length>0) return checkTree(arr,o[a]);
            else return o[a];
        }else{
            Log(o)
            Log(arr)
            Error.warn(a+" dose not exist.");
        }
        return false;
    }

    var setters = {
        set_cards_allowed:function(data){
            if("suits" in data && "types" in data){
                if($.isArray(data.suits)){
                    for(var i=0 ; i<data.suits.length ; i++){
                        if(data.suits[i] in Cards.SUIT){
                            this.cards_allowed.suits.push(Cards.SUIT[data.suits[i]]);
                        }else{
                            Error.warn(data.suits[i]+" is not a accepted suit.");
                        }
                    }
                    if(this.cards_allowed.suits.length==0){
                        Error.stop("No accepted suits found");
                    }
                }else if(data.suits != ""){
                    var o = break_in_to_array(data.suits);
                    if(o){
                        var obj = checkTree(o,Cards.ALL.SUITS);
                        if(obj){
                            this.cards_allowed.suits = obj;
                        }else{
                            Error.stop("bad suits allowed definition");
                        }
                    }else{
                        Error.stop("'cards_allowed'.'suits' bad definition");
                    }
                }else{
                    Error.stop("'cards_allowed'.'suits' can't be empty. For all suits use 'ALL_SUITS'");
                }

                if($.isArray(data.types)){
                    for(var i=0 ; i<data.types.length ; i++){
                        if(data.types[i] in Cards.TYPE){
                            this.cards_allowed.types.push(Cards.TYPE[data.types[i]]);
                        }else{
                            Error.warn(data.types[i]+" is not a accepted type.");
                        }
                    }
                    if(this.cards_allowed.types.length==0){
                        Error.stop("No accepted types found");
                    }
                }else if(data.types != ""){
                    var o = break_in_to_array(data.types);
                    if(o){
                         var obj = checkTree(o,Cards.ALL.TYPES);
                        if(obj){
                            this.cards_allowed.types = obj;
                        }else{
                            Error.stop("bad type allowed definition");
                        }
                    }else{
                        Error.stop("'cards_allowed'.'types' bad definition");
                    }
                }else{
                    Error.stop("'cards_allowed'.'types' can't be empty. For all types use 'ALL_TYPES'");
                }
            }else{
                Error.stop("'cards_allowed' must have suits and types");
            }
        }.bind(this)
    };

	if(rule && cbk) this.load_rules(rule,cbk);
}