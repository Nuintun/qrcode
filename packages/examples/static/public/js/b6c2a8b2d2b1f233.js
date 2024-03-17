"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[275],{3374:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(r(3346));t.default=class{name(){return"ASCII"}match(e){let t=e.rawInput;for(let r=0;r<e.rawLen;r++){let n=t[r];if(n<32||n>126)return(0,a.default)(e,this,0)}return(0,a.default)(e,this,100)}}},774:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ISO_2022_CN=t.ISO_2022_KR=t.ISO_2022_JP=void 0;let a=n(r(3346));class s{constructor(){this.escapeSequences=[]}name(){return"ISO_2022"}match(e){let t,r,n,s;let u=0,l=0,i=0,c=e.inputBytes,o=e.inputLen;e:for(t=0;t<o;t++){if(27==c[t]){t:for(n=0;n<this.escapeSequences.length;n++){let e=this.escapeSequences[n];if(!(o-t<e.length)){for(r=1;r<e.length;r++)if(e[r]!=c[t+r])continue t;u++,t+=e.length-1;continue e}}l++}(14==c[t]||15==c[t])&&i++}return 0==u?null:(s=(100*u-100*l)/(u+l),u+i<5&&(s-=(5-(u+i))*10),s<=0?null:(0,a.default)(e,this,s))}}t.ISO_2022_JP=class extends s{constructor(){super(...arguments),this.escapeSequences=[[27,36,40,67],[27,36,40,68],[27,36,64],[27,36,65],[27,36,66],[27,38,64],[27,40,66],[27,40,72],[27,40,73],[27,40,74],[27,46,65],[27,46,70]]}name(){return"ISO-2022-JP"}language(){return"ja"}},t.ISO_2022_KR=class extends s{constructor(){super(...arguments),this.escapeSequences=[[27,36,41,67]]}name(){return"ISO-2022-KR"}language(){return"kr"}},t.ISO_2022_CN=class extends s{constructor(){super(...arguments),this.escapeSequences=[[27,36,41,65],[27,36,41,71],[27,36,42,72],[27,36,41,69],[27,36,43,73],[27,36,43,74],[27,36,43,75],[27,36,43,76],[27,36,43,77],[27,78],[27,79]]}name(){return"ISO-2022-CN"}language(){return"zh"}}},6636:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.gb_18030=t.euc_kr=t.euc_jp=t.big5=t.sjis=void 0;let a=n(r(3346));class s{constructor(){this.charValue=0,this.index=0,this.nextIndex=0,this.error=!1,this.done=!1}reset(){this.charValue=0,this.index=-1,this.nextIndex=0,this.error=!1,this.done=!1}nextByte(e){return this.nextIndex>=e.rawLen?(this.done=!0,-1):255&e.rawInput[this.nextIndex++]}}class u{constructor(){this.commonChars=[]}name(){return"mbcs"}match(e){let t=0,r=0,n=0,u=0,l=0,i=new s;r:{for(i.reset();this.nextChar(i,e);){if(u++,i.error)n++;else{let e=4294967295&i.charValue;e>255&&(t++,null!=this.commonChars&&function(e,t){let r=(e,t,n,a)=>{if(a<n)return -1;let s=Math.floor(n+a>>>1);return t>e[s]?r(e,t,s+1,a):t<e[s]?r(e,t,n,s-1):s};return r(e,t,0,e.length-1)}(this.commonChars,e)>=0&&r++)}if(n>=2&&5*n>=t)break r}if(t<=10&&0==n){l=0==t&&u<10?0:10;break r}if(t<20*n){l=0;break r}null==this.commonChars?(l=30+t-20*n)>100&&(l=100):l=Math.min(l=Math.floor(90/Math.log(t/4)*Math.log(r+1)+10),100)}return 0==l?null:(0,a.default)(e,this,l)}nextChar(e,t){return!0}}function l(e,t){e.index=e.nextIndex,e.error=!1;let r=0,n=0,a=0;n:{if((r=e.charValue=e.nextByte(t))<0){e.done=!0;break n}if(r<=141)break n;if(n=e.nextByte(t),e.charValue=e.charValue<<8|n,r>=161&&r<=254||142==r){n<161&&(e.error=!0);break n}143==r&&(a=e.nextByte(t),e.charValue=e.charValue<<8|a,a<161&&(e.error=!0))}return!1==e.done}t.sjis=class extends u{constructor(){super(...arguments),this.commonChars=[33088,33089,33090,33093,33115,33129,33130,33141,33142,33440,33442,33444,33449,33450,33451,33453,33455,33457,33459,33461,33463,33469,33470,33473,33476,33477,33478,33480,33481,33484,33485,33500,33504,33511,33512,33513,33514,33520,33521,33601,33603,33614,33615,33624,33630,33634,33639,33653,33654,33673,33674,33675,33677,33683,36502,37882,38314]}name(){return"Shift_JIS"}language(){return"ja"}nextChar(e,t){e.index=e.nextIndex,e.error=!1;let r=e.charValue=e.nextByte(t);if(r<0)return!1;if(r<=127||r>160&&r<=223)return!0;let n=e.nextByte(t);return!(n<0)&&(e.charValue=r<<8|n,n>=64&&n<=127||n>=128&&n<=255||(e.error=!0),!0)}},t.big5=class extends u{constructor(){super(...arguments),this.commonChars=[41280,41281,41282,41283,41287,41289,41333,41334,42048,42054,42055,42056,42065,42068,42071,42084,42090,42092,42103,42147,42148,42151,42177,42190,42193,42207,42216,42237,42304,42312,42328,42345,42445,42471,42583,42593,42594,42600,42608,42664,42675,42681,42707,42715,42726,42738,42816,42833,42841,42970,43171,43173,43181,43217,43219,43236,43260,43456,43474,43507,43627,43706,43710,43724,43772,44103,44111,44208,44242,44377,44745,45024,45290,45423,45747,45764,45935,46156,46158,46412,46501,46525,46544,46552,46705,47085,47207,47428,47832,47940,48033,48593,49860,50105,50240,50271]}name(){return"Big5"}language(){return"zh"}nextChar(e,t){e.index=e.nextIndex,e.error=!1;let r=e.charValue=e.nextByte(t);if(r<0)return!1;if(r<=127||255==r)return!0;let n=e.nextByte(t);return!(n<0)&&(e.charValue=e.charValue<<8|n,(n<64||127==n||255==n)&&(e.error=!0),!0)}},t.euc_jp=class extends u{constructor(){super(...arguments),this.commonChars=[41377,41378,41379,41382,41404,41418,41419,41430,41431,42146,42148,42150,42152,42154,42155,42156,42157,42159,42161,42163,42165,42167,42169,42171,42173,42175,42176,42177,42179,42180,42182,42183,42184,42185,42186,42187,42190,42191,42192,42206,42207,42209,42210,42212,42216,42217,42218,42219,42220,42223,42226,42227,42402,42403,42404,42406,42407,42410,42413,42415,42416,42419,42421,42423,42424,42425,42431,42435,42438,42439,42440,42441,42443,42448,42453,42454,42455,42462,42464,42465,42469,42473,42474,42475,42476,42477,42483,47273,47572,47854,48072,48880,49079,50410,50940,51133,51896,51955,52188,52689],this.nextChar=l}name(){return"EUC-JP"}language(){return"ja"}},t.euc_kr=class extends u{constructor(){super(...arguments),this.commonChars=[45217,45235,45253,45261,45268,45286,45293,45304,45306,45308,45496,45497,45511,45527,45538,45994,46011,46274,46287,46297,46315,46501,46517,46527,46535,46569,46835,47023,47042,47054,47270,47278,47286,47288,47291,47337,47531,47534,47564,47566,47613,47800,47822,47824,47857,48103,48115,48125,48301,48314,48338,48374,48570,48576,48579,48581,48838,48840,48863,48878,48888,48890,49057,49065,49088,49124,49131,49132,49144,49319,49327,49336,49338,49339,49341,49351,49356,49358,49359,49366,49370,49381,49403,49404,49572,49574,49590,49622,49631,49654,49656,50337,50637,50862,51151,51153,51154,51160,51173,51373],this.nextChar=l}name(){return"EUC-KR"}language(){return"ko"}},t.gb_18030=class extends u{constructor(){super(...arguments),this.commonChars=[41377,41378,41379,41380,41392,41393,41457,41459,41889,41900,41914,45480,45496,45502,45755,46025,46070,46323,46525,46532,46563,46767,46804,46816,47010,47016,47037,47062,47069,47284,47327,47350,47531,47561,47576,47610,47613,47821,48039,48086,48097,48122,48316,48347,48382,48588,48845,48861,49076,49094,49097,49332,49389,49611,49883,50119,50396,50410,50636,50935,51192,51371,51403,51413,51431,51663,51706,51889,51893,51911,51920,51926,51957,51965,52460,52728,52906,52932,52946,52965,53173,53186,53206,53442,53445,53456,53460,53671,53930,53938,53941,53947,53972,54211,54224,54269,54466,54490,54754,54992]}name(){return"GB18030"}language(){return"zh"}nextChar(e,t){e.index=e.nextIndex,e.error=!1;let r=0,n=0,a=0,s=0;n:{if((r=e.charValue=e.nextByte(t))<0){e.done=!0;break n}if(r<=128)break n;if(n=e.nextByte(t),e.charValue=e.charValue<<8|n,r>=129&&r<=254){if(n>=64&&n<=126||n>=80&&n<=254)break n;if(n>=48&&n<=57&&(a=e.nextByte(t))>=129&&a<=254&&(s=e.nextByte(t))>=48&&s<=57){e.charValue=e.charValue<<16|a<<8|s;break n}e.error=!0;break n}}return!1==e.done}}},3310:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.KOI8_R=t.windows_1256=t.windows_1251=t.ISO_8859_9=t.ISO_8859_8=t.ISO_8859_7=t.ISO_8859_6=t.ISO_8859_5=t.ISO_8859_2=t.ISO_8859_1=void 0;let a=n(r(3346));class s{constructor(e,t){this.byteIndex=0,this.ngram=0,this.ngramCount=0,this.hitCount=0,this.spaceChar=32,this.ngramList=e,this.byteMap=t}search(e,t){let r=0;return(e[32]<=t&&(r+=32),e[r+16]<=t&&(r+=16),e[r+8]<=t&&(r+=8),e[r+4]<=t&&(r+=4),e[r+2]<=t&&(r+=2),e[r+1]<=t&&(r+=1),e[r]>t&&(r-=1),r<0||e[r]!=t)?-1:r}lookup(e){this.ngramCount+=1,this.search(this.ngramList,e)>=0&&(this.hitCount+=1)}addByte(e){this.ngram=(this.ngram<<8)+(255&e)&16777215,this.lookup(this.ngram)}nextByte(e){return this.byteIndex>=e.inputLen?-1:255&e.inputBytes[this.byteIndex++]}parse(e,t){let r,n=!1;for(this.spaceChar=t;(r=this.nextByte(e))>=0;){let e=this.byteMap[r];0!=e&&(e==this.spaceChar&&n||this.addByte(e),n=e==this.spaceChar)}this.addByte(this.spaceChar);let a=this.hitCount/this.ngramCount;return a>.33?98:Math.floor(300*a)}}class u{constructor(e,t){this.fLang=e,this.fNGrams=t}}let l=e=>Array.isArray(e)&&isFinite(e[0]);class i{constructor(){this.spaceChar=32,this.nGramLang=void 0}ngrams(){return[]}byteMap(){return[]}name(e){return"sbcs"}language(){return this.nGramLang}match(e){this.nGramLang=void 0;let t=this.ngrams();if(l(t)){let r=new s(t,this.byteMap()).parse(e,this.spaceChar);return r<=0?null:(0,a.default)(e,this,r)}let r=-1;for(let n=t.length-1;n>=0;n--){let a=t[n],u=new s(a.fNGrams,this.byteMap()).parse(e,this.spaceChar);u>r&&(r=u,this.nGramLang=a.fLang)}return r<=0?null:(0,a.default)(e,this,r)}}t.ISO_8859_1=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,170,32,32,32,32,32,32,32,32,32,32,181,32,32,32,32,186,32,32,32,32,32,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,255]}ngrams(){return[new u("da",[2122086,2122100,2122853,2123118,2123122,2123375,2123873,2124064,2125157,2125671,2126053,2126697,2126708,2126953,2127465,6383136,6385184,6385252,6386208,6386720,6579488,6579566,6579570,6579572,6627443,6644768,6644837,6647328,6647396,6648352,6648421,6648608,6648864,6713202,6776096,6776174,6776178,6907749,6908960,6909543,7038240,7039845,7103858,7104871,7105637,7169380,7234661,7234848,7235360,7235429,7300896,7302432,7303712,7398688,7479396,7479397,7479411,7496992,7566437,7610483,7628064,7628146,7629164,7759218]),new u("de",[2122094,2122101,2122341,2122849,2122853,2122857,2123113,2123621,2123873,2124142,2125161,2126691,2126693,2127214,2127461,2127471,2127717,2128501,6448498,6514720,6514789,6514804,6578547,6579566,6579570,6580581,6627428,6627443,6646126,6646132,6647328,6648352,6648608,6776174,6841710,6845472,6906728,6907168,6909472,6909541,6911008,7104867,7105637,7217249,7217252,7217267,7234592,7234661,7234848,7235360,7235429,7238757,7479396,7496805,7497065,7562088,7566437,7610468,7628064,7628142,7628146,7695972,7695975,7759218]),new u("en",[2122016,2122094,2122341,2122607,2123375,2123873,2123877,2124142,2125153,2125670,2125938,2126437,2126689,2126708,2126952,2126959,2127720,6383972,6384672,6385184,6385252,6386464,6386720,6386789,6386793,6561889,6561908,6627425,6627443,6627444,6644768,6647412,6648352,6648608,6713202,6840692,6841632,6841714,6906912,6909472,6909543,6909806,6910752,7217249,7217268,7234592,7235360,7238688,7300640,7302688,7303712,7496992,7500576,7544929,7544948,7561577,7566368,7610484,7628146,7628897,7628901,7629167,7630624,7631648]),new u("es",[2122016,2122593,2122607,2122853,2123116,2123118,2123123,2124142,2124897,2124911,2125921,2125935,2125938,2126197,2126437,2126693,2127214,2128160,6365283,6365284,6365285,6365292,6365296,6382441,6382703,6384672,6386208,6386464,6515187,6516590,6579488,6579564,6582048,6627428,6627429,6627436,6646816,6647328,6647412,6648608,6648692,6907246,6943598,7102752,7106419,7217253,7238757,7282788,7282789,7302688,7303712,7303968,7364978,7435621,7495968,7497075,7544932,7544933,7544944,7562528,7628064,7630624,7693600,15953440]),new u("fr",[2122101,2122607,2122849,2122853,2122869,2123118,2123124,2124897,2124901,2125921,2125935,2125938,2126197,2126693,2126703,2127214,2154528,6385268,6386793,6513952,6516590,6579488,6579571,6583584,6627425,6627427,6627428,6627429,6627436,6627440,6627443,6647328,6647412,6648352,6648608,6648864,6649202,6909806,6910752,6911008,7102752,7103776,7103859,7169390,7217252,7234848,7238432,7238688,7302688,7302772,7304562,7435621,7479404,7496992,7544929,7544932,7544933,7544940,7544944,7610468,7628064,7629167,7693600,7696928]),new u("it",[2122092,2122600,2122607,2122853,2122857,2123040,2124140,2124142,2124897,2125925,2125938,2127214,6365283,6365284,6365296,6365299,6386799,6514789,6516590,6579564,6580512,6627425,6627427,6627428,6627433,6627436,6627440,6627443,6646816,6646892,6647412,6648352,6841632,6889569,6889571,6889572,6889587,6906144,6908960,6909472,6909806,7102752,7103776,7104800,7105633,7234848,7235872,7237408,7238757,7282785,7282788,7282793,7282803,7302688,7302757,7366002,7495968,7496992,7563552,7627040,7628064,7629088,7630624,8022383]),new u("nl",[2122092,2122341,2122849,2122853,2122857,2123109,2123118,2123621,2123877,2124142,2125153,2125157,2125680,2126949,2127457,2127461,2127471,2127717,2128489,6381934,6381938,6385184,6385252,6386208,6386720,6514804,6579488,6579566,6579570,6627426,6627446,6645102,6645106,6647328,6648352,6648435,6648864,6776174,6841716,6907168,6909472,6909543,6910752,7217250,7217252,7217253,7217256,7217263,7217270,7234661,7235360,7302756,7303026,7303200,7303712,7562088,7566437,7610468,7628064,7628142,7628146,7758190,7759218,7761775]),new u("no",[2122100,2122102,2122853,2123118,2123122,2123375,2123873,2124064,2125157,2125671,2126053,2126693,2126699,2126703,2126708,2126953,2127465,2155808,6385252,6386208,6386720,6579488,6579566,6579572,6627443,6644768,6647328,6647397,6648352,6648421,6648864,6648948,6713202,6776174,6908779,6908960,6909543,7038240,7039845,7103776,7105637,7169380,7169390,7217267,7234848,7235360,7235429,7237221,7300896,7302432,7303712,7398688,7479411,7496992,7565165,7566437,7610483,7628064,7628142,7628146,7629164,7631904,7631973,7759218]),new u("pt",[2122016,2122607,2122849,2122853,2122863,2123040,2123123,2125153,2125423,2125600,2125921,2125935,2125938,2126197,2126437,2126693,2127213,6365281,6365283,6365284,6365296,6382693,6382703,6384672,6386208,6386273,6386464,6516589,6516590,6578464,6579488,6582048,6582131,6627425,6627428,6647072,6647412,6648608,6648692,6906144,6906721,7169390,7238757,7238767,7282785,7282787,7282788,7282789,7282800,7303968,7364978,7435621,7495968,7497075,7544929,7544932,7544933,7544944,7566433,7628064,7630624,7693600,14905120,15197039]),new u("sv",[2122100,2122102,2122853,2123118,2123510,2123873,2124064,2124142,2124655,2125157,2125667,2126053,2126699,2126703,2126708,2126953,2127457,2127465,2155634,6382693,6385184,6385252,6386208,6386804,6514720,6579488,6579566,6579570,6579572,6644768,6647328,6648352,6648864,6747762,6776174,6909036,6909543,7037216,7105568,7169380,7217267,7233824,7234661,7235360,7235429,7235950,7299944,7302432,7302688,7398688,7479393,7479411,7495968,7564129,7565165,7610483,7627040,7628064,7628146,7629164,7631904,7758194,14971424,16151072])]}name(e){return e&&e.c1Bytes?"windows-1252":"ISO-8859-1"}},t.ISO_8859_2=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,177,32,179,32,181,182,32,32,185,186,187,188,32,190,191,32,177,32,179,32,181,182,183,32,185,186,187,188,32,190,191,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,32]}ngrams(){return[new u("cs",[2122016,2122361,2122863,2124389,2125409,2125413,2125600,2125668,2125935,2125938,2126072,2126447,2126693,2126703,2126708,2126959,2127392,2127481,2128481,6365296,6513952,6514720,6627440,6627443,6627446,6647072,6647533,6844192,6844260,6910836,6972704,7042149,7103776,7104800,7233824,7268640,7269408,7269664,7282800,7300206,7301737,7304052,7304480,7304801,7368548,7368554,7369327,7403621,7562528,7565173,7566433,7566441,7566446,7628146,7630573,7630624,7676016,12477728,14773997,15296623,15540336,15540339,15559968,16278884]),new u("hu",[2122016,2122106,2122341,2123111,2123116,2123365,2123873,2123887,2124147,2124645,2124649,2124790,2124901,2125153,2125157,2125161,2125413,2126714,2126949,2156915,6365281,6365291,6365293,6365299,6384416,6385184,6388256,6447470,6448494,6645625,6646560,6646816,6646885,6647072,6647328,6648421,6648864,6648933,6648948,6781216,6844263,6909556,6910752,7020641,7075450,7169383,7170414,7217249,7233899,7234923,7234925,7238688,7300985,7544929,7567973,7567988,7568097,7596391,7610465,7631904,7659891,8021362,14773792,15299360]),new u("pl",[2122618,2122863,2124064,2124389,2124655,2125153,2125161,2125409,2125417,2125668,2125935,2125938,2126697,2127648,2127721,2127737,2128416,2128481,6365296,6365303,6385257,6514720,6519397,6519417,6582048,6584937,6627440,6627443,6627447,6627450,6645615,6646304,6647072,6647401,6778656,6906144,6907168,6907242,7037216,7039264,7039333,7170405,7233824,7235937,7235941,7282800,7305057,7305065,7368556,7369313,7369327,7369338,7502437,7502457,7563754,7564137,7566433,7825765,7955304,7957792,8021280,8022373,8026400,15955744]),new u("ro",[2122016,2122083,2122593,2122597,2122607,2122613,2122853,2122857,2124897,2125153,2125925,2125938,2126693,2126819,2127214,2144873,2158190,6365283,6365284,6386277,6386720,6386789,6386976,6513010,6516590,6518048,6546208,6579488,6627425,6627427,6627428,6627440,6627443,6644e3,6646048,6646885,6647412,6648692,6889569,6889571,6889572,6889584,6907168,6908192,6909472,7102752,7103776,7106418,7107945,7234848,7238770,7303712,7365998,7496992,7497057,7501088,7594784,7628064,7631477,7660320,7694624,7695392,12216608,15625760])]}name(e){return e&&e.c1Bytes?"windows-1250":"ISO-8859-2"}},t.ISO_8859_5=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,241,242,243,244,245,246,247,248,249,250,251,252,32,254,255,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,32,241,242,243,244,245,246,247,248,249,250,251,252,32,254,255]}ngrams(){return[2150944,2151134,2151646,2152400,2152480,2153168,2153182,2153936,2153941,2154193,2154462,2154464,2154704,2154974,2154978,2155230,2156514,2158050,13688280,13689580,13884960,14015468,14015960,14016994,14017056,14164191,14210336,14211104,14216992,14407133,14407712,14413021,14536736,14538016,14538965,14538991,14540320,14540498,14557394,14557407,14557409,14602784,14602960,14603230,14604576,14605292,14605344,14606818,14671579,14672085,14672088,14672094,14733522,14734804,14803664,14803666,14803672,14806816,14865883,14868e3,14868192,14871584,15196894,15459616]}name(){return"ISO-8859-5"}language(){return"ru"}},t.ISO_8859_6=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,32,32,32,32,32,224,225,226,227,228,229,230,231,232,233,234,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32]}ngrams(){return[2148324,2148326,2148551,2152932,2154986,2155748,2156006,2156743,13050055,13091104,13093408,13095200,13100064,13100227,13100231,13100232,13100234,13100236,13100237,13100239,13100243,13100249,13100258,13100261,13100264,13100266,13100320,13100576,13100746,13115591,13181127,13181153,13181156,13181157,13181160,13246663,13574343,13617440,13705415,13748512,13836487,14229703,14279913,14805536,14950599,14993696,15001888,15002144,15016135,15058720,15059232,15066656,15081671,15147207,15189792,15255524,15263264,15278279,15343815,15343845,15343848,15386912,15388960,15394336]}name(){return"ISO-8859-6"}language(){return"ar"}},t.ISO_8859_7=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,161,162,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,220,32,221,222,223,32,252,32,253,254,192,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,32,243,244,245,246,247,248,249,250,251,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,32]}ngrams(){return[2154989,2154992,2155497,2155753,2156016,2156320,2157281,2157797,2158049,2158368,2158817,2158831,2158833,2159604,2159605,2159847,2159855,14672160,14754017,14754036,14805280,14806304,14807292,14807584,14936545,15067424,15069728,15147252,15199520,15200800,15278324,15327520,15330014,15331872,15393257,15393268,15525152,15540449,15540453,15540464,15589664,15725088,15725856,15790069,15790575,15793184,15868129,15868133,15868138,15868144,15868148,15983904,15984416,15987951,16048416,16048617,16050157,16050162,16050666,16052e3,16052213,16054765,16379168,16706848]}name(e){return e&&e.c1Bytes?"windows-1253":"ISO-8859-7"}language(){return"el"}},t.ISO_8859_8=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,181,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,32,32,32,32,32]}ngrams(){return[new u("he",[2154725,2154727,2154729,2154746,2154985,2154990,2155744,2155749,2155753,2155758,2155762,2155769,2155770,2157792,2157796,2158304,2159340,2161132,14744096,14950624,14950625,14950628,14950636,14950638,14950649,15001056,15065120,15068448,15068960,15071264,15071776,15278308,15328288,15328762,15329773,15330592,15331104,15333408,15333920,15474912,15474916,15523872,15524896,15540448,15540449,15540452,15540460,15540462,15540473,15655968,15671524,15787040,15788320,15788525,15920160,16261348,16312813,16378912,16392416,16392417,16392420,16392428,16392430,16392441]),new u("he",[2154725,2154732,2155753,2155756,2155758,2155760,2157040,2157810,2157817,2158053,2158057,2158565,2158569,2160869,2160873,2161376,2161381,2161385,14688484,14688492,14688493,14688506,14738464,14738916,14740512,14741024,14754020,14754029,14754042,14950628,14950633,14950636,14950637,14950639,14950648,14950650,15002656,15065120,15066144,15196192,15327264,15327520,15328288,15474916,15474925,15474938,15528480,15530272,15591913,15591920,15591928,15605988,15605997,15606010,15655200,15655968,15918112,16326884,16326893,16326906,16376864,16441376,16442400,16442857])]}name(e){return e&&e.c1Bytes?"windows-1255":"ISO-8859-8"}language(){return"he"}},t.ISO_8859_9=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,170,32,32,32,32,32,32,32,32,32,32,181,32,32,32,32,186,32,32,32,32,32,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,105,254,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,255]}ngrams(){return[2122337,2122345,2122357,2122849,2122853,2123621,2123873,2124140,2124641,2124655,2125153,2125676,2126689,2126945,2127461,2128225,6365282,6384416,6384737,6384993,6385184,6385405,6386208,6386273,6386429,6386685,6388065,6449522,6578464,6579488,6580512,6627426,6627435,6644841,6647328,6648352,6648425,6648681,6909029,6909472,6909545,6910496,7102830,7102834,7103776,7103858,7217249,7217250,7217259,7234657,7234661,7234848,7235872,7235950,7273760,7498094,7535982,7759136,7954720,7958386,16608800,16608868,16609021,16642301]}name(e){return e&&e.c1Bytes?"windows-1254":"ISO-8859-9"}language(){return"tr"}},t.windows_1251=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,144,131,32,131,32,32,32,32,32,32,154,32,156,157,158,159,144,32,32,32,32,32,32,32,32,32,154,32,156,157,158,159,32,162,162,188,32,180,32,32,184,32,186,32,32,32,32,191,32,32,179,179,180,181,32,32,184,32,186,32,188,190,190,191,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]}ngrams(){return[2155040,2155246,2155758,2156512,2156576,2157280,2157294,2158048,2158053,2158305,2158574,2158576,2158816,2159086,2159090,2159342,2160626,2162162,14740968,14742268,14937632,15068156,15068648,15069682,15069728,15212783,15263008,15263776,15269664,15459821,15460384,15465709,15589408,15590688,15591653,15591679,15592992,15593186,15605986,15605999,15606001,15655456,15655648,15655918,15657248,15657980,15658016,15659506,15724267,15724773,15724776,15724782,15786210,15787492,15856352,15856354,15856360,15859488,15918571,15920672,15920880,15924256,16249582,16512288]}name(){return"windows-1251"}language(){return"ru"}},t.windows_1256=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,129,32,131,32,32,32,32,136,32,138,32,156,141,142,143,144,32,32,32,32,32,32,32,152,32,154,32,156,32,32,159,32,32,32,32,32,32,32,32,32,32,170,32,32,32,32,32,32,32,32,32,32,181,32,32,32,32,32,32,32,32,32,32,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,32,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,32,32,32,32,244,32,32,32,32,249,32,251,252,32,32,255]}ngrams(){return[2148321,2148324,2148551,2153185,2153965,2154977,2155492,2156231,13050055,13091104,13093408,13095200,13099296,13099459,13099463,13099464,13099466,13099468,13099469,13099471,13099475,13099482,13099486,13099491,13099494,13099501,13099808,13100064,13100234,13115591,13181127,13181149,13181153,13181155,13181158,13246663,13574343,13617440,13705415,13748512,13836487,14295239,14344684,14544160,14753991,14797088,14806048,14806304,14885063,14927648,14928160,14935072,14950599,15016135,15058720,15124449,15131680,15474887,15540423,15540451,15540454,15583520,15585568,15590432]}name(){return"windows-1256"}language(){return"ar"}},t.KOI8_R=class extends i{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,163,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,163,32,32,32,32,32,32,32,32,32,32,32,32,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223]}ngrams(){return[2147535,2148640,2149313,2149327,2150081,2150085,2150338,2150607,2150610,2151105,2151375,2151380,2151631,2152224,2152399,2153153,2153684,2154196,12701385,12702936,12963032,12963529,12964820,12964896,13094688,13181136,13223200,13224224,13226272,13419982,13420832,13424846,13549856,13550880,13552069,13552081,13553440,13553623,13574352,13574355,13574359,13617103,13617696,13618392,13618464,13620180,13621024,13621185,13684684,13685445,13685449,13685455,13812183,13813188,13881632,13882561,13882569,13882583,13944268,13946656,13946834,13948960,14272544,14603471]}name(){return"KOI8-R"}language(){return"ru"}}},7674:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.UTF_32LE=t.UTF_32BE=t.UTF_16LE=t.UTF_16BE=void 0;let a=n(r(3346));t.UTF_16BE=class{name(){return"UTF-16BE"}match(e){let t=e.rawInput;return t.length>=2&&(255&t[0])==254&&(255&t[1])==255?(0,a.default)(e,this,100):null}},t.UTF_16LE=class{name(){return"UTF-16LE"}match(e){let t=e.rawInput;return t.length>=2&&(255&t[0])==255&&(255&t[1])==254?t.length>=4&&0==t[2]&&0==t[3]?null:(0,a.default)(e,this,100):null}};class s{name(){return"UTF-32"}getChar(e,t){return -1}match(e){let t=0,r=0,n=!1,s=0,u=e.rawLen/4*4,l=e.rawInput;if(0==u)return null;65279==this.getChar(l,0)&&(n=!0);for(let e=0;e<u;e+=4){let n=this.getChar(l,e);n<0||n>=1114111||n>=55296&&n<=57343?r+=1:t+=1}return n&&0==r?s=100:n&&t>10*r?s=80:t>3&&0==r?s=100:t>0&&0==r?s=80:t>10*r&&(s=25),0==s?null:(0,a.default)(e,this,s)}}t.UTF_32BE=class extends s{name(){return"UTF-32BE"}getChar(e,t){return(255&e[t+0])<<24|(255&e[t+1])<<16|(255&e[t+2])<<8|255&e[t+3]}},t.UTF_32LE=class extends s{name(){return"UTF-32LE"}getChar(e,t){return(255&e[t+3])<<24|(255&e[t+2])<<16|(255&e[t+1])<<8|255&e[t+0]}}},50:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(r(3346));t.default=class{name(){return"UTF-8"}match(e){let t=!1,r=0,n=0,s=0,u,l=e.rawInput;e.rawLen>=3&&(255&l[0])==239&&(255&l[1])==187&&(255&l[2])==191&&(t=!0);for(let t=0;t<e.rawLen;t++){let a=l[t];if((128&a)!=0){if((224&a)==192)s=1;else if((240&a)==224)s=2;else if((248&a)==240)s=3;else{if(++n>5)break;s=0}for(;!(++t>=e.rawLen);){if((192&l[t])!=128){n++;break}if(0==--s){r++;break}}}}if(u=0,t&&0==n)u=100;else if(t&&r>10*n)u=80;else if(r>3&&0==n)u=100;else if(r>0&&0==n)u=80;else if(0==r&&0==n)u=10;else{if(!(r>10*n))return null;u=25}return(0,a.default)(e,this,u)}}},4811:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=()=>{throw Error("File system is not available")}},6275:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.detectFileSync=t.detectFile=t.analyse=t.detect=void 0;let l=u(r(4811)),i=u(r(3374)),c=u(r(50)),o=s(r(7674)),h=s(r(6636)),d=s(r(3310)),f=s(r(774)),_=r(1054),m=[new c.default,new o.UTF_16BE,new o.UTF_16LE,new o.UTF_32BE,new o.UTF_32LE,new h.sjis,new h.big5,new h.euc_jp,new h.euc_kr,new h.gb_18030,new f.ISO_2022_JP,new f.ISO_2022_KR,new f.ISO_2022_CN,new d.ISO_8859_1,new d.ISO_8859_2,new d.ISO_8859_5,new d.ISO_8859_6,new d.ISO_8859_7,new d.ISO_8859_8,new d.ISO_8859_9,new d.windows_1251,new d.windows_1256,new d.KOI8_R,new i.default];t.detect=e=>{let r=(0,t.analyse)(e);return r.length>0?r[0].name:null},t.analyse=e=>{if(!(0,_.isByteArray)(e))throw Error("Input must be a byte array, e.g. Buffer or Uint8Array");let t=[];for(let e=0;e<256;e++)t[e]=0;for(let r=e.length-1;r>=0;r--)t[255&e[r]]++;let r=!1;for(let e=128;e<=159;e+=1)if(0!==t[e]){r=!0;break}let n={byteStats:t,c1Bytes:r,rawInput:e,rawLen:e.length,inputBytes:e,inputLen:e.length};return m.map(e=>e.match(n)).filter(e=>!!e).sort((e,t)=>t.confidence-e.confidence)},t.detectFile=(e,r={})=>new Promise((n,a)=>{let s;let u=(0,l.default)(),i=(e,r)=>{s&&u.closeSync(s),e?a(e):n((0,t.detect)(r))};if(r&&r.sampleSize){s=u.openSync(e,"r");let t=Buffer.allocUnsafe(r.sampleSize);u.read(s,t,0,r.sampleSize,r.offset,e=>{i(e,t)});return}u.readFile(e,i)}),t.detectFileSync=(e,r={})=>{let n=(0,l.default)();if(r&&r.sampleSize){let a=n.openSync(e,"r"),s=Buffer.allocUnsafe(r.sampleSize);return n.readSync(a,s,0,r.sampleSize,r.offset),n.closeSync(a),(0,t.detect)(s)}return(0,t.detect)(n.readFileSync(e))},t.default={analyse:t.analyse,detect:t.detect,detectFileSync:t.detectFileSync,detectFile:t.detectFile}},3346:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t,r)=>({confidence:r,name:t.name(e),lang:t.language?t.language():void 0})},1054:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isByteArray=void 0,t.isByteArray=e=>null!=e&&"object"==typeof e&&isFinite(e.length)&&e.length>=0}}]);