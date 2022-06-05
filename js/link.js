function link_lab(school) {
    var win = window.open();

    switch(school) {
        case 'korea':
            win.location = "http://xai.korea.ac.kr/research/research";
            break;
        case 'seoul':
            win.location = "https://gsai.snu.ac.kr/%EA%B5%90%EC%88%98%EC%A7%84-%EB%AA%A9%EB%A1%9D/";
            break;
        case 'sungkyunkwan':
            win.location = "https://supersapiens.skku.edu/main/theme/ict/sub/education2.php";
            break;
        case 'yonsei':
            win.location = "https://ai.yonsei.ac.kr/bbs/board.php?bo_table=sub4_1";
            break;
        case 'chungang':
            win.location = "http://ai.cau.ac.kr/sub02/sub0202.php";
            break;
        case 'postech':
            win.location = "http://ai.postech.ac.kr/research-field";
            break;
        case 'hanyang':
            win.location = "https://nextai.hanyang.ac.kr/professor/";
            break;
        case 'kaist':
            win.location = "https://gsai.kaist.ac.kr/people/";
            break;
        case 'gist':
            win.location = "https://ai.gist.ac.kr/prog/gsMember/ai/P/list.do?gubunName=Faculty&mno=sub02_01";
            break;
        case 'unist':
            win.location = "https://aigs.unist.ac.kr/eng/pages/sub02_01.php";
            break;
        default:
            break;
    }
}

function link_admission(school) {
    var win = window.open();

    switch(school) {
        case 'korea':
            win.location = "https://graduate.korea.ac.kr/matriculate/schedule.html";
            break;
        case 'seoul':
            win.location = "https://admission.snu.ac.kr/graduate/general/notice";
            break;
        case 'sungkyunkwan':
            win.location = "https://gradschool.skku.edu/grad/index.htm";
            break;
        case 'yonsei':
            win.location = "https://graduate.yonsei.ac.kr/graduate/admission/schedule.do";
            break;
        case 'chungang':
            win.location = "http://graduate.cau.ac.kr/2018/index.php";
            break;
        case 'postech':
            win.location = "https://adm-g.postech.ac.kr/";
            break;
        case 'hanyang':
            win.location = "http://www.sgs.hanyang.ac.kr/entrance/calendar.php";
            break;
        case 'kaist':
            win.location = "https://admission.kaist.ac.kr/graduate/";
            break;
        case 'gist':
            win.location = "https://www.gist.ac.kr/gadm/";
            break;
        case 'unist':
            win.location = "https://adm-g.unist.ac.kr/";
            break;
        default:
            break;
    }
}