(function() {
    var element = document.querySelector('[data-twb]'),
        scope = {};
                  
         var propToBind = element.getAttribute('data-twb');
            
         element.onkeyup = function(){
                scope[propToBind] = element.value;
                addScopeProperty(propToBind);
            }
        
  
        
        function addScopeProperty(prop){
            document.getElementById("name").innerHTML=scope[prop];
          
        }
    
   
    changeNameByCode = function() {
        scope.name = 'name Changed by Code';
        document.querySelector('[data-twb]').value=scope.name;
        document.getElementById("name").innerHTML=scope.name;
    }
  
   
  })();