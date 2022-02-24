let div = document.createElement('div');
let textNode = document.createTextNode('Глупая шутка про табуретку');
document.body.append(div);
div.append(textNode);
div.classList.add('goose');
let goose = document.querySelector('.goose');
goose.style.margin = "50px";
function multi(){
    let inp1 = document.getElementById('inp_1').Value,
    inp2 = document.getElementById('inp_2').Value;

    console.log(inp1*inp2);
}