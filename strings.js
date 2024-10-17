 const name = "Shubham-Pandey"
 const repoCount = 50
 console.log(name + repoCount + " Value");
 
 console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);
 
 const gameName = new String('Shubham-pandey')
 console.log(gameName[0]);
 console.log(gameName.__proto__);
 console.log(gameName.length);
 
 console.log(gameName.charAt('3'));
 


 console.log(gameName.indexOf('h'));
 const newString = gameName.substring(0, 4)
 console.log(newString);
 
 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString)

  const newStringOne = "     Shubham    "
  console.log(newStringOne);
  console.log(newStringOne.trim());


  const url = " https://Shubham.com/hsiscod%20jsndi"
  
  console.log(url.replace('%20','-'));
  

  console.log(url.includes('Shubham'))
  
  console.log(gameName.split('-'));
  