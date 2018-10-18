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
	negative: 0,
	active:1,
});

const Num = cc.Enum({
	one: 1,
	two: 2,
	three: 3,
	four:4,
});

module.exports = {
	State: State,
	Num:Num,
};

cc.Class({
    extends: cc.Component,

	properties: {

		player1_pic: cc.SpriteFrame,
		player2_pic: cc.SpriteFrame,
		player3_pic: cc.SpriteFrame,
		player4_pic: cc.SpriteFrame,
	
		_woodNum: {
			visible: false,
			default:null,
		},

		woodNum: {
			set: function (value) {
				var wood = this.node.getChildByName("sourceNum").getChildByName("woodNum");
				wood.getComponent(cc.Label).string = value + "";
			},
			get: function(){
				return this._woodNum;
			}
		},

		_brickNum: {
			visible: false,
			default: null,
		},

		brickNum: {
			set: function (value) {
				var wood = this.node.getChildByName("sourceNum").getChildByName("brickNum");
				wood.getComponent(cc.Label).string = value + "";
			},
			get: function () {
				return this._brickNum;
			}
		},

		_mineNum: {
			visible: false,
			default: null,
		},

		mineNum: {
			set: function (value) {
				var wood = this.node.getChildByName("sourceNum").getChildByName("mineNum");
				wood.getComponent(cc.Label).string = value + "";
			},
			get: function () {
				return this._mineNum;
			}
		},

		_wheatNum: {
			visible: false,
			default: null,
		},

		wheatNum: {
			set: function (value) {
				var wood = this.node.getChildByName("sourceNum").getChildByName("wheatNum");
				wood.getComponent(cc.Label).string = value + "";
			},
			get: function () {
				return this._wheatNum;
			}
		},

		_sheepNum: {
			visible: false,
			default: null,
		},

		sheepNum: {
			set: function (value) {
				var wood = this.node.getChildByName("sourceNum").getChildByName("sheepNum");
				wood.getComponent(cc.Label).string = value + "";
			},
			get: function () {
				return this._sheepNum;
			}
		},

		_background: {
			default: null,
			visible:false,
		},

		background: {
			get: function () {
				return this._background;
			},

			set: function (value) {
				console.log("Player-->background");
				this.node.getChildByName("PlayerInfo").color = value;
				this.node.getChildByName("sourcePic").color = value;
				this.node.getChildByName("sourceNum").color = value;
				this.node.color = value;
			}
		},

		_headPic: {
			default: null,
			visible:false,
		},

		headPic: {
			get: function () {
				return this._headPic;
			},
			set:function(value) {
				console.log("Player-->headPic");
				switch (value) {
					case Num.one:
						this.node.getChildByName("PlayerInfo").getChildByName("PlayerPic").getComponent(cc.Sprite).spriteFrame = this.player1_pic;
						break;
					case Num.two:
						this.node.getChildByName("PlayerInfo").getChildByName("PlayerPic").getComponent(cc.Sprite).spriteFrame = this.player2_pic;
						break;
					case Num.three:
						this.node.getChildByName("PlayerInfo").getChildByName("PlayerPic").getComponent(cc.Sprite).spriteFrame = this.player3_pic;
						break;
					case Num.four:
						this.node.getChildByName("PlayerInfo").getChildByName("PlayerPic").getComponent(cc.Sprite).spriteFrame = this.player4_pic;
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
