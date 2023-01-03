//import logo from "../logo.svg"; //javascript로서 import하려면 src내에 있는 파일만 불러올 수 있다. => 보안상 이유로 리액트에서 막는다.


function ImgComponent(){
    return(
        // <img src={logo} alt="이미지"/>
        <img src="/logo192.png" alt="이미지" /> //<img src="/"> 하면 지금 public폴더에 위치하고 있는 것이다.
    )
}

export default ImgComponent;