// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const State = cc.Enum({
	ableToChoose: 1,
	unableToChoose: 0,
});

const roadNum = cc.Enum({
	none: 0,
	one:1,
});

module.exports = {
	State: State,
	roadNum:roadNum,
};

cc.Class({
    extends: cc.Component,

	properties: {
		roadpic: cc.SpriteFrame,
		_state: {
			type: State,
			default: State.ableToChoose,//————————这里为了测试，做成了默认可以选择
			visible:false,
		},
		state: {
			get: function () {
				return this._state;
			},
			set: function (value) {
				this._state = value;
			}
		},

		_num: {
			type: roadNum,
			default: roadNum.none,
			visible:false,
		},
		num: {
			get: function () {
				return this._num;
			},
			set: function (value) {
				this._num = value;
				if (this._num === roadNum.none) {
					this.getComponent(cc.Sprite).spriteFrame = null;
				}
				else if (this._num === roadNum.one ) {
					this.getComponent(cc.Sprite).spriteFrame = this.roadpic;
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
