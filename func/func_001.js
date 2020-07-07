import concat from 'goss_concat'

function gossConcat(r = 255,g = 255,b = 255){
    return [r, g, b].some((rgbColor) => rgbColor < 0 || rgbColor > 255)
    ? 'цвет rgb должен иметь значение от 0 до 255 включительно'
    : concat('rgb(',r,',',g,',',b,')')
}

let x = 33;
let y = 43
let z = 233;

console.log(gossConcat(x,y,z))