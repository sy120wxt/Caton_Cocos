// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
	extends: cc.Component,

	properties: {
		touzi: cc.Prefab,

		_touziNum: {
			default: 0,
			type: cc.Integer,
			visible: false,
		},
		touziNum: {
			get: function () {
				return this._touziNum;
			},
			set: function (value) {
				this._touziNum = value;
			},

			visible: false,
		},

		_touziLayout: {
			type: cc.Node,
			default: null,
			visible: false
		}
	},

	// LIFE-CYCLE CALLBACKS:

	// onLoad () {},

	start() {
		//this.initTouzi();
		//this.findSource(this.touziNum);
	},

	//第一步：摇骰子，并把两个骰子显示在touziLayout中
	initTouzi: function () {
		this.Touzi = require("touzi");
		this.touziLayout = new cc.Node();
		this.touziLayout.addComponent(cc.Layout);
		this.touziLayout.getComponent(cc.Layout).type = cc.Layout.Type.HORIZONTAL;
		this.touziLayout.position = cc.p(0, 450);
		this.touziLayout.getComponent(cc.Layout).resizeMode = cc.Layout.ResizeMode.CONTAINER;
		this.touziLayout.getComponent(cc.Layout).spacingX = 10;
		this.touziLayout.width = 120;
		this.touziLayout.height = 50;
		this.node.addChild(this.touziLayout);
		for (var i = 0; i < 2; i++) {
			var touzi = cc.instantiate(this.touzi);
			var rdom = Math.floor(Math.random() * 6) + 1;
			touzi.getComponent("touzi").num = rdom;
			console.log("start-->rdom" + rdom);
			touzi.scale = 0.5;
			this.touziLayout.addChild(touzi);
			this.touziNum = this.touziNum + rdom;
			console.log("initTouzi-->touziNum:" + this.touziNum);
		}
		return this.touziNum;
	},

	//第二步，找到骰子对应数字的资源块：
	findSource: function (value) {
		//资源数字数组
		var sourceNumArray = this.node.getComponent("game").sourceNumArray;
		//资源块数组
		var tileSourceNum = this.node.getComponent("game").tileSourceNum;
		//
		for (var i = 0; i < sourceNumArray.length; i++) {
			if (sourceNumArray[i] === value) {
				console.log("start--->sourceType:" + tileSourceNum[i].getComponent("source").type);
				console.log("start--->sourcePosition" + tileSourceNum[i].position);
			}
		}
	},

	//第三步，把骰子的layout渐隐,骰子清除,touziNum的数据清除(未来用在计时器中调用)
	fade: function () {
		var action = cc.fadeOut(1.5);
		this.touziLayout.runAction(action);
		setTimeout(function () {
			this.touziLayout.destroy();
		}.bind(this), 1500);
		this.touziNum = 0;
	},

    // update (dt) {},
});
