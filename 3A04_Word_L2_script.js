const _0x2ee7f1=_0x196d;(function(_0xa6e54d,_0x3110e9){const _0x503822=_0x196d,_0x58572e=_0xa6e54d();while(!![]){try{const _0x253940=parseInt(_0x503822(0x1ac))/0x1+parseInt(_0x503822(0x18e))/0x2*(parseInt(_0x503822(0x187))/0x3)+-parseInt(_0x503822(0x1af))/0x4*(-parseInt(_0x503822(0x16c))/0x5)+-parseInt(_0x503822(0x192))/0x6*(parseInt(_0x503822(0x198))/0x7)+-parseInt(_0x503822(0x18f))/0x8*(-parseInt(_0x503822(0x189))/0x9)+parseInt(_0x503822(0x1a7))/0xa+parseInt(_0x503822(0x17c))/0xb*(-parseInt(_0x503822(0x16f))/0xc);if(_0x253940===_0x3110e9)break;else _0x58572e['push'](_0x58572e['shift']());}catch(_0x5bea2a){_0x58572e['push'](_0x58572e['shift']());}}}(_0x40b0,0x77c6e));function _0x196d(_0x4e038d,_0x4766f7){const _0x40b034=_0x40b0();return _0x196d=function(_0x196d22,_0x4565ac){_0x196d22=_0x196d22-0x16a;let _0xeedcb5=_0x40b034[_0x196d22];return _0xeedcb5;},_0x196d(_0x4e038d,_0x4766f7);}const words=[_0x2ee7f1(0x1b4),_0x2ee7f1(0x18a),'쓰레기통','걸레',_0x2ee7f1(0x170),_0x2ee7f1(0x17f),_0x2ee7f1(0x186),'빗자루',_0x2ee7f1(0x19d),'고무장갑',_0x2ee7f1(0x188),'세탁기를\x20돌리다',_0x2ee7f1(0x16a),_0x2ee7f1(0x1a4),_0x2ee7f1(0x190),_0x2ee7f1(0x191),'빨래를\x20널다',_0x2ee7f1(0x17e),'손빨래를\x20하다','걸레질을\x20하다',_0x2ee7f1(0x185)],englishTranslations=[_0x2ee7f1(0x178),_0x2ee7f1(0x1ae),_0x2ee7f1(0x194),'шалны\x20алчуур',_0x2ee7f1(0x196),'гал\x20тогооны\x20угаалгын\x20шингэн',_0x2ee7f1(0x1ad),_0x2ee7f1(0x1a3),_0x2ee7f1(0x18d),_0x2ee7f1(0x17a),'тоос\x20сорогч\x20ажиллуулах',_0x2ee7f1(0x177),'шал\x20шүүрдэх',_0x2ee7f1(0x18c),_0x2ee7f1(0x1a1),_0x2ee7f1(0x172),'угаасан\x20юмаа\x20дэлгэж\x20тавих,\x20тохох',_0x2ee7f1(0x19e),'гараараа\x20угаах',_0x2ee7f1(0x175),_0x2ee7f1(0x1b2)];let currentWordIndex=0x0,currentWord=words[currentWordIndex]['split'](''),clickedLetters=[],previousClickedCells=[],startTime=new Date();function shuffleArray(_0x171920){const _0xed914b=_0x2ee7f1;for(let _0xa7d6fc=_0x171920['length']-0x1;_0xa7d6fc>0x0;_0xa7d6fc--){let _0xddf0ce=Math[_0xed914b(0x1b7)](Math[_0xed914b(0x174)]()*(_0xa7d6fc+0x1));[_0x171920[_0xa7d6fc],_0x171920[_0xddf0ce]]=[_0x171920[_0xddf0ce],_0x171920[_0xa7d6fc]];}return _0x171920;}function createGrid(){const _0x1a4e20=_0x2ee7f1,_0x24bc59=document[_0x1a4e20(0x182)](_0x1a4e20(0x1a6));_0x24bc59[_0x1a4e20(0x1a2)]='';let _0x36649c=[];if(currentWordIndex<words[_0x1a4e20(0x183)]-0x2)_0x36649c=words['slice'](currentWordIndex,currentWordIndex+0x3)['join']('')[_0x1a4e20(0x19a)]('');else currentWordIndex===words[_0x1a4e20(0x183)]-0x2?_0x36649c=words[_0x1a4e20(0x180)](currentWordIndex,currentWordIndex+0x2)['join']('')['concat'](words[_0x1a4e20(0x180)](0x0,0x1)['join'](''))['split'](''):_0x36649c=words['slice'](currentWordIndex,currentWordIndex+0x1)[_0x1a4e20(0x16b)]('')[_0x1a4e20(0x1b3)](words['slice'](0x0,0x2)[_0x1a4e20(0x16b)](''))['split']('');_0x36649c=shuffleArray(_0x36649c);for(let _0x438712=0x0;_0x438712<0x31;_0x438712++){const _0x58a9e1=document['createElement'](_0x1a4e20(0x19b));_0x58a9e1[_0x1a4e20(0x17d)][_0x1a4e20(0x195)](_0x1a4e20(0x1a8)),_0x36649c[_0x438712]?(_0x58a9e1[_0x1a4e20(0x17b)]=_0x36649c[_0x438712],_0x58a9e1[_0x1a4e20(0x1a9)](_0x1a4e20(0x1a0),()=>handleCellClick(_0x58a9e1))):(_0x58a9e1[_0x1a4e20(0x17b)]='',_0x58a9e1[_0x1a4e20(0x17d)][_0x1a4e20(0x195)](_0x1a4e20(0x199))),_0x24bc59['appendChild'](_0x58a9e1);}}function handleCellClick(_0x1525c8){const _0x11b963=_0x2ee7f1;if(clickedLetters[_0x11b963(0x183)]<currentWord[_0x11b963(0x183)]&&_0x1525c8[_0x11b963(0x17b)]){clickedLetters[_0x11b963(0x18b)](_0x1525c8['textContent']),previousClickedCells[_0x11b963(0x18b)](_0x1525c8),_0x1525c8[_0x11b963(0x17b)]='',_0x1525c8[_0x11b963(0x17d)][_0x11b963(0x195)](_0x11b963(0x199)),updateBottomRow();const _0x3e3a06=document['getElementById'](_0x11b963(0x19c));clickedLetters[_0x11b963(0x183)]>0x0&&(_0x3e3a06[_0x11b963(0x17d)][_0x11b963(0x1a5)](_0x11b963(0x179)),_0x3e3a06[_0x11b963(0x179)]=![]),clickedLetters[_0x11b963(0x183)]===currentWord['length']&&checkCompletion();}}function updateBottomRow(){const _0x4ad45a=_0x2ee7f1,_0x49d3ec=document[_0x4ad45a(0x182)](_0x4ad45a(0x193));_0x49d3ec[_0x4ad45a(0x1a2)]='',clickedLetters[_0x4ad45a(0x16d)](_0x3835a0=>{const _0x365fa6=_0x4ad45a,_0x463ada=document[_0x365fa6(0x176)](_0x365fa6(0x19b));_0x463ada['classList'][_0x365fa6(0x195)](_0x365fa6(0x1a8)),_0x463ada[_0x365fa6(0x17b)]=_0x3835a0,_0x49d3ec[_0x365fa6(0x19f)](_0x463ada);});}function _0x40b0(){const _0x410024=['forEach','pop','180eAJuOz','대걸레','getHours','аяга\x20угаах','<br>걸린\x20시간:\x20','random','арчих,\x20зүлгэх','createElement','угаалгын\x20машин\x20ажиллуулах','тоос\x20сорогч','disabled','резинин\x20бээлий','textContent','1302059gadhsL','classList','쓰레기통을\x20비우다','주방\x20세제','slice','end-message','getElementById','length','단어\x201\x20/\x20','먼지를\x20털다','세탁\x20세제','243LbDfhi','청소기를\x20돌리다','58761OoBxPL','세탁기','push','шал\x20арчих','хогийн\x20гаргуул','19346wnwAjw','416LymjHw','쓰레기를\x20버리다','설거지를\x20하다','6HQiDLB','bottomRow','хогийн\x20сав','add','том\x20шалны\x20алчуур','getMinutes','6771107EhHWBz','empty','split','div','undoButton','쓰레받기','хогийн\x20саваа\x20хоослох','appendChild','click','хог\x20хаях','innerHTML','шүүр','바닥을\x20닦다','remove','grid','7687860CnUGDi','cell','addEventListener','\x20:\x20','getDate','745010AvamxJ','угаалгын\x20нунтаг','угаалгын\x20машин','148apRCga','date-time','header','тоос\x20арчих,\x20гөвөх','concat','청소기','\x20/\x20','hidden','floor','바닥을\x20쓸다','join','80625JSNQzv'];_0x40b0=function(){return _0x410024;};return _0x40b0();}function displayDateTime(){const _0x20f46e=_0x2ee7f1,_0x1b9415=document['getElementById'](_0x20f46e(0x1b0)),_0x15ea97=new Date(),_0x1ee2dc=_0x15ea97['getFullYear']()+'년\x20'+(_0x15ea97['getMonth']()+0x1)+'월\x20'+_0x15ea97[_0x20f46e(0x1ab)]()+'일\x20'+_0x15ea97[_0x20f46e(0x171)]()+'시\x20'+_0x15ea97[_0x20f46e(0x197)]()+'분',_0xc8dd28=Math[_0x20f46e(0x1b7)]((_0x15ea97-startTime)/0x3e8),_0x4b0517=Math['floor'](_0xc8dd28/0x3c),_0x598536=_0xc8dd28%0x3c;_0x1b9415[_0x20f46e(0x1a2)]=_0x1ee2dc+_0x20f46e(0x173)+_0x4b0517+'분\x20'+_0x598536+'초';}function checkCompletion(){const _0x549d82=_0x2ee7f1,_0x313e1e=document[_0x549d82(0x182)]('alert');if(clickedLetters[_0x549d82(0x16b)]('')===currentWord['join']('')){_0x313e1e[_0x549d82(0x17d)][_0x549d82(0x195)](_0x549d82(0x1b6));if(currentWordIndex<words[_0x549d82(0x183)]-0x1){currentWordIndex++,currentWord=words[currentWordIndex][_0x549d82(0x19a)](''),clickedLetters=[],previousClickedCells=[];let _0x57f43a=currentWord[_0x549d82(0x183)];document[_0x549d82(0x182)](_0x549d82(0x1b1))[_0x549d82(0x17b)]='단어\x20'+(currentWordIndex+0x1)+_0x549d82(0x1b5)+words[_0x549d82(0x183)]+_0x549d82(0x1aa)+englishTranslations[currentWordIndex]+'\x20('+_0x57f43a+')',createGrid(),updateBottomRow();const _0x507999=document[_0x549d82(0x182)](_0x549d82(0x19c));_0x507999['classList'][_0x549d82(0x195)](_0x549d82(0x179)),_0x507999[_0x549d82(0x179)]=!![];}else document[_0x549d82(0x182)](_0x549d82(0x1a6))[_0x549d82(0x17d)][_0x549d82(0x195)]('hidden'),document[_0x549d82(0x182)](_0x549d82(0x193))['classList'][_0x549d82(0x195)]('hidden'),document[_0x549d82(0x182)]('header')[_0x549d82(0x17d)][_0x549d82(0x195)]('hidden'),document[_0x549d82(0x182)](_0x549d82(0x181))[_0x549d82(0x17d)][_0x549d82(0x1a5)](_0x549d82(0x1b6)),displayDateTime();}else _0x313e1e[_0x549d82(0x17d)][_0x549d82(0x1a5)](_0x549d82(0x1b6)),clickedLetters=[],previousClickedCells=[],updateBottomRow(),createGrid();}document[_0x2ee7f1(0x182)](_0x2ee7f1(0x19c))[_0x2ee7f1(0x1a9)](_0x2ee7f1(0x1a0),()=>{const _0x22185f=_0x2ee7f1;if(clickedLetters['length']>0x0){const _0x1160c7=clickedLetters['pop'](),_0xb94218=previousClickedCells[_0x22185f(0x16e)]();_0xb94218&&(_0xb94218[_0x22185f(0x17b)]=_0x1160c7,_0xb94218[_0x22185f(0x17d)][_0x22185f(0x1a5)](_0x22185f(0x199)));updateBottomRow();if(clickedLetters[_0x22185f(0x183)]===0x0){const _0x8e4b30=document[_0x22185f(0x182)](_0x22185f(0x19c));_0x8e4b30[_0x22185f(0x17d)][_0x22185f(0x195)]('disabled'),_0x8e4b30[_0x22185f(0x179)]=!![];}}});let d=currentWord['length'];document['getElementById']('header')[_0x2ee7f1(0x17b)]=_0x2ee7f1(0x184)+words[_0x2ee7f1(0x183)]+'\x20:\x20'+englishTranslations[0x0]+'\x20('+d+')',createGrid();const currentDate=new Date(),startDate=new Date('2024-11-3'),endDate=new Date('2024-11-4');createGrid();