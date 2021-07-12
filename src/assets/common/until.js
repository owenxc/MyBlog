export const format = (value)=>{
    if (typeof value == "undefined") {
        return "";
      } else {
        let date = new Date(parseInt(value));
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? "0" + MM : MM;
        let d = date.getDate();
        d = d < 10 ? "0" + d : d;
        let h = date.getHours();
        h = h < 10 ? "0" + h : h;
        let m = date.getMinutes();
        m = m < 10 ? "0" + m : m;
        let s = date.getSeconds();
        s = s < 10 ? "0" + s : s;
        return y + "年" + MM + "月" + d + "日" + " " + h + ":" + m + ":" + s;
      }
}