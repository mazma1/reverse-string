'use strict';

module.exports = {
  reverseString: (str) => {
    let reversed = "";

    for(let i = str.length-1; i >=0; i--) {
      reversed += str[i];
    }
    
    if (str == '') {
      return null;
    }
    else if (reversed == str) {
      return true;
    }   
    else {
      return (reversed);
    }
  }  
} 