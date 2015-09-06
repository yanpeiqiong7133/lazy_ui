window.onload=function(){


	/**
	 * ***********************************************************************  Lazy_Switch  *************************
	 */
	var instance_switch =  new Lazy_Switch({
			baseEl : '#instance_switch',
			isOpen : true,
			action : function() {
				/* console.log(instance_switch.val); */
			}
	});


	/**
	 * ************************************************************************ Lazy_datagrid *************************
	 */
	var instance_table = new Lazy_Table({
		isFrontPagination:true,
		baseEl:"#instance_table",
		url:'lazy_datagrid/my.json',
		childrenAttr:'childlist',
		clickable:true,
		datagrid_height:410,
		parse:function(resp){
			return{
				list:resp
			}
		},
		  
		/*data:[{
				name:"tenth",
				number:"10",
				temp:"yanpeiqiong"
				},
				{
				name:"eleven",
				number:"11",
				temp:"tianyuanyuan"
				}
		 }],*/
		  
        onItemClick : function(model) {
        	//alert("clicked!");
       	  
        },
          
        onCheckboxClick:function(models){
        	
        	_(models).each(function(model,index){
        		  /* console.log(model.name); */
        	})  
        },
	
		toolbar:[
			{
				id : 'button1',
				text : '操作1',
				disabled : false,
				handler : function() {					
					alert("clicked[操作1]!");
				}
			},
			{
				id : 'button2',
				text : '操作2',
				disabled : false,
				handler : _(function() {
					alert("clicked[操作2]!");
				}).bind(this)
			},
			{
				id : 'button3',
				text : '操作3',
				disabled : false,
				handler : function() {
					alert("clicked[操作3]!");
				}
			}
		],
		 
		//showNumber:true,			 
		showCheckbox:true,
		isMultiSelect:true,//表示是否支持多选
		columns : [
			{
					//sortable : true,				
					title : 'Name',		
					content : 'name',
					formatter:function(value,rowData,rowIndex){
						return value;
					}
	        }, 
			{
					title : 'Number',				
					content : 'number'
	        },
			{    
				  
					title : 'Engineer',           
					content : 'temp'
	        }
		  
		],
		pager:{
				pageNo:1,
				pageSize:10,
		}
		  
        });	 




        /**
	 * ***********************************************************************  Lazy_Tree  *************************
	 */
	var instance_tree = new Lazy_Tree({
		baseEl:"#instance_tree",		  
		showCheckbox:false,
		imgPosition:"lazy_tree/",
		list:function(){
			return [
				{ "content":"超级管理组", "id":"1", "pid":"-1", "model":{"name":"超级管理组", "type":"admin"}},
				{ "content":"系统管理组", "id":"11", "pid":"1", "model":{"name":"系统管理组", "type":"admin"}},
				{ "content":"安全管理组", "id":"12", "pid":"1", "model":{"name":"安全管理组", "type":"admin"}},
				{ "content":"审计管理组", "id":"13", "pid":"1", "model":{"name":"审计管理组", "type":"admin"}},
				{ "content":"普通用户组", "id":"14", "pid":"1", "model":{"name":"普通用户组", "type":"admin"}},
				{ "content":"系统用户子组1", "id":"111", "pid":"11", "model":{"name":"系统用户子组1", "type":"other"}},
				{ "content":"系统用户子组2", "id":"112", "pid":"11", "model":{"name":"系统用户子组2", "type":"other"}},
				{ "content":"普通用户子组1", "id":"141", "pid":"14", "model":{"name":"普通用户子组1", "type":"other"}},
				{ "content":"普通用户子组2", "id":"142", "pid":"14", "model":{"name":"普通用户子组2", "type":"other"}},
				{ "content":"普通用户子组3", "id":"143", "pid":"14", "model":{"name":"普通用户子组3", "type":"other"}},
				{ "content":"普通用户1", "id":"1421", "pid":"142", "model":{"name":"普通用户1", "type":"other"}},
				{ "content":"普通用户2", "id":"1422", "pid":"142", "model":{"name":"普通用户2", "type":"other"}},
				{ "content":"普通用户3", "id":"1431", "pid":"143", "model":{"name":"普通用户3", "type":"other"}},
				//{ "content":"guest2_sub1_sub1_r", "id":"14228", "pid":"1421", "model":{"name":"guest2_sub1_sub1_r", "type":"other"}}
				//{ "content":"guest2_sub1_sub1_r", "id":"14228", "pid":"1421", "model":{"name":"guest2_sub1_sub1_r", "type":"other"}}
			]
		},				        
		onItemClick:function(model) {
			//alert(model.content);
		},
		  
		rightMenu:{		  
		    list:[
					[
						{"optName":"修改备注名称", "optParam":"j1"},
						{"optName":"举报此用户","optParam":"2"},
						{"optName":"发送电子邮件","optParam":"3"}
					],
					[
						{"optName":"会员快捷功能","optParam":"4","children":[
							{"optName":"设置好友铃音","optParam":"41"},
							{"optName":"设置QQ装扮","optParam":"42"},
							{"optName":"好友上线通知","optParam":"43"}
						]},
						{"optName":"进入QQ空间","optParam":"5"}
					]
				
				],
				
			optFunc:function(param,model){
				/* console.log(param);
				console.log(model); */
				
			}
		  },
		  
		onRightClick:function(){
		}
		  
        });	 
};