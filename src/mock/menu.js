
const MENU_LIST = [
  
  {
    entity:{
      id:"1",
      name:"首页",
      value:"home"
    }
  },
  {
    entity:{
      id:"2",
      name:"公务员招考",
      value:"",
    },

    children:[
      {
        entity:{
          id:"2-1",
          name:"选项一"
        }
      },
      {
        entity:{
          id:"2-2",
          name:"选项二"
        }
      },
      {
        entity:{
          id:"2-3",
          name:"选项三"
        }
      },
      {
        entity:{
          id:"2-4",
          name:"选项四",
        },
        
        children:[
          {
            entity:{
              id:"2-4-1",
              name:"选项一",
            },
          },
          {
            entity:{
              id:"2-4-2",
              name:"选项二",
            },
          },
          {
            entity:{
              id:"2-4-3",
              name:"选项三",
            },
          },
        ]
      }
    ]
  },
  {
    entity:{
      id:"3",
      name:"任免业务办理",
      value:"",
    }
  },
  {
    entity:{
      id:"4",
      name:"其他业务",
      value:"other",
    }

  },
  {

    entity:{
      id:"5",
      name:"综合业务管理",
      value:"",
    }
  },
  {
    entity:{
      id:"6",
      name:"业务综合查询",
      value:"",
    }

  },
  {
    entity:{
      id:"7",
      name:"综合查询统计",
      value:"",
    }

  },
  {
    entity:{
      id:"8",
      name:"人员名册与统计",
      value:"",
    }

  },
  {
    entity:{
      id:"9",
      name:"社保及房补账号",
      value:"",
    }

  },
  {
    entity:{
      id:"10",
      name:"相关工资项目补录",
      value:"",
    }
   
  },
  

]


export const initMenu = req => {
  req = JSON.parse(req.body)
  return {list: MENU_LIST}
}

