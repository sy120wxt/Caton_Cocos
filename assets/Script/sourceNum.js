// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const NUM = cc.Enum({
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5,
	SIX: 6,
	EIGHT: 8,
	NINE: 9,
	TEN: 10,
	ELEVEN: 11,
	TWELVE:12,
});

module.exports = {
	NUM:NUM,
};

cc.Class({
    extends: cc.Component,

    properties: {
		two: cc.SpriteFrame,
		three: cc.SpriteFrame,
		four: cc.SpriteFrame,
		five: cc.SpriteFrame,
		six: cc.SpriteFrame,
		eight: cc.SpriteFrame,
		nine: cc.SpriteFrame,
		ten: cc.SpriteFrame,
		eleven: cc.SpriteFrame,
		twelve: cc.SpriteFrame,

		_num: {
			default: null,
			type: NUM,
			visible:false,
		},

		num: {
			get: function () {
				return this._num;
			},
			set: function (value) {
				console.log("sourceNum -- > setnum");
				switch (value) {
					case NUM.TWO:
						console.log("sourceNum -- > setnum2");
						this.getComponent(cc.Sprite).spriteFrame = this.two;
						break;
					case NUM.THREE:
						console.log("sourceNum -- > setnum3");
						this.getComponent(cc.Sprite).spriteFrame = this.three;
						break;
					case NUM.FOUR:
						this.getComponent(cc.Sprite).spriteFrame = this.four;
						break;
					case NUM.FIVE:
						this.getComponent(cc.Sprite).spriteFrame = this.five;
						break;
					case NUM.SIX:
						this.getComponent(cc.Sprite).spriteFrame = this.six;
						break;
					case NUM.EIGHT:
						this.getComponent(cc.Sprite).spriteFrame = this.eight;
						break;
					case NUM.NINE:
						this.getComponent(cc.Sprite).spriteFrame = this.nine;
						break;
					case NUM.TEN:
						this.getComponent(cc.Sprite).spriteFrame = this.ten;
						break;
					case NUM.ELEVEN:
						this.getComponent(cc.Sprite).spriteFrame = this.eleven;
						break;
					case NUM.TWELVE:
						this.getComponent(cc.Sprite).spriteFrame = this.twelve;
						break;
				}
			}
		}
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
