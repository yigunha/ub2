const _0x5e1558=_0x3173;function _0x3173(_0x1d7c42,_0x123103){const _0x2ceb7d=_0x2ceb();return _0x3173=function(_0x3173b0,_0x4e1e96){_0x3173b0=_0x3173b0-0x148;let _0x401dce=_0x2ceb7d[_0x3173b0];return _0x401dce;},_0x3173(_0x1d7c42,_0x123103);}(function(_0x38a5bd,_0x46af8b){const _0x26c902=_0x3173,_0x58c09d=_0x38a5bd();while(!![]){try{const _0x2ed620=-parseInt(_0x26c902(0x161))/0x1*(parseInt(_0x26c902(0x14f))/0x2)+-parseInt(_0x26c902(0x172))/0x3*(parseInt(_0x26c902(0x185))/0x4)+parseInt(_0x26c902(0x177))/0x5*(-parseInt(_0x26c902(0x17c))/0x6)+parseInt(_0x26c902(0x168))/0x7+parseInt(_0x26c902(0x181))/0x8*(parseInt(_0x26c902(0x162))/0x9)+parseInt(_0x26c902(0x157))/0xa*(parseInt(_0x26c902(0x14d))/0xb)+parseInt(_0x26c902(0x14c))/0xc*(parseInt(_0x26c902(0x18c))/0xd);if(_0x2ed620===_0x46af8b)break;else _0x58c09d['push'](_0x58c09d['shift']());}catch(_0x23a6c2){_0x58c09d['push'](_0x58c09d['shift']());}}}(_0x2ceb,0x72ef8));const words=[_0x5e1558(0x18a),'가격이\x20저렴하다','사이즈가\x20딱\x20맞다',_0x5e1558(0x159),_0x5e1558(0x174),_0x5e1558(0x15d),_0x5e1558(0x179),_0x5e1558(0x183),'교환하다','카드로\x20계산하다','현금으로\x20계산하다','어울리다',_0x5e1558(0x16c),'끈이\x20떨어지다','장식이\x20떨어지다',_0x5e1558(0x186)],englishTranslations=['худалдаж\x20авах',_0x5e1558(0x173),_0x5e1558(0x16f),_0x5e1558(0x178),'төлбөр\x20төлөх',_0x5e1558(0x17d),_0x5e1558(0x17b),'толботой',_0x5e1558(0x15e),_0x5e1558(0x156),_0x5e1558(0x180),'зохих','зохихгүй','уяа,\x20үдээс,\x20боолт\x20унах',_0x5e1558(0x176),_0x5e1558(0x163)];let currentWordIndex=0x0,currentWord=words[currentWordIndex][_0x5e1558(0x170)](''),clickedLetters=[],previousClickedCells=[],startTime=new Date();function shuffleArray(_0x4ea598){const _0x5d4f7f=_0x5e1558;for(let _0x261caa=_0x4ea598[_0x5d4f7f(0x150)]-0x1;_0x261caa>0x0;_0x261caa--){let _0x112226=Math['floor'](Math[_0x5d4f7f(0x171)]()*(_0x261caa+0x1));[_0x4ea598[_0x261caa],_0x4ea598[_0x112226]]=[_0x4ea598[_0x112226],_0x4ea598[_0x261caa]];}return _0x4ea598;}function createGrid(){const _0x39136a=_0x5e1558,_0x484009=document[_0x39136a(0x15c)](_0x39136a(0x167));_0x484009[_0x39136a(0x151)]='';let _0x37a6f7=[];_0x37a6f7=words[_0x39136a(0x164)](currentWordIndex,currentWordIndex+0x1)[_0x39136a(0x158)]('')[_0x39136a(0x170)](''),_0x37a6f7=shuffleArray(_0x37a6f7);for(let _0x50616b=0x0;_0x50616b<0x31;_0x50616b++){const _0x3e98f6=document['createElement']('div');_0x3e98f6[_0x39136a(0x189)][_0x39136a(0x175)](_0x39136a(0x16d)),_0x37a6f7[_0x50616b]?(_0x3e98f6['textContent']=_0x37a6f7[_0x50616b],_0x3e98f6[_0x39136a(0x18b)](_0x39136a(0x149),()=>handleCellClick(_0x3e98f6))):(_0x3e98f6[_0x39136a(0x16e)]='',_0x3e98f6[_0x39136a(0x189)]['add'](_0x39136a(0x148))),_0x484009[_0x39136a(0x169)](_0x3e98f6);}}function handleCellClick(_0x507a73){const _0xfd1327=_0x5e1558;if(clickedLetters[_0xfd1327(0x150)]<currentWord[_0xfd1327(0x150)]&&_0x507a73[_0xfd1327(0x16e)]){clickedLetters[_0xfd1327(0x16b)](_0x507a73[_0xfd1327(0x16e)]),previousClickedCells[_0xfd1327(0x16b)](_0x507a73),_0x507a73[_0xfd1327(0x16e)]='',_0x507a73[_0xfd1327(0x189)][_0xfd1327(0x175)](_0xfd1327(0x148)),updateBottomRow();const _0x1ab1da=document[_0xfd1327(0x15c)](_0xfd1327(0x184));clickedLetters[_0xfd1327(0x150)]>0x0&&(_0x1ab1da[_0xfd1327(0x189)][_0xfd1327(0x17a)]('disabled'),_0x1ab1da[_0xfd1327(0x182)]=![]),clickedLetters['length']===currentWord[_0xfd1327(0x150)]&&checkCompletion();}}function updateBottomRow(){const _0x8ae90=_0x5e1558,_0x402bdc=document[_0x8ae90(0x15c)]('bottomRow');_0x402bdc[_0x8ae90(0x151)]='',clickedLetters[_0x8ae90(0x153)](_0x49eb35=>{const _0x32db7b=_0x8ae90,_0x1a959b=document[_0x32db7b(0x16a)](_0x32db7b(0x165));_0x1a959b[_0x32db7b(0x189)][_0x32db7b(0x175)](_0x32db7b(0x16d)),_0x1a959b[_0x32db7b(0x16e)]=_0x49eb35,_0x402bdc[_0x32db7b(0x169)](_0x1a959b);});}function displayDateTime(){const _0x392943=_0x5e1558,_0xe3b1bc=document['getElementById'](_0x392943(0x14b)),_0x5f3a7a=new Date(),_0x29a021=_0x5f3a7a['getFullYear']()+'년\x20'+(_0x5f3a7a[_0x392943(0x160)]()+0x1)+'월\x20'+_0x5f3a7a[_0x392943(0x188)]()+'일\x20'+_0x5f3a7a[_0x392943(0x154)]()+'시\x20'+_0x5f3a7a[_0x392943(0x166)]()+'분',_0x2ca197=Math[_0x392943(0x155)]((_0x5f3a7a-startTime)/0x3e8),_0x296ab0=Math[_0x392943(0x155)](_0x2ca197/0x3c),_0x4ef12e=_0x2ca197%0x3c;_0xe3b1bc['innerHTML']=_0x29a021+_0x392943(0x15f)+_0x296ab0+'분\x20'+_0x4ef12e+'초';}function checkCompletion(){const _0x28ca15=_0x5e1558,_0x161ff3=document[_0x28ca15(0x15c)](_0x28ca15(0x17f));if(clickedLetters[_0x28ca15(0x158)]('')===currentWord[_0x28ca15(0x158)]('')){_0x161ff3[_0x28ca15(0x189)][_0x28ca15(0x175)]('hidden');if(currentWordIndex<words[_0x28ca15(0x150)]-0x1){currentWordIndex++,currentWord=words[currentWordIndex]['split'](''),clickedLetters=[],previousClickedCells=[];let _0x2b8ac8=currentWord['length'];document['getElementById'](_0x28ca15(0x14a))[_0x28ca15(0x16e)]=_0x28ca15(0x15b)+(currentWordIndex+0x1)+'\x20/\x20'+words[_0x28ca15(0x150)]+'\x20:\x20'+englishTranslations[currentWordIndex]+'\x20('+_0x2b8ac8+')',createGrid(),updateBottomRow();const _0x35026a=document[_0x28ca15(0x15c)](_0x28ca15(0x184));_0x35026a[_0x28ca15(0x189)][_0x28ca15(0x175)](_0x28ca15(0x182)),_0x35026a[_0x28ca15(0x182)]=!![];}else document[_0x28ca15(0x15c)](_0x28ca15(0x167))[_0x28ca15(0x189)][_0x28ca15(0x175)]('hidden'),document[_0x28ca15(0x15c)]('bottomRow')['classList'][_0x28ca15(0x175)](_0x28ca15(0x187)),document[_0x28ca15(0x15c)](_0x28ca15(0x14a))[_0x28ca15(0x189)][_0x28ca15(0x175)]('hidden'),document[_0x28ca15(0x15c)]('end-message')[_0x28ca15(0x189)]['remove'](_0x28ca15(0x187)),displayDateTime();}else _0x161ff3[_0x28ca15(0x189)][_0x28ca15(0x17a)](_0x28ca15(0x187)),clickedLetters=[],previousClickedCells=[],updateBottomRow(),createGrid();}document['getElementById'](_0x5e1558(0x184))[_0x5e1558(0x18b)](_0x5e1558(0x149),()=>{const _0x3b0545=_0x5e1558;if(clickedLetters[_0x3b0545(0x150)]>0x0){const _0x5ca079=clickedLetters[_0x3b0545(0x17e)](),_0x3a31af=previousClickedCells['pop']();_0x3a31af&&(_0x3a31af['textContent']=_0x5ca079,_0x3a31af[_0x3b0545(0x189)][_0x3b0545(0x17a)]('empty'));updateBottomRow();if(clickedLetters['length']===0x0){const _0x5967f9=document[_0x3b0545(0x15c)](_0x3b0545(0x184));_0x5967f9[_0x3b0545(0x189)][_0x3b0545(0x175)]('disabled'),_0x5967f9[_0x3b0545(0x182)]=!![];}}});let d=currentWord[_0x5e1558(0x150)];function _0x2ceb(){const _0x2c5b18=['pop','alert','бэлэн\x20мөнгөөр\x20тооцоо\x20хийх','3390320IcQDRa','disabled','얼룩이\x20있다','undoButton','23588aTcEzs','환불하다','hidden','getDate','classList','구입하다','addEventListener','13cgDVZS','empty','click','header','date-time','2262108udqdDT','2488277boyssB','2024-11-3','2PUsecs','length','innerHTML','2024-11-4','forEach','getHours','floor','картаар\x20тооцоо\x20хийх','40sODvqh','join','망가지다','단어\x201\x20/\x20','단어\x20','getElementById','사이즈가\x20안\x20맞다','солих','<br>걸린\x20시간:\x20','getMonth','924989DbgMfs','9kryzgR','авсан\x20бараагаа\x20буцааж\x20мөнгөө\x20эргүүлж\x20авах','slice','div','getMinutes','grid','6318025poCMuE','appendChild','createElement','push','안\x20어울리다','cell','textContent','размер\x20яг\x20таарах','split','random','339ZHSrYy','боломжийн\x20хямд\x20үнэтэй','결제하다','add','чимэглэл\x20унах','893940xxLRiS','эвдрэх','디자인이\x20마음에\x20들다','remove','загвар\x20нь\x20сэтгэлд\x20нийцэх,\x20таалагдах','12WFhLLi','размер\x20таарахгүй\x20байх'];_0x2ceb=function(){return _0x2c5b18;};return _0x2ceb();}document[_0x5e1558(0x15c)](_0x5e1558(0x14a))[_0x5e1558(0x16e)]=_0x5e1558(0x15a)+words[_0x5e1558(0x150)]+'\x20:\x20'+englishTranslations[0x0]+'\x20('+d+')',createGrid();const currentDate=new Date(),startDate=new Date(_0x5e1558(0x14e)),endDate=new Date(_0x5e1558(0x152));createGrid();