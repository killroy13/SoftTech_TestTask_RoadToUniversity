/**
 * Created by User on 11.05.2018.
 */

/*Add/Del Field*/
var btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', function () {
    var fieldAdd = document.createElement('div');
    fieldAdd.classList.add('field');
    fieldAdd.onclick = changeField;
    document.getElementById('road').appendChild(fieldAdd);

});

var btnDel = document.getElementById('delete');
btnDel.addEventListener('click', function () {
    var fieldDel = document.getElementsByClassName('field');
    field = document.getElementsByClassName('field')[fieldDel.length - 1];
    field.parentNode.removeChild(field);
});

function changeField() {
    this.classList.toggle("field_hummock");
};


var arrStep = [0];
var step, stepPR;

/*HISTORY PANEL*/

/*Jump*/

var jump = document.getElementsByClassName('jump');
for (var i = 0; i < jump.length; i++) {
    jump[i].onclick = addToHistoryPanel;
}

function addToHistoryPanel() {
    var cell = document.getElementsByClassName('field');
    if (arrStep.length == 1) {
        step = 1;
        stepPR = 0;
    }
    else {
        step = nextstep = 0;
        var dataPrice = this.getAttribute('data-price');
        step = parseInt(dataPrice);
        stepPR = arrStep[arrStep.length - 1] - arrStep[arrStep.length - 2];
    }
    var nextstep = stepPR + step + arrStep[arrStep.length - 1];
    arrStep.push(nextstep);
    Uptext(stepPR);
    cell[arrStep[arrStep.length - 2]].classList.toggle("student");
    cell[arrStep[arrStep.length - 1]].classList.toggle("student");
    var hisPanel = document.getElementById('historyPanel');
    var his = document.createElement('li');
    his.innerHTML = 'Jump from ' + (arrStep[arrStep.length - 2]) + ' to ' + (arrStep[arrStep.length - 1]) + ' ,length ' + (stepPR + step) + ' step.';
    hisPanel.appendChild(his);
}


/*Cancel jump*/

var cancel = document.getElementsByClassName('cancel')[0];
cancel.onclick = cancelJump;

function cancelJump() {
    var cell = document.getElementsByClassName('field');
    cell[arrStep[arrStep.length - 1]].classList.toggle("student");
    cell[arrStep[arrStep.length - 2]].classList.toggle("student");

    var arrLastElement = arrStep.pop();
    var hisPanel = document.getElementById('historyPanel');
    var can = document.createElement('li');
    can.innerHTML = 'Jump to hummock ' + arrLastElement + ' is canceled.';
    hisPanel.appendChild(can);
}

/*Text on button*/

function Uptext(PR) {
    var jump1 = document.getElementsByClassName('jump')[0];
    var step1 = parseInt(jump1.getAttribute('data-price'));
    jump1.innerText = (arrStep[arrStep.length - 1] + PR + step1);
    var jump2 = document.getElementsByClassName('jump')[1];
    var step2 = parseInt(jump2.getAttribute('data-price'));
    jump2.innerText = (arrStep[arrStep.length - 1] + PR + step2);
    var jump3 = document.getElementsByClassName('jump')[2];
    var step3 = parseInt(jump3.getAttribute('data-price'));
    jump3.innerText = (arrStep[arrStep.length - 1] + PR + step3);
}
