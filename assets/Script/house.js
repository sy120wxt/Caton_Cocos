// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html


const houseLevel = cc.Enum({
	LEVEL_ZERO:0,
	LEVEL_ONE : 1,
	LEVEL_TWO:2,
});

const State = cc.Enum({
	ableToChoose: 1,
	unableToChoose:0,
});

module.exports = {
	houseLevel: houseLevel,
};

cc.Class({
    extends: cc.Component,

	properties: {
		level_one_pic: cc.SpriteFrame,
		level_two_pic: cc.SpriteFrame,
		shadow:cc.SpriteFrame,
		_level: {
			default: houseLevel.LEVEL_ZERO,
			type: houseLevel,
			visible:false,
		},

		level: {
			get: function () {
				return this._level;
			},
			set: function (level) {
				console.log("house-->level");
				this._level = level;
				switch (this._level) {
					case houseLevel.LEVEL_ONE:
						console.log("house-->levelone");
						this.getComponent(cc.Sprite).spriteFrame = this.level_one_pic;
						break;
					case houseLevel.LEVEL_TWO:
						console.log("house-->leveltwo");
						this.getComponent(cc.Sprite).spriteFrame = this.level_two_pic;
						break;
				}
			},
		},

		_state: {
			type: State,
			default: State.ableToChoose,//——————————这里为了测试，先做成都可以选择，
			visible:false,
		},

		state: {
			get: function () {
				return this._state;
			},
			set: function (value) {
				this._state = value;
			},
		}
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
