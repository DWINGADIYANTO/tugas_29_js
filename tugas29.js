function regex() {
    let data = "Belajar menimba ilmu programming bersama Niomic";
    let str = new RegExp("bersama")
    console.log(str.exec(data));
    // console.log(/bersama/.exec(data));
}

regex();