// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  const comments2 = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
    const even = (element) => 2021 - element.year >= 19
    console.log('==============')
    console.log('is at least one person 19 or older?')
    console.log(people.some(even))
    console.log('==============')
  // Array.prototype.every() // is everyone 19 or older?
    console.log('==============')
    console.log('is everyone 19 or older?')
    console.log(people.every(even))
    console.log('==============')

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
    const found = comments.find(element => element.id === 823423)
    console.log('==============')
    console.log('the comment with the ID of 823423')
    console.log(found)
    console.log('==============')

  // Array.prototype.findIndex()
  // Find the comment with this ID

    const findID = comments.findIndex(element => element.id === 823423) 
    console.log('==============')
    console.log('find id 823423 by index')
    console.log(findID)
    console.log('==============')
  // delete the comment with the ID of 823423

  
    comments.splice(findID, 1);
    console.log('==============')
    console.log('delete the comment with the ID of 823423')
    console.log(comments)
    console.log('==============')