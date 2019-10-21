Page({
  data: {
    marker: [],
    longitude:116.40385,      //经度
    latitude:39.915521,       //纬度
    scale:18                  //等级越大，打开的越大
  },

  onLoad () {
    wx.showLoading({          //微信小程序api，微信赋予小程序可以调用api
      title: '获取坐标中'
    });
    wx.getLocation({          //手机的GPS
      type: 'gcj02',
      success: (res) => {
        //console.log(res);
        let { longitude, latitude } = res;    //定位的是wifi的基站，用手机流量可获得当前定位
        //console.log(longitude, latitude);
        this.tocreateMarkers(longitude, latitude);
        this.setData({
          longitude, 
          latitude
        }, () => {
          wx.hideLoading()
        })
      }
    })
  },
  onReady () {
    this.mapCtx = wx.createMapContext('myMap');     //地图上下文环境
  },
  toVisit (e) {
    console.log(e)
  },
  toScan () {
    return wx.scanCode({
      success: (res) => {
        console.log(res);
        wx.showModal({
          title: 'scan',
          content: JSON.stringify(res)   //将一个json变为一个字符串文本
        })
      }
    })
  },
  toUser () {},
  toMsg () {},
  toReset () {
    // 当你的地图来来去去的时候，需要重置，回到最初的起点
    this.mapCtx.moveToLocation();
  },
  tocreateMarkers (longitude, latitude) {
    let markers = [
      {
        "id": 1,
        "iconPath": "../../images/map-bicycle.png",
        "latitude": latitude,
        "longitude": longitude,
        "width": 52.5,
        "height": 30,
        "callout": {}
    }
  ]
  this.setData({
    markers
  });
  }
})