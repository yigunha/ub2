const _0x141f22=_0x1d94;(function(_0x470fab,_0x957e7f){const _0x401c17=_0x1d94,_0x5e9d2c=_0x470fab();while(!![]){try{const _0x550edd=parseInt(_0x401c17(0x1dd))/0x1+parseInt(_0x401c17(0x215))/0x2*(-parseInt(_0x401c17(0x200))/0x3)+parseInt(_0x401c17(0x229))/0x4*(parseInt(_0x401c17(0x1fe))/0x5)+-parseInt(_0x401c17(0x225))/0x6+parseInt(_0x401c17(0x1f1))/0x7*(parseInt(_0x401c17(0x1f0))/0x8)+parseInt(_0x401c17(0x1fd))/0x9+-parseInt(_0x401c17(0x222))/0xa;if(_0x550edd===_0x957e7f)break;else _0x5e9d2c['push'](_0x5e9d2c['shift']());}catch(_0x17e6f2){_0x5e9d2c['push'](_0x5e9d2c['shift']());}}}(_0x3211,0xbeaeb));const words=[_0x141f22(0x1e0),_0x141f22(0x1ee),_0x141f22(0x207),_0x141f22(0x219),_0x141f22(0x1df),_0x141f22(0x1ec),_0x141f22(0x1fb),'액정이\x20깨지다',_0x141f22(0x202),'전원을\x20끄다',_0x141f22(0x223),_0x141f22(0x1e3),_0x141f22(0x210),_0x141f22(0x213),_0x141f22(0x1f8),_0x141f22(0x21d)],englishTranslations=[_0x141f22(0x216),'дэлгэц\x20харагдахгүй\x20байх',_0x141f22(0x20e),_0x141f22(0x214),_0x141f22(0x21e),_0x141f22(0x1de),_0x141f22(0x1e4),_0x141f22(0x201),_0x141f22(0x22a),_0x141f22(0x208),_0x141f22(0x1f2),_0x141f22(0x204),_0x141f22(0x20a),_0x141f22(0x1ef),_0x141f22(0x1e5),'залгуур\x20салгах'];let currentWordIndex=0x0,currentWord=words[currentWordIndex][_0x141f22(0x1e7)](''),clickedLetters=[],previousClickedCells=[],startTime=new Date();function shuffleArray(_0x2d11d3){const _0x2dabf6=_0x141f22;for(let _0x46f2ee=_0x2d11d3[_0x2dabf6(0x21f)]-0x1;_0x46f2ee>0x0;_0x46f2ee--){let _0x397e0d=Math['floor'](Math[_0x2dabf6(0x220)]()*(_0x46f2ee+0x1));[_0x2d11d3[_0x46f2ee],_0x2d11d3[_0x397e0d]]=[_0x2d11d3[_0x397e0d],_0x2d11d3[_0x46f2ee]];}return _0x2d11d3;}function _0x3211(){const _0x2357fb=['хачин\x20дуу\x20гарах','залгуур\x20залгах','undoButton','split','getFullYear','forEach','bottomRow','disabled','수리를\x20맡기다','textContent','화면이\x20안\x20나오다','асахгүй\x20байх','1801776WHpRAi','21oLgOlP','засах','slice','\x20:\x20','join','end-message','grid','플러그를\x20꽂다','innerHTML','createElement','이상한\x20소리가\x20나다','classList','3168873zLZMOo','6563655oVOqEJ','getElementById','1052709dYIYwV','дэлгэц\x20хагарах','전원을\x20켜다','date-time','засварын\x20төв','getMinutes','pop','바람이\x20안\x20나오다','унтраах\x20товчлуур\x20дарах','remove','дуу\x20гарахгүй\x20байх','\x20/\x20','2024-11-3','appendChild','салхи,\x20хий\x20гарахгүй\x20байх','getDate','소리가\x20안\x20나오다','getHours','getMonth','전원이\x20안\x20켜지다','интернет\x20болохгүй\x20байх,\x20холбогдохгүй\x20байх','6wjzNhp','эвдрэх','header','concat','인터넷\x20연결이\x20안\x20되다','2024-11-4','empty','click','플러그를\x20빼다','товчлуур\x20дарах','length','random','floor','592360NZbbma','고치다','hidden','9050718hgkAHX','add','addEventListener','div','4MLMhty','асаах\x20товчлуур\x20дарах','1060939bPxEKk','засварт\x20өгөх','버튼을\x20누르다','고장이\x20나다','push','cell','서비스\x20센터'];_0x3211=function(){return _0x2357fb;};return _0x3211();}function createGrid(){const _0x266d5c=_0x141f22,_0x5b8170=document[_0x266d5c(0x1ff)](_0x266d5c(0x1f7));_0x5b8170[_0x266d5c(0x1f9)]='';let _0x298b91=[];if(currentWordIndex<words[_0x266d5c(0x21f)]-0x2)_0x298b91=words[_0x266d5c(0x1f3)](currentWordIndex,currentWordIndex+0x3)['join']('')[_0x266d5c(0x1e7)]('');else currentWordIndex===words[_0x266d5c(0x21f)]-0x2?_0x298b91=words[_0x266d5c(0x1f3)](currentWordIndex,currentWordIndex+0x2)[_0x266d5c(0x1f5)]('')[_0x266d5c(0x218)](words['slice'](0x0,0x1)[_0x266d5c(0x1f5)](''))[_0x266d5c(0x1e7)](''):_0x298b91=words[_0x266d5c(0x1f3)](currentWordIndex,currentWordIndex+0x1)[_0x266d5c(0x1f5)]('')[_0x266d5c(0x218)](words[_0x266d5c(0x1f3)](0x0,0x2)[_0x266d5c(0x1f5)](''))[_0x266d5c(0x1e7)]('');_0x298b91=shuffleArray(_0x298b91);for(let _0x2b8885=0x0;_0x2b8885<0x31;_0x2b8885++){const _0x275bcd=document[_0x266d5c(0x1fa)]('div');_0x275bcd[_0x266d5c(0x1fc)]['add'](_0x266d5c(0x1e2)),_0x298b91[_0x2b8885]?(_0x275bcd[_0x266d5c(0x1ed)]=_0x298b91[_0x2b8885],_0x275bcd[_0x266d5c(0x227)]('click',()=>handleCellClick(_0x275bcd))):(_0x275bcd[_0x266d5c(0x1ed)]='',_0x275bcd[_0x266d5c(0x1fc)][_0x266d5c(0x226)](_0x266d5c(0x21b))),_0x5b8170[_0x266d5c(0x20d)](_0x275bcd);}}function handleCellClick(_0x2d12e1){const _0x3cbcd4=_0x141f22;if(clickedLetters[_0x3cbcd4(0x21f)]<currentWord[_0x3cbcd4(0x21f)]&&_0x2d12e1['textContent']){clickedLetters[_0x3cbcd4(0x1e1)](_0x2d12e1[_0x3cbcd4(0x1ed)]),previousClickedCells[_0x3cbcd4(0x1e1)](_0x2d12e1),_0x2d12e1['textContent']='',_0x2d12e1[_0x3cbcd4(0x1fc)][_0x3cbcd4(0x226)](_0x3cbcd4(0x21b)),updateBottomRow();const _0x1522da=document['getElementById']('undoButton');clickedLetters[_0x3cbcd4(0x21f)]>0x0&&(_0x1522da[_0x3cbcd4(0x1fc)][_0x3cbcd4(0x209)]('disabled'),_0x1522da['disabled']=![]),clickedLetters['length']===currentWord[_0x3cbcd4(0x21f)]&&checkCompletion();}}function updateBottomRow(){const _0x5a9874=_0x141f22,_0xf88abd=document[_0x5a9874(0x1ff)]('bottomRow');_0xf88abd['innerHTML']='',clickedLetters[_0x5a9874(0x1e9)](_0x49cb20=>{const _0x1d5f59=_0x5a9874,_0x14978c=document['createElement'](_0x1d5f59(0x228));_0x14978c[_0x1d5f59(0x1fc)]['add'](_0x1d5f59(0x1e2)),_0x14978c['textContent']=_0x49cb20,_0xf88abd['appendChild'](_0x14978c);});}function displayDateTime(){const _0xdafe3b=_0x141f22,_0x2ac878=document[_0xdafe3b(0x1ff)](_0xdafe3b(0x203)),_0x249190=new Date(),_0x234a8d=_0x249190[_0xdafe3b(0x1e8)]()+'년\x20'+(_0x249190[_0xdafe3b(0x212)]()+0x1)+'월\x20'+_0x249190[_0xdafe3b(0x20f)]()+'일\x20'+_0x249190[_0xdafe3b(0x211)]()+'시\x20'+_0x249190[_0xdafe3b(0x205)]()+'분',_0x3542ea=Math[_0xdafe3b(0x221)]((_0x249190-startTime)/0x3e8),_0x2f1d0c=Math[_0xdafe3b(0x221)](_0x3542ea/0x3c),_0x34a9c9=_0x3542ea%0x3c;_0x2ac878[_0xdafe3b(0x1f9)]=_0x234a8d+'<br>걸린\x20시간:\x20'+_0x2f1d0c+'분\x20'+_0x34a9c9+'초';}function checkCompletion(){const _0x330408=_0x141f22,_0x53c013=document[_0x330408(0x1ff)]('alert');if(clickedLetters['join']('')===currentWord[_0x330408(0x1f5)]('')){_0x53c013['classList'][_0x330408(0x226)](_0x330408(0x224));if(currentWordIndex<words[_0x330408(0x21f)]-0x1){currentWordIndex++,currentWord=words[currentWordIndex][_0x330408(0x1e7)](''),clickedLetters=[],previousClickedCells=[];let _0x5c52bb=currentWord['length'];document[_0x330408(0x1ff)](_0x330408(0x217))['textContent']='단어\x20'+(currentWordIndex+0x1)+_0x330408(0x20b)+words['length']+_0x330408(0x1f4)+englishTranslations[currentWordIndex]+'\x20('+_0x5c52bb+')',createGrid(),updateBottomRow();const _0x5478d7=document[_0x330408(0x1ff)](_0x330408(0x1e6));_0x5478d7['classList']['add'](_0x330408(0x1eb)),_0x5478d7[_0x330408(0x1eb)]=!![];}else document[_0x330408(0x1ff)]('grid')[_0x330408(0x1fc)][_0x330408(0x226)](_0x330408(0x224)),document['getElementById'](_0x330408(0x1ea))[_0x330408(0x1fc)][_0x330408(0x226)](_0x330408(0x224)),document[_0x330408(0x1ff)]('header')[_0x330408(0x1fc)]['add']('hidden'),document[_0x330408(0x1ff)](_0x330408(0x1f6))[_0x330408(0x1fc)]['remove'](_0x330408(0x224)),displayDateTime();}else _0x53c013[_0x330408(0x1fc)][_0x330408(0x209)]('hidden'),clickedLetters=[],previousClickedCells=[],updateBottomRow(),createGrid();}document['getElementById']('undoButton')[_0x141f22(0x227)](_0x141f22(0x21c),()=>{const _0x1ed013=_0x141f22;if(clickedLetters[_0x1ed013(0x21f)]>0x0){const _0x43564d=clickedLetters[_0x1ed013(0x206)](),_0x3b1d90=previousClickedCells[_0x1ed013(0x206)]();_0x3b1d90&&(_0x3b1d90[_0x1ed013(0x1ed)]=_0x43564d,_0x3b1d90['classList'][_0x1ed013(0x209)](_0x1ed013(0x21b)));updateBottomRow();if(clickedLetters['length']===0x0){const _0x1e8d2d=document[_0x1ed013(0x1ff)](_0x1ed013(0x1e6));_0x1e8d2d[_0x1ed013(0x1fc)][_0x1ed013(0x226)]('disabled'),_0x1e8d2d[_0x1ed013(0x1eb)]=!![];}}});let d=currentWord['length'];function _0x1d94(_0x31c99e,_0x1fac1d){const _0x3211aa=_0x3211();return _0x1d94=function(_0x1d947e,_0x2e2d26){_0x1d947e=_0x1d947e-0x1dd;let _0x2764fb=_0x3211aa[_0x1d947e];return _0x2764fb;},_0x1d94(_0x31c99e,_0x1fac1d);}document[_0x141f22(0x1ff)](_0x141f22(0x217))[_0x141f22(0x1ed)]='단어\x201\x20/\x20'+words[_0x141f22(0x21f)]+'\x20:\x20'+englishTranslations[0x0]+'\x20('+d+')',createGrid();const currentDate=new Date(),startDate=new Date(_0x141f22(0x20c)),endDate=new Date(_0x141f22(0x21a));createGrid();