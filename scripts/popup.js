//=================================
// �������/�ر�     ��д������ɽ
//=================================
 $(function (){
     function hrefFn(elem){                     //ҳ����ת
         if(!elem.attr('href')){return false;}
         var isHref = /^.*\.html$/g.test(elem.attr('href'));
         if(isHref){
             $('#content').load(''+elem.attr('href'),function (){ //����ҳ����ɺ������Ҫ��js�ļ�
                 $('#content').append('<script src="scripts/popup.js"></script>');
             });
         }
     }
    $('.closeBtn').click(function (ev){ //�������ֹر�/ȡ��
        $('#shadow').hide(0);
        $(this).parents('.selectTitleHead').parent().hide(0);
        $(this).parents('.selectTitleHead').parent().find('input[type="checkbox"]').attr('checked',false);
        $(this).parents('.selectTitleHead').parent().find('input[type="radio"]').attr('checked',false);
        $(this).parents('.selectTitleHead').parent().find('input[type="text"]').val('');
    });
    $('.closeBtn2').click(function (ev){ //�ر�Ԥ��
        $('#shadow,.loadging,.saveSuccess').hide(0);
        $(this).parents('.selectTitleHead').parent().hide(0);
        $('.textarea2').val('');
    });
    $('.closeBtn3').click(function (ev){ //�ر�Ԥ��
        $('#shadow,.createPreview,.loadging,.saveSuccess').hide(0);
        $(this).parents('.selectTitleHead').parent().hide(0);
        $('.textarea2').val('');
    });
    $('.cancelBtn').click(function (){
        $('.closeBtn').trigger('click');
    });
    $('#list').delegate('.more','click',function (ev){ //��������-�޸ķ���״̬
        $(this).nextAll('.modifyReleaseState').toggle(0);
        ev.stopPropagation();
    });
    $('.screenBtn').click(function (ev){                 //�߼�ɸѡ
        if($('.advancedFilterWrap').css('display') != 'block'){
            $('.advancedFilterWrap').slideDown();
        } else {
            $('.advancedFilterWrap').slideUp();
        }
        ev.preventDefault();
    });
    $('#addNewUser').click(function (){        //�����û�
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.newUser').show(0);
    });
    $('#listContent').delegate('.repassward','click',function (){ //��������
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.rePassward').show(0);
    });
    $('#listContent').delegate('.seeBtn','click',function (ev){ //�鿴
        hrefFn($(this));
        ev.preventDefault();
    });
    $('#listContent').delegate('.delete','click',function (){ //ɾ��һ��
        var onf = confirm('��ȷ��ɾ��������¼��');
        if(onf){
            $(this).parents('.tbody').remove();
            $('#listContent').find('.tbody:odd').addClass('bacolor017');
            $('#listContent').find('.tbody:even').removeClass('bacolor017');
        }
    });
    $('#ulListContent').delegate('.delete','click',function (){ //��������-ɾ��һ��
        var onf = confirm('��ȷ��ɾ��������¼��');
        if(onf){
            $(this).parents('.questionli').remove();
            $('#listContent').find('.tbody:odd').addClass('bacolor017');
            $('#listContent').find('.tbody:even').removeClass('bacolor017');
        }
    });
    $('.addNewRole').click(function (){  //���������ɫ
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.newRoles').show(0);
    });
    $('.addNewRoleAssignRoles').click(function (){  //���û������ɫ
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.assignRoles').show(0);
    });
    $('.addNewGroup').click(function (){  //��������
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.newGroup').show(0);
    });
    $('.creatNewItemBank').click(function (){ //�������
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.creatQuestionsBank').show(0);
    });
    $('#listContent').delegate('.addItem','click',function (ev){ //������-�����Ŀ
        $('.createPreview').css('height',$(document).height()+'px');
        $('.createPreview').show(0);
        ev.preventDefault();
    });
    $('.addNewItem').click(function (ev){   //�����Ŀҳ��--�����Ŀ
        $('.createPreview').css('height',$(document).height()+'px');
        $('.createPreview').show(0);
        ev.preventDefault();
    });
    $('#listContent').delegate('.edit.bgimage','click',function (){ //������
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.reName').show(0);
    });
    $('#createPreviewSaveBtn').click(function (ev){ //����Ԥ�����水ť
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.loadging').show(0);
        $('.saveSuccess').show(0);
        ev.preventDefault();
    });
    $('.creatNewRelease').click(function (ev){  //��������
        hrefFn($(this));
        ev.preventDefault();
    });
    $('.releaseBtn').click(function (){  //��������
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('.releaseSetting').show(0);
    });
    $('.selectQuestionBtn').click(function (){  //ѡ����Ŀ
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        $('#selectTitles').show(0);
    });
    $('.expandAll').click(function (){   //չ��ȫ��
        $('#itemsList').find('li').removeClass('foldQuestiionItem');
    });
    $('#itemsList').delegate('.questiionItem','mouseover',function (){ //�������༭��Ŀ
        if(!$(this).hasClass('foldQuestiionItem')){
            $(this).addClass('questiionItemHover').siblings().removeClass('questiionItemHover');
        }
    });
    $('#itemsList').delegate('.oAndcBtn','click',function (){ //�����ͷչ��/�رյ�ǰ��Ŀ
        $(this).parents('.questiionItem').toggleClass('foldQuestiionItem');
        $(this).parents('.questiionItem').removeClass('questiionItemHover');
    });
    $('#itemsList').delegate('.edit','click',function (){ //�༭��ǰ��Ŀ
        $('#shadow').css('height',$(document).height()+'px');
        $('#shadow').show(0);
        if($(this).attr('itemType') == 'radioItems'){ //��ѡ��
            $('.radioItems').show(0);
        }
        if($(this).attr('itemType') == 'shortAnswerItems'){ //�����
            $('.shortAnswerItems').show(0);
        }
    });
    $(document).click(function (){
        $('.modifyReleaseState').hide(0);
    });
 });