function xyz(auth, link, parent) {
  parent.push({
    author: auth, authorLink: link, children: []
  });
}
var comList = document.getElementsByTagName('tbody') [3].childNodes;
var auth = '';
var b = [];
//var parent = [];
root = {parentroot:b}
var parentId = - 1;
var childId = - 1;
var gchild = -1;
var ggchild = -1;

var c,d,e;
for (var i = 0; i < comList.length; i+=2) {
  auth = comList[i].childNodes[0].getElementsByTagName('td') [2].getElementsByTagName('a') [1].text;
  var link = comList[i].childNodes[0].getElementsByTagName('td') [2].getElementsByTagName('a') [1].href;
  var width = comList[i].childNodes[0].getElementsByTagName('td') [0].childNodes[0].width;
  
  var w = width/40;
  switch (width){
    case 0:
        parent = b;
        xyz(auth, link, parent);
        parentId += 1;
        childId = - 1;
        break; 
   
    case 40:
        parent = b[parentId].children;
        xyz(auth, link, parent);
        childId += 1;
        gchildId = -1;
        c = parent;
        break;

    case 80:
        parent = c[childId].children;
        xyz(auth, link, parent);
        gchildId += 1;
        ggchildId = -1;
        d = parent;
        break;
    case 120:
        parent = d[gchildId].children;
        xyz(auth, link, parent);
        ggchildId += 1;
        e = parent;

  }
}
console.log(JSON.stringify(root));
console.log(b.length);
