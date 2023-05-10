var path;
var title = [],json = [],cont = [];
$(function(){
	path=$("#path").val();
	getAll();
	//画图
	getChar();
});
function getAll()
{
	$.ajax({
		  url:"tu.do?method=tu1",
		  data:'',
		  dataType:'json',
		  async: false,
		  type:'post',
		  success:function(mydata)
		  {
			  $.each(mydata, function(index, xx) {
				    var row = {value:xx.grent,name:xx.aname};
					title[index] = xx.aname;
					cont[index] = xx.grent;
					json.push(row);
				}); 
		  }
	  });		
}

/******************************/
function getChar()
{
	var myChart = echarts.init(document.getElementById('x1'));
	option1 = {
		    title : {
		        text: '地区消费比例图',
		        subtext: '饼状图',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: title
		    },
		    series : [
		        {
		            name: '消费信息',
		            type: 'pie',
		            radius : '50%',
		            center: ['50%', '50%'],
		            data:json,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
	myChart.setOption(option1);
}
