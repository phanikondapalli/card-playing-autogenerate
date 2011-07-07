/**
 * Created by JetBrains WebStorm.
 * User: cuzz
 * Date: 7/6/11
 * Time: 4:48 PM
 * To change this template use File | Settings | File Templates.
 */

var Main = {
    game:null,
    start:function(){
        this.showDeck();
        this.showHistory();
    },
    showDeck:function(){
        $("#deck").html(this.game.getDeck().toString());
    },
    showHistory:function(){
        $("#history").html(this.game.getDeck().historyToString());
    }
};

$(function(){
    this.game = new Game();
    $("#draw").click(function(){
        $("#card_drawn").html(this.game.draw().toString());
        this.showDeck();
        this.showHistory();
    }.bind(this));
}.bind(Main));