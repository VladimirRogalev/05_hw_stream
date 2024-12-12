import * as fs from 'node:fs';


const readStream = fs.createReadStream('images/labrador-retriever.png');
const writeStream = fs.createWriteStream(`images/labrador-retriever_copy.png`,);

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    const photo1 = fs.statSync('images/labrador-retriever.png').size;
    const photo2 = fs.statSync('images/labrador-retriever_copy.png').size;

    if (photo1 === photo2) {
        console.log(`Photo ${photo1} equals ${photo2}`);
    } else {
        console.log("Not equals");
    }
});