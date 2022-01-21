
var abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_vi",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_faid",
				"type": "string"
			}
		],
		"name": "SM_ban_data",
		"type": "event"
	},
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
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
		"inputs": [],
		"name": "fundaddrETH",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "fundaddrUSD",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalanceETH",
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
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getBalanceUSD",
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
				"name": "name",
				"type": "string"
			}
		],
		"name": "getFarmerName",
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
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "sendETH",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "sendUSD",
		"outputs": [
			{
				"internalType": "bool",
				"name": "sufficient",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawETH",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var addressSM = "0x152d96FC42258Fc9f4653F5cEF12da381a8f0c73";
// 2 biến trên quan trọng để kết nối với SM

var currentAccount = "";

$(document).ready(function(){

    var web3 = new Web3(window.ethereum);
    window.ethereum.enable();

	// Tạo contract cho Metamark
    var contract_MM = new web3.eth.Contract(abi, addressSM);
    console.log(contract_MM);

	// Tạo contract cho Infura để lắng nghe
    var provider = new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/b10db13bf3b24807bdc129def69d448f");
    var web3_infura = new Web3(provider);

    var contract_Infura = web3_infura.eth.Contract(abi, addressSM);
    console.log(contract_Infura);

	// gọi contract infura, lắng nghe các sự kiện mà SM nó bắn về
	contract_Infura.events.SM_ban_data({filter:{}, fromBlock:"latest"}, function(error, event){
        if(error) {
            console.log(error);
        } else {
            console.log(event);
            // nhét phần tử mới
            $('#tbDS').append(`
                <tr id="dong1">
                    <th>`+ event.returnValues[0] +`</th>
                    <th>`+ event.returnValues[1] +`</th>
                </tr>
            `)
        }
    });

	// Kiểm tra metamark đã cài chưa
    checkMM();

	refresh();

	// connect với ví metamark để gửi giao dịch
    $("#connectMM").click(function(){
        connectMM().then((data)=>{
            // console.log(data);
			// xem tài khoản nào hiện đang hoạt động
            currentAccount = data[0];
            console.log(currentAccount);

            var SenderBalance = document.getElementById("SenderBalance");
            // var str = web3.toAscii(value[1]);
            SenderBalance.innerHTML = currentAccount;

        }).catch((err)=>{
            console.log(err);
        });
    });

	$("#connectMMUSD").click(function(){
        connectMM().then((data)=>{
            // console.log(data);
            currentAccount = data[0];
            console.log(currentAccount);

            var SenderBalance = document.getElementById("SenderBalance");
            // var str = web3.toAscii(value[1]);
            SenderBalance.innerHTML = currentAccount;

			// Khi bấm kết nối ví metamark sẽ gán địa chỉ đã chọn với số tiền là 2000$
			contract_MM.methods.fundaddrUSD(currentAccount).send({
				from: currentAccount
			});

			setTimeout(function(){
				refreshU();
			}, 8000);

        }).catch((err)=>{
            console.log(err);
        });
    });

    $("#addvalue").click(function(e){
		// bắt giá trị gõ trong input
        var _faid = document.getElementById("farmerid").value;
        var _tennongdan = document.getElementById("farmername").value;
        var _diachi = document.getElementById("farmeraddress").value;
        var _nongsan = document.getElementById("cropname").value;
        var _sodienthoai = document.getElementById("farmerphone").value;
        var _soluong = document.getElementById("quantity").value;
        var _giadukien = document.getElementById("price").value;

		if(currentAccount.length==0){
			alert('You are not logged in metamark wallet');
		}
		else{
			contract_MM.methods.addFarmer(_faid, _tennongdan, _diachi, _nongsan, _sodienthoai, _soluong, _giadukien).send({
				from: currentAccount
			});

			// test qr code
			// alert(_faid);
			var qrcode = new QRCode(document.getElementById("qrcode"), {
				text: _faid,
				width: 128,
				height: 128,
				colorDark : "#000000",
				colorLight : "#ffffff",
				correctLevel : QRCode.CorrectLevel.M
			});
		}
 
		// e.preventDefault();  //stop the browser from following
    	// window.location.href = '../../../frontend/qrcode/q1.png';
    });
	
    $("#getvalue").click(function(){
		var item=document.getElementById("content").innerText;
        document.getElementById("fid").value = item;

        var fid = document.getElementById("fid").value;
		// giao tiếp với nút của nhà cung cấp Web3 và yêu cầu nó trả về dữ liệu với dữ liệu truyền vào là fid
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

		if(currentAccount.length==0){
			alert('You are not logged in metamark wallet');
		}
		else {
			contract_MM.methods.addquantity(lotid, idfm, grade, mrp, testdate, expdate).send({
				from: currentAccount
			});
		}
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

	// bỏ
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
	// bỏ

	$('#fund').click(function(){

		var depositETH = document.getElementById("depositETH").value;

		if(currentAccount.length==0){
			alert('You are not logged in metamark wallet');
		}
		else {
			contract_MM.methods.fundaddrETH().send({
				from: currentAccount,
				value: web3.utils.toWei(depositETH, 'Ether')
			});
			// value: web3.utils.toWei(web3.utils.toBN(depositETH), 'Ether')

			setTimeout(function(){
				refresh();
			}, 8000);
		}	
	});

	$('#withdraw').click(function(){

		if(currentAccount.length==0){
			alert('You are not logged in metamark wallet');
		}
		else {
			contract_MM.methods.withdrawETH().send({
				from: currentAccount,
			});

			setTimeout(function(){
				refresh();
			}, 8000);
		}
	});

	$('#fundfarmer').click(function(){
		var addressfm = document.getElementById("addressfm").value;
        var lotid = document.getElementById("lotid").value;
        var valueETH = document.getElementById("valueETH").value;

		var _valueETH = web3.utils.toWei(valueETH, 'Ether');
		
		if(currentAccount.length==0){
			alert('You are not logged in metamark wallet');
		}
		else {
			contract_MM.methods.sendETH(addressfm, _valueETH).send({
				from: currentAccount,
			});

			setTimeout(function(){
				refresh();
			}, 8000);
		}
		
	});

	$('#fundfarmerUSD').click(function(){
		var addressfm = document.getElementById("addressfm").value;
        var lotid = document.getElementById("lotid").value;
        var valueUSD = document.getElementById("valueUSD").value;
		
		if(currentAccount.length==0){
			alert('You are not logged in metamark wallet');
		}
		else {
			contract_MM.methods.sendUSD(addressfm, valueUSD, currentAccount).send({
				from: currentAccount,
			});

			setTimeout(function(){
				refreshU();
			}, 8000);
		}
		
	});
});

function refresh(){
	var balance = document.getElementById("balance");

	var web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    var contract_MM = new web3.eth.Contract(abi, addressSM);

	contract_MM.methods.getBalanceETH().call({
		from: currentAccount
	}).then(function(value){
		console.log(value);
		balance.innerHTML = web3.utils.fromWei(web3.utils.toBN(value), 'Ether');
		console.log("Balance Updated!");
	});
}

function refreshU(){
	var balanceUSD = document.getElementById("balanceUSD");

	var web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    var contract_MM = new web3.eth.Contract(abi, addressSM);

	contract_MM.methods.getBalanceUSD(currentAccount).call({
		from: currentAccount
	}).then(function(value){
		console.log(value);
		balanceUSD.innerHTML = value;
	});
}

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

// function printTransaction(txHash) {
	
// 	var web3 = new Web3(window.ethereum);
//     window.ethereum.enable();
// 	var txHash = web3.eth.getBlock("latest");
// 	var tx = web3.eth.getTransaction(txHash);
	
// 	if (tx != null) {
// 	  console.log("  tx hash          : " + tx.hash + "\n"
// 		+ "   nonce           : " + tx.nonce + "\n"
// 		+ "   blockHash       : " + tx.blockHash + "\n"
// 		+ "   blockNumber     : " + tx.blockNumber + "\n"
// 		+ "   transactionIndex: " + tx.transactionIndex + "\n"
// 		+ "   from            : " + tx.from + "\n" 
// 		+ "   to              : " + tx.to + "\n"
// 		+ "   value           : " + tx.value + "\n"
// 		+ "   gasPrice        : " + tx.gasPrice + "\n"
// 		+ "   gas             : " + tx.gas + "\n"
// 		+ "   input           : " + tx.input);
	
	
	
// 	}
//   }

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