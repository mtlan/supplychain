
var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_faid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tennongdan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_diachi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nongsan",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_sodienthoai",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_soluong",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_giadukien",
				"type": "uint256"
			}
		],
		"name": "addFarmer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_idlot",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_idfm",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_xeploai",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mrp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_ngaykiemtra",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ngayhethan",
				"type": "string"
			}
		],
		"name": "addquantity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "arrayFarmer",
		"outputs": [
			{
				"internalType": "string",
				"name": "_faid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tennongdan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_diachi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nongsan",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_sodienthoai",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_soluong",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_giadukien",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_vi",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "arrayLot",
		"outputs": [
			{
				"internalType": "string",
				"name": "_idlot",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_idfm",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_xeploai",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mrp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_ngaykiemtra",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ngayhethan",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "countFarmer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "countLot",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "getFarmer",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "j",
				"type": "string"
			}
		],
		"name": "getquantity",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var addressSM = "0xDbDA8532508A78768e67A8c6111333522Cd1ca85";

var currentAccount = "";

$(document).ready(function(){

    var web3 = new Web3(window.ethereum);
    window.ethereum.enable();

    var contract_MM = new web3.eth.Contract(abi, addressSM);
    console.log(contract_MM);

    checkMM();

    $("#connectMM").click(function(){
        connectMM().then((data)=>{
            // console.log(data);
            currentAccount = data[0];
            console.log(currentAccount);
            var SenderBalance = document.getElementById("SenderBalance");
            // var str = web3.toAscii(value[1]);
            SenderBalance.innerHTML = currentAccount;
        }).catch((err)=>{
            console.log(err);
        });
    });

    $("#addvalue").click(function(){
        var _faid = document.getElementById("farmerid").value;
        var _tennongdan = document.getElementById("farmername").value;
        var _diachi = document.getElementById("farmeraddress").value;
        var _nongsan = document.getElementById("cropname").value;
        var _sodienthoai = document.getElementById("farmerphone").value;
        var _soluong = document.getElementById("quantity").value;
        var _giadukien = document.getElementById("price").value;

        contract_MM.methods.addFarmer(_faid, _tennongdan, _diachi, _nongsan, _sodienthoai, _soluong, _giadukien).send({
            from: currentAccount
        });
    });

    $("#getvalue").click(function(){
        var fid = document.getElementById("fid").value;

        contract_MM.methods.getFarmer(fid).call({
            from: currentAccount
        }).then(function(value){
            var span_element2 = document.getElementById("getval2");
            // var str = web3.toAscii(value[1]);
            span_element2.innerHTML = value[1];

            var span_element3 = document.getElementById("getval3");
            // var str = web3.toAscii(value[2]);
            span_element3.innerHTML = value[2];	
        
            // var str = web3.toAscii(value[3]);
            var span_element4 = document.getElementById("getval4");
            span_element4.innerHTML = value[3];

            var span_element5 = document.getElementById("getval5");
            span_element5.innerHTML = value[4].valueOf();

            var span_element6 = document.getElementById("getval6");
            span_element6.innerHTML = value[5].valueOf();
            
            var span_element7 = document.getElementById("getval7");
            span_element7.innerHTML = value[6].valueOf();
        });
    });

    $("#printBlock").click(function(){
        var block = web3.eth.blockNumber;
        var blocknum = document.getElementById("blocknum");
        blocknum.innerHTML = block;
    });

    $("#approve").click(function(){
        var lotid = document.getElementById("lotid").value;
        var idfm = document.getElementById("idfm").value;
        var grade = document.getElementById("grade").value;
        var mrp = document.getElementById("mrp").value;
        var testdate = document.getElementById("testdate").value;
        var expdate = document.getElementById("expdate").value;

        contract_MM.methods.addquantity(lotid, idfm, grade, mrp, testdate, expdate).send({
            from: currentAccount
        });

    });

    $('#getvalue1').click(function(){
        // var fid1 = document.getElementById("fid1").value;
        var fid2 = document.getElementById("fid2").value;

        contract_MM.methods.getquantity(fid2).call({
            from: currentAccount
        }).then(function(value){
            var cspan_element2 = document.getElementById("cgetval8");
            // var str = web3.toAscii(value[1]);
            cspan_element2.innerHTML = value[1];

            var cspan_element3 = document.getElementById("cgetval9");
            // var str = web3.toAscii(value[2]);
            cspan_element3.innerHTML = value[2];	
        
            // var str = web3.toAscii(value[3]);
            var cspan_element4 = document.getElementById("cgetval10");
            cspan_element4.innerHTML = value[3];

            var cspan_element5 = document.getElementById("cgetval11");
            cspan_element5.innerHTML = value[4]

            var cspan_element6 = document.getElementById("cgetval12");
            cspan_element6.innerHTML = value[5]
        
        });
    });

    $("#btnFund").click(function(){
        // alert("ok");
        $.post("./investment",{
            farmer_id:$('#farmer_id').val(),
            farmer_address:$('#farmer_address').val(),
            value:$('#value').val(),
        }, function(data){
            if(data.ketqua==1){
                contract_MM.methods.Dautu(data.maloi._id).send({
                    from: currentAccount
                });
            }
        })
    });
});

function track(){
    var fid1 = document.getElementById("fid1").value;
    var web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    var contract_MM = new web3.eth.Contract(abi, addressSM);
    contract_MM.methods.getFarmer(fid1).call({
        from: currentAccount
    }).then(function(value){
        var span_element3 = document.getElementById("cgetval2");
        // var str = web3.toAscii(value[2]);
        span_element3.innerHTML = value[1];	
    
        // var str = web3.toAscii(value[3]);
        var span_element4 = document.getElementById("cgetval3");
        span_element4.innerHTML = value[2];

        var span_element5 = document.getElementById("cgetval4");
        span_element5.innerHTML = value[3].valueOf();

        var span_element6 = document.getElementById("cgetval5");
        span_element6.innerHTML = value[4].valueOf();
        
        var span_element7 = document.getElementById("cgetval6");
        span_element7.innerHTML = value[5].valueOf();

        var span_element8 = document.getElementById("cgetval7");
        span_element8.innerHTML = value[6].valueOf();
    });
}

function track1(){
    var fid2 = document.getElementById("fid2").value;
    var web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    var contract_MM = new web3.eth.Contract(abi, addressSM);
    contract_MM.methods.getquantity(fid2).call({
        from: currentAccount
    }).then(function(value){
        var cspan_element2 = document.getElementById("cgetval8");
        // var str = web3.toAscii(value[1]);
        cspan_element2.innerHTML = value[1];

        var cspan_element3 = document.getElementById("cgetval9");
        // var str = web3.toAscii(value[2]);
        cspan_element3.innerHTML = value[2];	
    
        // var str = web3.toAscii(value[3]);
        var cspan_element4 = document.getElementById("cgetval10");
        cspan_element4.innerHTML = value[3];

        var cspan_element5 = document.getElementById("cgetval11");
        cspan_element5.innerHTML = value[4]

        var cspan_element6 = document.getElementById("cgetval12");
        cspan_element6.innerHTML = value[5]
    
    });
}

async function connectMM(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}

// check metamark được cài chưa
function checkMM(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }else{
        console.log('chua cai metamark');
    }
}