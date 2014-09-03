$(".reset").click(function(){
    var count=0;
    chrome.storage.sync.set({'key' : {'theValue' : count}}, function(){

          var saved = chrome.storage.sync.get('key',function(result){
            var count1 = result['key'];
            console.log(count1['theValue']);
          });
      
        });
  });
