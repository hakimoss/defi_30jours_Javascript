const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello')
    
    // Interpolated
    console.log('hello I am a %s developper', 'good')

    // Styled
    console.log('%c hello i am a great developper', 'font-size: 50px; background-color: blue; text-shadow: 5px 5px 0 red')

    // warning!
    console.warn('take care, warning test')

    // Error :|
    console.error('error test')

    // Info
    console.info('some news there')

    // Testing
    console.assert(2 === 2, '1 not equal 2')

    // clearing
    // console.clear()

    // Viewing DOM Elements
    const p = document.querySelector('p')
    console.log(p)
    // console.dir(p)

    // Grouping together
    dogs.forEach( dog => {
        console.groupCollapsed(`${dog.name}`)
        console.log(`this dog ${dog.name}`)
        console.log(`${dog.name} are ${dog.age} old years`)
        console.log(`In 3 years ${dog.name} will are ${dog.age + 3} old years`)
        console.groupEnd(`${dog.name}`)

    })

    // counting
    console.count('WES')
    console.count('Hakim')
    console.count('Hakim')
    console.count('WES')
    console.count('Hakim')
    console.count('WES')
    console.count('WES')
    console.count('Hakim')
    console.count('WES')
    console.count('Hakim')
    console.count('WES')

    // timing
    console.time('fetching data')
    fetch('https://api.github.com/users/hakimoss')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data')
            console.log(data)
        });

    console.table(dogs)