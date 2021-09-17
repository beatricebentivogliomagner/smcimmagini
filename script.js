var txtFile = new XMLHttpRequest();
txtFile.open("GET", './smc-assets.csv', false);
txtFile.onreadystatechange = function() {
  allText = txtFile.responseText;
  console.log(allText);
};


$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "./smc-assets.csv",
    dataType: "text",
    success: function(data) {processData(data);}
  });
});

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  console.log(allTextLines);
  allTextLines.forEach( (url)=>{
    $('#images').append("<img src="+url+"/>");
  })
}