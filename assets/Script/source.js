// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const TYPE = cc.Enum({
	DESERT: 0,
	MINE: 1,
	WHEAT: 2,
	SHEEP: 3,
	WOOD: 4,
	BRICK:5,
});

module.exports = {
	TYPE:TYPE,
};

cc.Class({
    extends: cc.Component,

	properties: {
		desert: cc.SpriteFrame,
		mine: cc.SpriteFrame,
		wheat: cc.SpriteFrame,
		sheep: cc.SpriteFrame,
		wood: cc.SpriteFrame,
		brick: cc.SpriteFrame,

		_type: {
			type: TYPE,
			default: TYPE.DESERT,
			visible:false,
		},
		type: {
			get: function() {
				return this._type;
			},
			set: function (value) {
				this._type = value;
				console.log("type:" + this._type);
				switch (this._type) {
					case TYPE.DESERT:
						console.log("DESERT");
						this.getComponent(cc.Sprite).spriteFrame = this.desert;
						break;
					case TYPE.MINE:
						console.log("MINE");
						this.getComponent(cc.Sprite).spriteFrame = this.mine;
						break;
					case TYPE.WHEAT:
						console.log("WHEAT");
						this.getComponent(cc.Sprite).spriteFrame = this.wheat;
						break;
					case TYPE.SHEEP:
						console.log("SHEEP");
						this.getComponent(cc.Sprite).spriteFrame = this.sheep;
						break;
					case TYPE.WOOD:
						console.log("WOOD");
						this.getComponent(cc.Sprite).spriteFrame = this.wood;
						break;
					case TYPE.BRICK:
						console.log("BRICK");
						this.getComponent(cc.Sprite).spriteFrame = this.brick;
						break;
				}	
			},
		},
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
