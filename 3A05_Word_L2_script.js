const _0x2b80b7=_0x1140;(function(_0x4592c0,_0x36e6b9){const _0x5b1f1f=_0x1140,_0x2e6c8c=_0x4592c0();while(!![]){try{const _0x56de27=parseInt(_0x5b1f1f(0x191))/0x1*(parseInt(_0x5b1f1f(0x1b1))/0x2)+-parseInt(_0x5b1f1f(0x193))/0x3*(parseInt(_0x5b1f1f(0x1af))/0x4)+parseInt(_0x5b1f1f(0x178))/0x5+parseInt(_0x5b1f1f(0x186))/0x6*(-parseInt(_0x5b1f1f(0x1a0))/0x7)+parseInt(_0x5b1f1f(0x1aa))/0x8+-parseInt(_0x5b1f1f(0x1ae))/0x9*(-parseInt(_0x5b1f1f(0x1a7))/0xa)+-parseInt(_0x5b1f1f(0x182))/0xb;if(_0x56de27===_0x36e6b9)break;else _0x2e6c8c['push'](_0x2e6c8c['shift']());}catch(_0x50d519){_0x2e6c8c['push'](_0x2e6c8c['shift']());}}}(_0x1f8a,0xba245));const words=[_0x2b80b7(0x18d),_0x2b80b7(0x173),'사이즈가\x20딱\x20맞다','망가지다',_0x2b80b7(0x176),'사이즈가\x20안\x20맞다',_0x2b80b7(0x1a5),'얼룩이\x20있다',_0x2b80b7(0x19c),_0x2b80b7(0x185),_0x2b80b7(0x1b8),_0x2b80b7(0x175),_0x2b80b7(0x1b9),_0x2b80b7(0x174),_0x2b80b7(0x187),_0x2b80b7(0x17a)],englishTranslations=[_0x2b80b7(0x19a),_0x2b80b7(0x1a9),_0x2b80b7(0x16e),'эвдрэх',_0x2b80b7(0x1a1),_0x2b80b7(0x172),_0x2b80b7(0x1b2),_0x2b80b7(0x1ad),_0x2b80b7(0x1b7),'картаар\x20тооцоо\x20хийх',_0x2b80b7(0x19e),_0x2b80b7(0x170),_0x2b80b7(0x17d),_0x2b80b7(0x181),_0x2b80b7(0x192),_0x2b80b7(0x184)];let currentWordIndex=0x0,currentWord=words[currentWordIndex][_0x2b80b7(0x18b)](''),clickedLetters=[],previousClickedCells=[],startTime=new Date();function shuffleArray(_0x17254d){const _0x5de2e7=_0x2b80b7;for(let _0x214b1a=_0x17254d['length']-0x1;_0x214b1a>0x0;_0x214b1a--){let _0x3700f9=Math[_0x5de2e7(0x19b)](Math[_0x5de2e7(0x198)]()*(_0x214b1a+0x1));[_0x17254d[_0x214b1a],_0x17254d[_0x3700f9]]=[_0x17254d[_0x3700f9],_0x17254d[_0x214b1a]];}return _0x17254d;}function createGrid(){const _0x3f2cd6=_0x2b80b7,_0x150ca0=document[_0x3f2cd6(0x179)](_0x3f2cd6(0x1a2));_0x150ca0[_0x3f2cd6(0x190)]='';let _0xe16116=[];if(currentWordIndex<words[_0x3f2cd6(0x1b4)]-0x2)_0xe16116=words[_0x3f2cd6(0x19f)](currentWordIndex,currentWordIndex+0x3)[_0x3f2cd6(0x195)]('')[_0x3f2cd6(0x18b)]('');else currentWordIndex===words[_0x3f2cd6(0x1b4)]-0x2?_0xe16116=words[_0x3f2cd6(0x19f)](currentWordIndex,currentWordIndex+0x2)['join']('')[_0x3f2cd6(0x196)](words[_0x3f2cd6(0x19f)](0x0,0x1)[_0x3f2cd6(0x195)](''))[_0x3f2cd6(0x18b)](''):_0xe16116=words[_0x3f2cd6(0x19f)](currentWordIndex,currentWordIndex+0x1)[_0x3f2cd6(0x195)]('')[_0x3f2cd6(0x196)](words[_0x3f2cd6(0x19f)](0x0,0x2)['join'](''))[_0x3f2cd6(0x18b)]('');_0xe16116=shuffleArray(_0xe16116);for(let _0x33e480=0x0;_0x33e480<0x31;_0x33e480++){const _0x129e86=document[_0x3f2cd6(0x1a4)](_0x3f2cd6(0x16d));_0x129e86['classList'][_0x3f2cd6(0x17f)](_0x3f2cd6(0x18f)),_0xe16116[_0x33e480]?(_0x129e86[_0x3f2cd6(0x1b0)]=_0xe16116[_0x33e480],_0x129e86[_0x3f2cd6(0x1a6)]('click',()=>handleCellClick(_0x129e86))):(_0x129e86[_0x3f2cd6(0x1b0)]='',_0x129e86['classList'][_0x3f2cd6(0x17f)]('empty')),_0x150ca0[_0x3f2cd6(0x1ab)](_0x129e86);}}function handleCellClick(_0x300f6c){const _0x17b906=_0x2b80b7;if(clickedLetters[_0x17b906(0x1b4)]<currentWord[_0x17b906(0x1b4)]&&_0x300f6c[_0x17b906(0x1b0)]){clickedLetters[_0x17b906(0x17c)](_0x300f6c[_0x17b906(0x1b0)]),previousClickedCells[_0x17b906(0x17c)](_0x300f6c),_0x300f6c['textContent']='',_0x300f6c['classList']['add'](_0x17b906(0x199)),updateBottomRow();const _0x16b2cd=document[_0x17b906(0x179)](_0x17b906(0x1a8));clickedLetters[_0x17b906(0x1b4)]>0x0&&(_0x16b2cd[_0x17b906(0x17b)][_0x17b906(0x1b3)](_0x17b906(0x197)),_0x16b2cd[_0x17b906(0x197)]=![]),clickedLetters[_0x17b906(0x1b4)]===currentWord[_0x17b906(0x1b4)]&&checkCompletion();}}function updateBottomRow(){const _0x1f7ca6=_0x2b80b7,_0x578b5d=document[_0x1f7ca6(0x179)](_0x1f7ca6(0x1ac));_0x578b5d[_0x1f7ca6(0x190)]='',clickedLetters['forEach'](_0x3b00aa=>{const _0x294624=_0x1f7ca6,_0xf460cd=document[_0x294624(0x1a4)](_0x294624(0x16d));_0xf460cd['classList'][_0x294624(0x17f)](_0x294624(0x18f)),_0xf460cd[_0x294624(0x1b0)]=_0x3b00aa,_0x578b5d['appendChild'](_0xf460cd);});}function displayDateTime(){const _0x1cf89a=_0x2b80b7,_0x2e3821=document[_0x1cf89a(0x179)](_0x1cf89a(0x1b5)),_0x44bb65=new Date(),_0x911f04=_0x44bb65[_0x1cf89a(0x188)]()+'년\x20'+(_0x44bb65[_0x1cf89a(0x183)]()+0x1)+'월\x20'+_0x44bb65[_0x1cf89a(0x1b6)]()+'일\x20'+_0x44bb65['getHours']()+'시\x20'+_0x44bb65[_0x1cf89a(0x18c)]()+'분',_0x5787b0=Math['floor']((_0x44bb65-startTime)/0x3e8),_0x2c8fe5=Math[_0x1cf89a(0x19b)](_0x5787b0/0x3c),_0x209a9b=_0x5787b0%0x3c;_0x2e3821['innerHTML']=_0x911f04+_0x1cf89a(0x18a)+_0x2c8fe5+'분\x20'+_0x209a9b+'초';}function _0x1140(_0x149c84,_0x5ac50d){const _0x1f8a6d=_0x1f8a();return _0x1140=function(_0x114024,_0x2817e4){_0x114024=_0x114024-0x16c;let _0x52c917=_0x1f8a6d[_0x114024];return _0x52c917;},_0x1140(_0x149c84,_0x5ac50d);}function checkCompletion(){const _0x2eee5d=_0x2b80b7,_0x2bca62=document['getElementById'](_0x2eee5d(0x189));if(clickedLetters[_0x2eee5d(0x195)]('')===currentWord['join']('')){_0x2bca62[_0x2eee5d(0x17b)][_0x2eee5d(0x17f)](_0x2eee5d(0x19d));if(currentWordIndex<words[_0x2eee5d(0x1b4)]-0x1){currentWordIndex++,currentWord=words[currentWordIndex]['split'](''),clickedLetters=[],previousClickedCells=[];let _0x290e36=currentWord[_0x2eee5d(0x1b4)];document[_0x2eee5d(0x179)]('header')[_0x2eee5d(0x1b0)]=_0x2eee5d(0x18e)+(currentWordIndex+0x1)+_0x2eee5d(0x180)+words['length']+_0x2eee5d(0x194)+englishTranslations[currentWordIndex]+'\x20('+_0x290e36+')',createGrid(),updateBottomRow();const _0x598e4a=document[_0x2eee5d(0x179)](_0x2eee5d(0x1a8));_0x598e4a[_0x2eee5d(0x17b)][_0x2eee5d(0x17f)](_0x2eee5d(0x197)),_0x598e4a[_0x2eee5d(0x197)]=!![];}else document[_0x2eee5d(0x179)](_0x2eee5d(0x1a2))[_0x2eee5d(0x17b)][_0x2eee5d(0x17f)](_0x2eee5d(0x19d)),document[_0x2eee5d(0x179)](_0x2eee5d(0x1ac))[_0x2eee5d(0x17b)][_0x2eee5d(0x17f)](_0x2eee5d(0x19d)),document[_0x2eee5d(0x179)](_0x2eee5d(0x177))[_0x2eee5d(0x17b)][_0x2eee5d(0x17f)]('hidden'),document[_0x2eee5d(0x179)](_0x2eee5d(0x17e))[_0x2eee5d(0x17b)][_0x2eee5d(0x1b3)](_0x2eee5d(0x19d)),displayDateTime();}else _0x2bca62[_0x2eee5d(0x17b)]['remove'](_0x2eee5d(0x19d)),clickedLetters=[],previousClickedCells=[],updateBottomRow(),createGrid();}document[_0x2b80b7(0x179)](_0x2b80b7(0x1a8))[_0x2b80b7(0x1a6)]('click',()=>{const _0x551707=_0x2b80b7;if(clickedLetters[_0x551707(0x1b4)]>0x0){const _0x36bd23=clickedLetters[_0x551707(0x16f)](),_0x1c6858=previousClickedCells[_0x551707(0x16f)]();_0x1c6858&&(_0x1c6858['textContent']=_0x36bd23,_0x1c6858[_0x551707(0x17b)][_0x551707(0x1b3)]('empty'));updateBottomRow();if(clickedLetters['length']===0x0){const _0x99240d=document[_0x551707(0x179)](_0x551707(0x1a8));_0x99240d[_0x551707(0x17b)][_0x551707(0x17f)](_0x551707(0x197)),_0x99240d[_0x551707(0x197)]=!![];}}});let d=currentWord[_0x2b80b7(0x1b4)];document[_0x2b80b7(0x179)](_0x2b80b7(0x177))[_0x2b80b7(0x1b0)]=_0x2b80b7(0x16c)+words[_0x2b80b7(0x1b4)]+_0x2b80b7(0x194)+englishTranslations[0x0]+'\x20('+d+')',createGrid();function _0x1f8a(){const _0x2d2972=['бэлэн\x20мөнгөөр\x20тооцоо\x20хийх','slice','2422Mbebga','төлбөр\x20төлөх','grid','2024-11-4','createElement','디자인이\x20마음에\x20들다','addEventListener','20zxMaMm','undoButton','боломжийн\x20хямд\x20үнэтэй','8408528LFUhkU','appendChild','bottomRow','толботой','6492375bQRxOE','4184HVhbuu','textContent','10StwzSD','загвар\x20нь\x20сэтгэлд\x20нийцэх,\x20таалагдах','remove','length','date-time','getDate','солих','현금으로\x20계산하다','안\x20어울리다','단어\x201\x20/\x20','div','размер\x20яг\x20таарах','pop','зохих','2024-11-3','размер\x20таарахгүй\x20байх','가격이\x20저렴하다','끈이\x20떨어지다','어울리다','결제하다','header','6120090nJwECJ','getElementById','환불하다','classList','push','зохихгүй','end-message','add','\x20/\x20','уяа,\x20үдээс,\x20боолт\x20унах','12023528ipImdN','getMonth','авсан\x20бараагаа\x20буцааж\x20мөнгөө\x20эргүүлж\x20авах','카드로\x20계산하다','15414rPBJSN','장식이\x20떨어지다','getFullYear','alert','<br>걸린\x20시간:\x20','split','getMinutes','구입하다','단어\x20','cell','innerHTML','73081CxbwAq','чимэглэл\x20унах','3840YCXBEP','\x20:\x20','join','concat','disabled','random','empty','худалдаж\x20авах','floor','교환하다','hidden'];_0x1f8a=function(){return _0x2d2972;};return _0x1f8a();}const currentDate=new Date(),startDate=new Date(_0x2b80b7(0x171)),endDate=new Date(_0x2b80b7(0x1a3));createGrid();