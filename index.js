// code your solution here
function saturdayFun(def='roller-skate',msg='This Saturday, I want to '){
const unless= function(){
    return `${msg}${def}!`;
}
return unless();
}
function mondayWork(def='go to the office.',msg= 'This Monday, I will'  ) {
    const unless = function() {
        return `${msg} ${def}`;
    }
    return unless();
}
function mondayWork(def = 'go to the office', msg = 'This Monday, I will ') {
    return `${msg}${def}.`;
}
function wrapAdjective(wrapper) {
    return function(adjective="a dedicated programmer") {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }