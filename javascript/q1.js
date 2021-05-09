let o = ['rd', 'th', 'nd', 'st'];
let color = ['Blue', 'Green', 'Red', 'Black', 'Yellow', 'Orange', 'White',
'Purple', 'Violet', 'Indigo', 'Gray', 'Pink'];

for(let index=1; index <= color.length ; index++){
    switch(index){
        case 1:
            console.log(`1${o[3]} choice is ${color[index-1]}`);
            break;
        case 2:
            console.log(`2${o[2]} choice is ${color[index-1]}`);
            break;
        case 3:
            console.log(`3${o[1]} choice is ${color[index-1]}`);
            break;
        default:
            console.log(`${index}${o[0]} choice is ${color[index-1]}`);
            break;
    }
}