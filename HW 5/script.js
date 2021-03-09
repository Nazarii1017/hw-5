//task 1
function propsCount(obj) {
    const counter = Object.keys(obj).length;
    console.log(counter);
    return counter;
  }
  const mentor = {
    course: 'JS',
    duration: 3,
    direction: 'web'
  };
  
  propsCount(mentor)
//task 2
function showProps(obj) {
    let propsArray = [];
    let valuesArray = [];
    
    for(let key in obj) {
      const value = obj[key];
      
      propsArray.push(key);
      valuesArray.push(value);
    }
    console.log(propsArray);
    console.log(valuesArray);
    
    return propsArray, valuesArray;
  }
  const intern = {
    name: 'Nazarii',
    surname: 'Kutepiv',
    salary: "$1000",
    position: 'Front-end developer',
    grade: 'Junior'
  };
  
  showProps(intern)
  //task 3
  function propsCount(obj) {
    const counter = Object.keys(obj).length;
    console.log(counter);
    return counter;
  }
  const mentor = {
    course: 'JS',
    duration: 3,
    direction: 'web'
  };
  
  propsCount(mentor)
  //task 4
  function showProps(obj) {
    let propsArray = [];
    let valuesArray = [];
    
    for(let key in obj) {
      const value = obj[key];
      
      propsArray.push(key);
      valuesArray.push(value);
    }
    console.log(propsArray);
    console.log(valuesArray);
    
    return propsArray, valuesArray;
  }
  const intern = {
    name: 'Nazarii',
    surname: 'Kutepiv',
    salary: "$1000",
    position: 'Front-end developer',
    grade: 'Junior'
  };
  
  showProps(intern)
  //task 5