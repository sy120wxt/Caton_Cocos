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
		tile: cc.Prefab,
		house: cc.Prefab,
		road: cc.Prefab,
		player: cc.Prefab,
		num:cc.Prefab,

		

		tileNum: 19,
		desertNum: 1,
		mineNum: 3,
		wheatNum: 4,
		sheepNum: 4,
		woodNum: 4,
		brickNum: 3,

		sourceNumArray: [],
		tileSourceNum:[],

		wood: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

	onLoad() {
		this.initGame();
	},

	initGame: function () {
		this.Tile = require("source");
		//�������飺һ���и������͵���Դ���������������ƺ��ˣ�������������Ŀǰδ������̬��������Դ����
		var allResource = [
			this.Tile.TYPE.DESERT,
			this.Tile.TYPE.BRICK, this.Tile.TYPE.BRICK, this.Tile.TYPE.BRICK,
			this.Tile.TYPE.WOOD, this.Tile.TYPE.WOOD, this.Tile.TYPE.WOOD, this.Tile.TYPE.WOOD,
			this.Tile.TYPE.MINE, this.Tile.TYPE.MINE, this.Tile.TYPE.MINE,
			this.Tile.TYPE.WHEAT, this.Tile.TYPE.WHEAT, this.Tile.TYPE.WHEAT, this.Tile.TYPE.WHEAT,
			this.Tile.TYPE.SHEEP, this.Tile.TYPE.SHEEP, this.Tile.TYPE.SHEEP, this.Tile.TYPE.SHEEP];

		//��һ�����飬��ÿ����Դ�����ص�λ��д��ȥ
		//�Ȼ�ȡ��Դ�����صĿ��
		var tileWidth = cc.instantiate(this.tile).width;
		//����һ��ȫ�ֱ���tileWidth�������������ڵ�λ����Ϊ�ο�
		this.tileWidth = tileWidth;
		console.log("width:" + tileWidth);
		//��Դ�����ص�X,Y����
		var tilePositionX = [
			0, 0, 0, 0, 0,
			0.75 * tileWidth, 0.75 * tileWidth, 0.75 * tileWidth, 0.75 * tileWidth,
			1.5 * tileWidth, 1.5 * tileWidth, 1.5 * tileWidth,
			-0.75 * tileWidth, -0.75 * tileWidth, -0.75 * tileWidth, -0.75 * tileWidth,
			-1.5 * tileWidth, -1.5 * tileWidth, -1.5 * tileWidth,
		];
		var tilePositionY = [
			2 * tileWidth, 1 * tileWidth, 0, -1 * tileWidth, -2 * tileWidth,
			0.5 * tileWidth + tileWidth, 0.5 * tileWidth, -0.5 * tileWidth, -0.5 * tileWidth - tileWidth,
			tileWidth, 0, -1 * tileWidth,
			0.5 * tileWidth + tileWidth, 0.5 * tileWidth, -0.5 * tileWidth, -0.5 * tileWidth - tileWidth,
			tileWidth, 0, -1 * tileWidth,
		];
		//��������Դ���ֵķ�������鼯�ϣ�this.tileSourceNum
		//��Դ���ֵ����鼯�ϣ�
		this.sourceNum = require("sourceNum");
		var sourceNum = [
			this.sourceNum.NUM.TWO,
			this.sourceNum.NUM.THREE, this.sourceNum.NUM.THREE,
			this.sourceNum.NUM.FOUR, this.sourceNum.NUM.FOUR,
			this.sourceNum.NUM.FIVE, this.sourceNum.NUM.FIVE,
			this.sourceNum.NUM.SIX, this.sourceNum.NUM.SIX,
			this.sourceNum.NUM.EIGHT, this.sourceNum.NUM.EIGHT,
			this.sourceNum.NUM.NINE, this.sourceNum.NUM.NINE,
			this.sourceNum.NUM.TEN, this.sourceNum.NUM.TEN,
			this.sourceNum.NUM.ELEVEN, this.sourceNum.NUM.ELEVEN,
			this.sourceNum.NUM.TWELVE,
		];

		//����һ�����飬��¼���֮����������ֵ����飬�����ҵ����ֵ�λ��------------------------------------------
		
		//ѭ�������Դ������ģ�飬��ȷ�����ǵ�λ��
		for (let i = 0; i < this.tileNum; i++) {
			let tile = cc.instantiate(this.tile);
			console.log("��width"+tile.width);
			this.node.addChild(tile);
			let rdom = Math.floor(Math.random() * allResource.length);
			tile.getComponent("source").type = allResource[rdom];
			console.log(allResource[rdom]);			
			tile.setPosition(cc.p(tilePositionX[i], tilePositionY[i]));
			if (allResource[rdom] != this.Tile.TYPE.DESERT) {
				console.log("allResource-->"+allResource[rdom]);
				console.log("tileSourceNum--->push");
				this.tileSourceNum.push(tile);
			}
			allResource.splice(rdom, 1);
		}

		//ѭ�������Դ����ģ�飬��ȷ�����ǵ�λ�ã�
		for (var i = 0; i < this.tileSourceNum.length; i++) {
			console.log("tileSourceNum.length-->" + this.tileSourceNum.length);
			let num = cc.instantiate(this.num);
			let source = this.tileSourceNum[i];
			let rdom = Math.floor(Math.random() * sourceNum.length);
			num.getComponent("sourceNum").num = sourceNum[rdom];
			
			source.addChild(num);
			//this.node.addChild(num);
			num.setPosition(cc.p(0, 0));
			//�����������У�����������֣���Ӧ��this.tileSourceNum�����е�sourceԪ�أ�
			this.sourceNumArray.push(sourceNum[rdom]);
			sourceNum.splice(rdom, 1);
		}

		this.buildHouse();
		this.buildRoad();
		this.PlayerInfo();
	},
	//�������ݵķ���
	buildHouse: function () {
		this.House = require("house");		
		//����һ�����飬ȷ���������ݵ�λ��
		var positionX = [];
		var positionY = [];
		//��Դ����Ŀ��Ϊw
		var w = this.tileWidth;
		//�ֲ����������,��һ����������ϵ���Ͻǵķ��������
		var X1 = [
			0.25 * w, 0.25 * w, 0.25 * w,
			0.5*w, 0.5*w,
			w, w,
			1.25 * w, 1.25 * w,
			1.75 * w, 1.75 * w,
			2 * w
		];
		var Y1 = [
			0.5 * w, 1.5 * w, 2.5 * w,
			w, 2 * w,
			w, 2 * w,
			0.5 * w, 1.5 * w,
			0.5 * w, 1.5 * w,
			w
		];
		//�ڶ����������е�X����-1���Լ���Ӧ��Y����ӵ���Ӧ��X,Y������
		var X1length = X1.length;
		for (let i = 0; i < X1length; i++) {
			X1.push(X1[i] * (-1));
			Y1.push(Y1[i]);
		}
		//�������������е�Y����-1���Լ���Ӧ��X����ӵ���Ӧ��X,Y������
		X1length = X1.length;
		for (var i = 0; i < X1length; i++) {
			X1.push(X1[i]);
			Y1.push(Y1[i]*(-1));
		}
		//���Ĳ�����yΪ0��6����������뵽������
		X1.push(-2 * w);
		X1.push(-1 * w);
		X1.push(-0.5 * w);
		X1.push(2 * w);
		X1.push(1 * w);
		X1.push(0.5 * w);
		Y1.push(0);
		Y1.push(0);
		Y1.push(0);
		Y1.push(0);
		Y1.push(0);
		Y1.push(0);

		//ѭ�����house�ڵ㣬��������������������Ϊ�˲��ԣ�������ΪhouseLevelΪ1��
		for (var i = 0; i < X1.length; i++) {
			var house = cc.instantiate(this.house);
			this.node.addChild(house);
			house.getComponent("house").level = this.House.houseLevel.LEVEL_ONE;
			house.setPosition(cc.p(X1[i],Y1[i]));
		}
	},

	//������·�ķ���
	buildRoad: function () {
		this.Road = require("road");
		var w = this.tileWidth;
		//��ȷ���������ϵ�·��λ������
		var pXup = [
			-2 * w, -2 * w, -2 * w,
			-1.25 * w, -1.25 * w, -1.25 * w, -1.25 * w,
			-0.5 * w, -0.5 * w, -0.5 * w, -0.5 * w, -0.5 * w,
			0.25 * w, 0.25 * w, 0.25 * w, 0.25 * w, 0.25 * w,
			w, w, w, w,
			1.75 * w, 1.75 * w, 1.75 * w,
		];
		var pYup = [
			w, 0, -1 * w,
			1.5 * w, 0.5 * w, -0.5 * w, -1.5 * w,
			2 * w, w,0, -1 * w, -2 * w,
			1.5 * w, 0.5 * w, -0.5 * w, -1.5 * w, -2.5 * w,
			w, 0, -1 * w, -2 * w,
			0.5 * w, -0.5 * w, -1.5 * w,
		];
		for (var i = 0; i < pXup.length; i++) {
			var road = cc.instantiate(this.road);
			road.setPosition(cc.p(pXup[i], pYup[i]));
			road.getComponent("road").num = this.Road.roadNum.one;
			road.skewX = 26.5;
			this.node.addChild(road);
		}
		//ȷ���������µ�·��λ������
		var pXdown = [
			-1.75 * w, -1.75 * w, -1.75 * w,
			-1 * w, -1 * w, -1 * w, -1 * w,
			-0.25 * w, -0.25 * w, -0.25 * w, -0.25 * w, -0.25 * w,
			0.5 * w, 0.5 * w, 0.5 * w, 0.5 * w, 0.5 * w,
			1.25 * w, 1.25 * w, 1.25 * w, 1.25 * w,
			2 * w, 2 * w, 2 * w,
		];
		var pYdown = [
			0.5 * w, -0.5 * w, -1.5 * w,
			w, 0, -1 * w, -2 * w,
			1.5 * w, 0.5 * w, -0.5 * w, -1.5 * w, -2.5 * w,
			2 * w, w, 0, -1 * w, -2 * w,
			1.5 * w, 0.5 * w, -0.5 * w, -1.5 * w,
			w, 0, -1 * w,
		];
		for (var i = 0; i < pXdown.length; i++) {
			var road = cc.instantiate(this.road);
			road.setPosition(cc.p(pXdown[i], pYdown[i]));
			road.getComponent("road").num = this.Road.roadNum.one;
			road.skewX = -26.5;
			this.node.addChild(road);
		}
		//�����·
		var pXlateral = [
			-1.75 * w, -1.75 * w, -1.75 * w, -1.75 * w,
			-1 * w, -1 * w, -1 * w, -1 * w, -1 * w,
			-0.25 * w, -0.25 * w, -0.25 * w, -0.25 * w, -0.25 * w, -0.25 * w,
			0.5 * w, 0.5 * w, 0.5 * w, 0.5 * w, 0.5 * w, 
			1.25 * w, 1.25 * w, 1.25 * w, 1.25 * w,
		];
		var pYlateral = [
			1.5 * w, 0.5 * w, -0.5 * w, -1.5 * w,
			2 * w, w, 0, -1 * w, -2 * w,
			2.5 * w, 1.5 * w, 0.5 * w, -0.5 * w, -1.5 * w, -2.5 * w,
			2 * w, w, 0, -1 * w, -2 * w,
			1.5 * w, 0.5 * w, -0.5 * w, -1.5 * w,
		];

		for (var i = 0; i < pXdown.length; i++) {
			var road = cc.instantiate(this.road);
			road.setPosition(cc.p(pXlateral[i], pYlateral[i]));
			road.getComponent("road").num = this.Road.roadNum.one;
			road.rotation = 90;
			this.node.addChild(road);
		}
	},

	//����������
	PlayerInfo: function () {
		this.Player = require("Player");
		//PLAYER1
		var player1 = cc.instantiate(this.player);
		var player1_fc = player1.getComponent("Player");
		player1_fc.woodNum = 0;
		player1_fc.brickNum = 0;
		player1_fc.sheepNum = 0;
		player1_fc.mineNum = 0;
		player1_fc.wheatNum = 0;
		this.node.addChild(player1);
		
		player1.setPosition(cc.p(-630,-350));
		player1_fc.background = cc.Color.GREEN;
		player1_fc.headPic = this.Player.Num.one;
		//PLAYER2
		var player2 = cc.instantiate(this.player);
		var player2_fc = player2.getComponent("Player");
		player2_fc.woodNum = 0;
		player2_fc.brickNum = 0;
		player2_fc.sheepNum = 0;
		player2_fc.mineNum = 0;
		player2_fc.wheatNum = 0;
		this.node.addChild(player2);

		player2.setPosition(cc.p(-630, -190));
		player2_fc.background = cc.Color.RED;
		player2_fc.headPic = this.Player.Num.two;
		//PLAYER3
		var player3 = cc.instantiate(this.player);
		var player3_fc = player3.getComponent("Player");
		player3_fc.woodNum = 0;
		player3_fc.brickNum = 0;
		player3_fc.sheepNum = 0;
		player3_fc.mineNum = 0;
		player3_fc.wheatNum = 0;
		this.node.addChild(player3);

		player3.setPosition(cc.p(-630, -30));
		player3_fc.background = cc.Color.YELLOW;
		player3_fc.headPic = this.Player.Num.three;
		//PLAYER4
		var player4 = cc.instantiate(this.player);
		var player4_fc = player4.getComponent("Player");
		player4_fc.woodNum = 0;
		player4_fc.brickNum = 0;
		player4_fc.sheepNum = 0;
		player4_fc.mineNum = 0;
		player4_fc.wheatNum = 0;
		this.node.addChild(player4);

		player4.setPosition(cc.p(-630, 130));
		player4_fc.background = cc.Color.ORANGE;
		player4_fc.headPic = this.Player.Num.four;
	},

    start () {

    },

    // update (dt) {},
});
