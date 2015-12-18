
const ActionTypes = {
    Project: {
        NEW_PROJECT_FROM :"",           //显示新项目添加控件
        BEGIN_EDIT :"",                 //开始编辑项目
        END_EDIT :"",                   //结束项目编辑

        GET_PROJECTS :"",               //向服务器请求项目列表
        POST_PROJECT :"",               //在服务器创建项目
        PUT_PROJECT :"",                //在服务器更新项目
        DELETE_PROJECT :"",             //从服务器删除项目

        SET_PROJECT_ITEMS :"",          //设置项目列表的集合项
        INSERT_PROJECT_ITEM : "",       //项目列表中添加一个新项
        UPDATE_PROJECT_ITEM :"",        //更新列表中的某一项
        REMOVE_PROJECT_ITEM :"",        //删除列表中的项目
    },

    Task:{
        ADD_TASK:"",
        DELETE_TASK:"",
        EDIT_TASK :"",
        COMPLETE_TASK :"",
        COMPLETE_ALL :"", 
        CLEAR_COMPLETED:""
    }
};

const ActionTypeHax: any = ActionTypes;
Object.keys(ActionTypeHax).forEach(category => {
    Object.keys(ActionTypeHax[category]).forEach(actionType => {
        ActionTypeHax[category][actionType] = category + '.' + actionType;
    });
});

module.exports = ActionTypes;