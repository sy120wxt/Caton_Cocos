// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const STATE = cc.Enum({
	TOUZI : 0,
	NEXT : 1,
});

cc.Class({
	extends: cc.Component,

	properties: {
		touzi: cc.SpriteFrame,
		next: cc.SpriteFrame,
		backgroundNode: cc.Node,

		_state: {
			type: STATE,
			default: STATE.TOUZI,
			visible: false,
		}
	},

	// LIFE-CYCLE CALLBACKS:

	onLoad() {
		this.iconSet(this._state);
		this.onClick(this._state);
	},

	start() {

	},

	iconSet: function (value) {
		var icon = this.node.getChildByName("icon");
		if (value === STATE.TOUZI) {
			icon.getComponent(cc.Sprite).spriteFrame = this.touzi;
		}
		if (value === STATE.NEXT) {
			icon.getComponent(cc.Sprite).spriteFrame = this.next;
		}
	},


	onClick: function (value) {
		var self = this;
		this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
			if (value === STATE.TOUZI) {
				var touziNum = self.backgroundNode.getComponent("start").initTouzi();
				//根据骰子数找到对应数字的资源块
				
				self.backgroundNode.getComponent("start").findSource(touziNum);
				//骰子图像渐隐，清除，且清除骰子数的数据
				self.backgroundNode.getComponent("start").scheduleOnce(function () {
					this.fade();
				},1);
			}
			if (value === STATE.NEXT) {
				console.log("");
			}
		}, this);
	},

    // update (dt) {},
});
