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
	ONE : 1,
	TWO : 2,
	THREE : 3,
	FOUR :4,
	FIVE : 5,
	SIX : 6,
});

module.exports = {
	NUM: NUM,
};

cc.Class({
    extends: cc.Component,

    properties: {
		one_pic: cc.SpriteFrame,
		two_pic: cc.SpriteFrame,
		three_pic: cc.SpriteFrame,
		four_pic: cc.SpriteFrame,
		five_pic: cc.SpriteFrame,
		six_pic: cc.SpriteFrame,

		_num: {
			type: NUM,
			default: null,
			visible: false,
		},

		num: {
			get: function () {
				return this._num;
			},
			set: function (value) {
				this._num = value;
				switch (value) {
					case 1:
						console.log("touzi-->1");
						this.getComponent(cc.Sprite).spriteFrame = this.one_pic;
						break;
					case 2:
						console.log("touzi-->2");
						this.getComponent(cc.Sprite).spriteFrame = this.two_pic;
						break;
					case 3:
						console.log("touzi-->3");
						this.getComponent(cc.Sprite).spriteFrame = this.three_pic;
						break;
					case 4:
						console.log("touzi-->4");
						this.getComponent(cc.Sprite).spriteFrame = this.four_pic;
						break;
					case 5:
						console.log("touzi-->5");
						this.getComponent(cc.Sprite).spriteFrame = this.five_pic;
						break;
					case 6:
						console.log("touzi-->6");
						this.getComponent(cc.Sprite).spriteFrame = this.six_pic;
						break;
				}
			}
		},

		
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
