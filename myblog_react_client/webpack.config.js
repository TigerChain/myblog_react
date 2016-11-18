module.exports = {
  entry:__dirname+'/app/App.js',
  output:{
    path:__dirname + '/public',
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
			test: /\.js$/,
			exclude: /node_modules/,
	    loader: 'babel',//在webpack的module部分的loaders里进行配置即可
	    }
    ]
  },
  devServer:{
		contentBase: "./public",//本地服务器所加载的页面所在的目录
	  colors: true,//终端中输出结果为彩色
	  historyApiFallback: true,//不跳转
	  inline: true,//实时刷新
	}
}
