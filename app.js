angular.module('app',[])
.controller('appCtrl',['$scope',function($scope){
	$scope.itemList = [
		{arwo01:001,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},
		{arwo01:001,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},
		{arwo01:001,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},
		{arwo01:001,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},
		{arwo01:001,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},
		{arwo01:001,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},
		{arwo01:001,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},
		{arwo01:001,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},
		{arwo01:001,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"}
	]
	      //    导出报表
    $scope.exportToData = function(){
    	console.log(1)
		var studentData = []; //初始化即将要被赋值被导出的数据
		if($scope.itemList&&$scope.itemList.length>0){ //判断要导出的数据
			for(var i=0;i<$scope.itemList.length;i++){//如果有数据的话进行循环
				var student = $scope.itemList[i];//获取数组中的每一笔数据
				studentData.push({
					'机台号':student.arwo01,//把每一笔数据的值放入到对应的栏位中
					'停机原因':student.arwosd02,
					'停机次数':student.arwosd04,
					'停机时长':student.arpc05
				});
			}
			exportToExcel('test',studentData);//excel文件名与到导出的文件
		}else{
            alert('不存在内容');
        };
	}
	function exportToExcel(fileName,targetData){
		return alasql('SELECT * INTO XLSX("'+fileName+'.xlsx",{headers:true}) FROM ?', [targetData]);
	};
	$scope.fileLIst = [];
	//    导入excel
    $scope.newlyIncreased = function(event){
        alasql('SELECT * FROM FILE(?,{headers:false})',[event],function(data){
            for(var i = 1;i<data.length;i++){//因为导入进来的文件标题还在，所以要从第2笔数据开始
                var d = {};
                d.ARS01 = data[i].A;
                d.ARS02 = data[i].B;
                d.ARS03 = data[i].C;
                d.ARS04 = data[i].D;
                d.ARS05 = data[i].E;
                d.ARS06 = data[i].F;
                d.ARS60 = data[i].G;
                $scope.fileLIst.push(d);
            }
            console.log($scope.fileLIst);
        });
    }
}])