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
                "name": "",
                "type": "string"
            }
        ],
        "name": "farmerid",
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
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "lotid",
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
    }
];

var addressSM = "0x204D8D42a3C7e120dc2De6437988E41b13021EC8";

var currentAccount = "";

$(document).ready(function(){

    checkMM();
});

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

function test(){
    var fid = document.getElementById("fid").value;
    var web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    var contract_MM = new web3.eth.Contract(abi, addressSM);
    contract_MM.methods.getFarmer(fid).call({
        from: currentAccount
    }).then(function(value){
        alert(value[1]);
    });
}