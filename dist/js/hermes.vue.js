$(function(){
  var data = {
	    "title": "》",
	    "name": "仪表盘",
	    "icon": "fa-dashboard",
	    "children": [
	        {
	            "name": "RSS源管理",
	            "icon": "fa-laptop",
	            "children": [{"name":"RSS源审核","action": "userrsss","active":"no"},
	                         {"name":"RSS源维护","action": "sysrsss","active":"no"}]
	        },
	        {
	            "name": "订阅邮箱管理",
	            "icon": "fa-laptop",
	            "action": "emais",
              "active":"no"
	        },
	        {
	        	"name": "文章管理",
	        	"icon": "fa-laptop",
	        	"action": "articles",
            "active":"no"
	        }
	    ]
	}

  // define the item component
  Vue.component('item', {
    template: '#menu-template',
    props: {
      model: Object
    },
    data: function () {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children && this.model.children.length
      },
      hasTitle: function() {
        return this.model.title
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }else{
          this.model.active="active";
          console.log(this.model.action);
        }
      }
    }
  })
  // boot up the demo
  var demo = new Vue({
    el: '#demo',
    data: {
      treeData: data
    }
  })
});
