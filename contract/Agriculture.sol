// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Agriculture{

    uint public countFarmer = 0;
    // mô tả farmer, nó lưu trữ cái gì
    struct Farmer{
        string _faid;
        string _tennongdan;
        string _diachi;
        string _nongsan;
        uint256 _sodienthoai;
        uint _soluong;
        uint _giadukien;
        // địa chỉ ví của farmer
        address _vi;
    }
    mapping (string => Farmer) private farmerid;
    // tạo mảng hứng dữ liệu
    Farmer[] public arrayFarmer;

    // tạo function để farmer gọi
    // chức năng đăng kí thông tin
    function addFarmer(string memory _faid, string memory _tennongdan, string memory _diachi, 
    string memory _nongsan, uint256 _sodienthoai, uint _soluong, uint _giadukien) public{

        Farmer memory FarmerNew = Farmer(_faid, _tennongdan, _diachi, _nongsan, _sodienthoai, _soluong, 
        _giadukien, msg.sender);
        farmerid[_faid] = FarmerNew;
        arrayFarmer.push(FarmerNew);
        countFarmer +=1;      
    }

    // chức năng truy xuất thông tin id của người nông dấn
    function getFarmer(string memory id) public view returns(string memory, string memory, string memory, string memory, uint256, uint, uint) {
        return (farmerid[id]._faid, farmerid[id]._tennongdan, farmerid[id]._diachi, 
        farmerid[id]._nongsan, farmerid[id]._sodienthoai, farmerid[id]._soluong, 
        farmerid[id]._giadukien);
    }

    uint public countLot = 0;
    // mô tả farmer, nó lưu trữ cái gì
    struct Lot{
        string _idlot;
        string _idfm;
        string _xeploai;
        uint _mrp;
        string _ngaykiemtra;
        string _ngayhethan;
    }
    mapping (string => Lot) private lotid;
    Lot[] public arrayLot;

    function addquantity(string memory _idlot, string memory _idfm, string memory _xeploai, uint _mrp, 
    string memory _ngaykiemtra, string memory _ngayhethan) public{

        Lot memory LotNew = Lot(_idlot, _idfm, _xeploai, _mrp, _ngaykiemtra, _ngayhethan);
        lotid[_idlot] = LotNew;
        arrayLot.push(LotNew);
        countLot +=1;      
    }
    
    // function vonglap() view public returns(string memory, string memory, string memory, uint, string memory, string memory){
    //     for(uint k = 0; k < arrayFarmer.length; k++);
    //     return arrayFarmer;
    // }

    function getquantity(string memory j) public view returns(string memory, string memory, string memory, uint, string memory, string memory) {
        return (lotid[j]._idlot, lotid[j]._idfm, lotid[j]._xeploai, lotid[j]._mrp, 
        lotid[j]._ngaykiemtra, lotid[j]._ngayhethan);
    }

    uint public tongTien;
    
    mapping (address => uint) public balanceETH;

    // Payable address can receive Ether
    address payable public owner;

    // Payable constructor can receive Ether
    constructor() payable {
        owner = payable(msg.sender);
    }

    function fundaddrETH() public payable {
        // balanceETH[addr] = msg.value;
    }

    function getBalanceETH() external view returns (uint) {
        return address(this).balance;
    }

    function sendETH(address payable receiver, uint256 _amount) public {
    
        (bool success, ) = receiver.call{value: _amount}("");
        require(success, "Failed to send Ether");    
        
    }

    // rút eth về sau khi deposit, hoặc rút eth từ contract
    function withdrawETH() public {
        // lấy số lượng Ether được lưu trữ trong hợp đồng này
        uint amount = address(this).balance;

        // gửi tất cả Ether cho chủ sở hữu
        // Chủ sở hữu có thể nhận Ether vì địa chỉ của chủ sở hữu được thanh toán
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    // VỀ USD, SỐ TIỀN GÁN MẶC ĐỊNH LÀ 2000$ cho KH

    mapping (address => uint) public balances;

    function fundaddrUSD(address addr) public{
        balances[addr] = 2000;
    }

    function sendUSD(address receiver, uint amount, address sender) public returns(bool sufficient){
        
        
        if (balances[sender] < amount) 
        return false;
        
        balances[sender] -= amount;
        balances[receiver] += amount;
             
        return true;
        
    }

    function getBalanceUSD(address addr) view public returns(uint){
        return balances[addr];
    }


    







}