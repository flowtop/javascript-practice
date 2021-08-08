const flip = (times) => {
    let 
        h = 0, // heads
        t = 0; // tails

    let sequence = "";

    for (let i = 0; i < times; i++) {
        if (Math.floor(Math.random() * 2) === 1) {
            h++;
            sequence += "H "
        }
        else {
            t++; 
            sequence += "T ";
        }
    }

    console.log(
        `
            Heads: ${h} times.
            Tails: ${t} times. 
            
            Sequence: ${sequence}
        `
    );
}


flip(9);