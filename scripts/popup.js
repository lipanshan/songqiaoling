//=================================
// 弹出层打开/关闭     编写：李盼山
//=================================
 $(function (){
     function hrefFn(elem){                     //页面跳转
         if(!elem.attr('href')){return false;}
         var isHref = /^.*\.html$/g.test(elem.attr('href'));
         if(isHref){
             $('#content').load(''+elem.attr('href'),function (){ //加载页面完成后加载需要的js文件
                 $('#content').append('<script src="scripts/popup.js"></script>');
             });
         }
     }
    $('.closeBtn').click(function (ev){ //弹框遮罩关闭/取消
        $('#shadow').hide(0);
        $(this).parents('.selectTitleHead').parent().hide(0);
        $(this).parents('.selectTitleHead').parent().find('input[type="checkbox"]').attr('checked',false);
        $(this).parents('.selectTitleHead').parent().find('input[type="radio"]').attr('checked',false);
        $(this).parents('.selectTitleHead').parent().find('input[type="text"]').val('');
    });
    $('.closeBtn2').click(function (ev){ //关闭预览
        $('#shadow,.loadging,.saveSuccess').hide(0);
        $(this).parents('.selectTitleHead').parent().hide(0);
        $('.textarea2').val('');
    });
    $('.closeBtn3').click(function (ev){ //关闭预览
        $('#shadow,.createPreview,.loadging,.saveSuccess').hide(0);
        $(this).parents('.selectTitleHead').parent().hide(0);
        $('.textarea2').val('');
    });
    $('.cancelBtn').click(function (){
        $('.closeBtn').trigger('click');
    });
    $('#list').delegate('.more','click',function (ev){ //发布管理-修改发布状态
        $(this).nextAll('.modifyReleaseState').toggle(0);
        ev.stopPropagation();
    });
    $('.screenBtn').click(function (ev){                 //高级筛选
        if($('.advancedFilterWrap').css('display') != 'block'){
            $('.advancedFilterWrap').slideDown();
        } else {
            $('.advancedFilterWrap').slideUp();
        }
        ev.preventDefault();
    });
    $('#addNewUser').click(function (){        //新增用户
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.newUser').show(0);
    });
    $('#listContent').delegate('.repassward','click',function (){ //重置密码
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.rePassward').show(0);
    });
    $('#listContent').delegate('.seeBtn','click',function (ev){ //查看
        hrefFn($(this));
        ev.preventDefault();
    });
    $('#listContent').delegate('.delete','click',function (){ //删除一行
        var onf = confirm('您确定删除这条记录吗？');
        if(onf){
            $(this).parents('.tbody').remove();
            $('#listContent').find('.tbody:odd').addClass('bacolor017');
            $('#listContent').find('.tbody:even').removeClass('bacolor017');
        }
    });
    $('#ulListContent').delegate('.delete','click',function (){ //创建发布-删除一行
        var onf = confirm('您确定删除这条记录吗？');
        if(onf){
            $(this).parents('.questionli').remove();
            $('#listContent').find('.tbody:odd').addClass('bacolor017');
            $('#listContent').find('.tbody:even').removeClass('bacolor017');
        }
    });
    $('.addNewRole').click(function (){  //添加新增角色
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.newRoles').show(0);
    });
    $('.addNewRoleAssignRoles').click(function (){  //给用户分配角色
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.assignRoles').show(0);
    });
    $('.addNewGroup').click(function (){  //新增分组
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.newGroup').show(0);
    });
    $('.creatNewItemBank').click(function (){ //创建题库
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.creatQuestionsBank').show(0);
    });
    $('#listContent').delegate('.addItem','click',function (ev){ //题库管理-添加题目
        $('.createPreview').css('height',$(document).height()+'px');
        $('.createPreview').show(0);
        ev.preventDefault();
    });
    $('.addNewItem').click(function (ev){   //添加题目页面--添加题目
        $('.createPreview').css('height',$(document).height()+'px');
        $('.createPreview').show(0);
        ev.preventDefault();
    });
    $('#listContent').delegate('.edit.bgimage','click',function (){ //重命名
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.reName').show(0);
    });
    $('#createPreviewSaveBtn').click(function (ev){ //生成预览保存按钮
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.loadging').show(0);
        $('.saveSuccess').show(0);
        ev.preventDefault();
    });
    $('.creatNewRelease').click(function (ev){  //创建发布
        hrefFn($(this));
        ev.preventDefault();
    });
    $('.releaseBtn').click(function (){  //发布设置
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.releaseSetting').show(0);
    });
    $('.selectQuestionBtn').click(function (){  //选择题目
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('#selectTitles').show(0);
    });
    $('.expandAll').click(function (){   //展开全部
        $('#itemsList').find('li').removeClass('foldQuestiionItem');
    });
    $('#itemsList').delegate('.questiionItem','mouseover',function (){ //鼠标移入编辑题目
        if(!$(this).hasClass('foldQuestiionItem')){
            $(this).addClass('questiionItemHover').siblings().removeClass('questiionItemHover');
        }
    });
    $('#itemsList').delegate('.oAndcBtn','click',function (){ //点击箭头展开/关闭当前题目
        $(this).parents('.questiionItem').toggleClass('foldQuestiionItem');
        $(this).parents('.questiionItem').removeClass('questiionItemHover');
    });
    $('#itemsList').delegate('.edit','click',function (){ //编辑当前题目
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        if($(this).attr('itemType') == 'radioItems'){ //单选题
            $('.radioItems').show(0);
        }
        if($(this).attr('itemType') == 'shortAnswerItems'){ //简答题
            $('.shortAnswerItems').show(0);
        }
    });
    $(document).click(function (){
        $('.modifyReleaseState').hide(0);
    });
 });