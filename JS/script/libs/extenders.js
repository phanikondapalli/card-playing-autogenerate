/**
 * Created by JetBrains WebStorm.
 * User: cuzz
 * Date: 7/6/11
 * Time: 2:00 PM
 * To change this template use File | Settings | File Templates.
 */

Array.prototype.shuffle = function() {
 	var len = this.length;
	var i = len;
	 while (i--) {
	 	var p = parseInt(Math.random()*len);
		var t = this[i];
  	this[i] = this[p];
  	this[p] = t;
 	}
};