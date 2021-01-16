setTo = (x, tab) => {
  tabs = document.getElementsByClassName('tab')
  for(let i = 0; i < 2; i++)
    if(tabs[i] == x)
      tabs[i].classList.add('selected')
    else
      tabs[i].classList.remove('selected')

  contents = document.getElementsByClassName('content')
  for(let i = 0; i < 2; i++) {
    if(contents[i].id == tab)
      contents[i].classList.add('show')
    else
      contents[i].classList.remove('show')
  }
}

// var x = 0;
// var left = document.getElementById('left');
// var right=document.getElementById('right');
// var create = id => {
//     let space = document.createElement('p');
//     let text = document.createTextNode("salam");
//     space.appendChild(text);
//     space.setAttribute("id", id);
//     return space;
// };
// window.addEventListener("keydown", el => {
//     var code = el.keyCode;
//     var insl = create(`chiz-${x}`);
//     var insr = create(`rhiz-${x}`);
//     if (code == 40){
//         x -=1;
//         if (x<0) x = 0;
//         else {
//             document.getElementById(`chiz-${x}`).remove();
//             document.getElementById(`rhiz-${x}`).remove();
//         }
//     }
//     else if (code == 38){
//         left.appendChild(insl);
//         right.appendChild(insr);
//         x += 1;
//     }
//     console.log(x);
//     el.preventDefault();
// }, true);



// function func() {
//     time1 = document.getElementById("t1").value;
//     time2 = document.getElementById("t2").value;
//     time = document.getElementById("t3").value;
//     let [h1, m1] = time1.split(":");
//     let [h2, m2] = time2.split(":");
//     [H, M] = [Number(h1) + Number(h2), Number(m1) + Number(m2)];
//     if (M >= 60) {
//         M -= 60;
//         H++;
//     }
//     if (M < 10) M = "0" + M;
//     document.getElementById("t3").value = H + ":" + M;
// }

// function Publication(title, author, pubDate) {
//     function antar() {
//         return "kif";
//     }
//     var publicAPI = {
//         note: "salam ",
//         ans: this.note + antar(),
//         print() { console.log(`
//                     Title: ${ title }
//                     By: ${ author }
//                     ${ pubDate }
//     `); }
//     };
//     return publicAPI;
// }

// //var a = new Publication("kif", "kaf", "kof");
// var a = {
//     name: "ali",
//     last: "hsni",
//     f: {
//         full: this.name + " " + this.last
//     }
// };
// //a.an();
// console.log(a);
// //a.print();

// var Rate = {"1315" :"0.004", "1316" :"0.004", "1317" :"0.004", "1318" :"0.004", "1319" :"0.004", "1320" :"0.008", "1321" :"0.012", "1322" :"0.029", "1323" :"0.029",
// "1324" :"0.025", "1325" :"0.021", "1326" :"0.025", "1327" :"0.025", "1328" :"0.029", "1329" :"0.021", "1330" :"0.025", "1331" :"0.025", "1332" :"0.029", "1333" :"0.033", "1334" :"0.033",
// "1335" :"0.037", "1336" :"0.037", "1337" :"0.037", "1338" :"0.045", "1339" :"0.049", "1340" :"0.049", "1341" :"0.049", "1342" :"0.049", "1343" :"0.053", "1344" :"0.053", "1345" :"0.053", "1346" :"0.053", "1347" :"0.053",
// "1348" :"0.053", "1349" :"0.057", "1350" :"0.057", "1351" :"0.062", "1352" :"0.071", "1353" :"0.079", "1354" :"0.087", "1355" :"0.104", "1356" :"0.138", "1357" :"0.140", "1358" :"0.157", "1359" :"0.195",
// "1360" :"0.240", "1361" :"0.271", "1362" :"0.323", "1363" :"0.411", "1364" :"0.419", "1365" :"0.481", "1366" :"0.629", "1367" :"0.813", "1368" :"0.944", "1369" :"1.040", "1370" :"1.249", "1371" :"1.555",
// "1372" :"1.905", "1373" :"2.569", "1374" :"3.835", "1375" :"4.753", "1376" :"5.539", "1377" :"6.561", "1378" :"7.889", "1379" :"8.859", "1380" :"9.881", "1381" :"11.188",
// "1382" :"12.743", "1383" :"14.605", "1384" :"16.373", "1385" :"18.616", "1386" :"21.823", "1387" :"27.398", "1388" :"29.992", "1389" :"34.167",
// "1390" :"43.175", "1391" :"55.505", "1392" :"73.307", "1393" :"84.175", "1394" :"93.676", "1395" :"100.000", "1396" :"108.129", "1397" :"136.925", "1398" :"183.995"};
// function YearCal() {
//     for(let i = 1357; i <= 1398; i++)
//         console.log(`${i}: ${((Rate[i]/Rate[i-1]-1)*100).toFixed(2)}%`);
// 	var year_amount = document.getElementById('Money').value;
// 	var first_year = document.getElementById('FRM').value;
// 	var second_year = document.getElementById('To').value;
// 	if(Rate[first_year]==0){Result = 0;}else {Result=(Rate[second_year]*year_amount)/Rate[first_year];}
// 	document.getElementById('MR').value = (Math.round(Result)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	
// }