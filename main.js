function showDropdown(btn, dropdown, arrows = null) {
    if (!btn.classList.contains('disabled')) {

        dropdown.classList.toggle('is-visible');
        btn.classList.toggle("actived");

        if (arrows !== null) {
            arrows.forEach((arrow) => {
                arrow.classList.toggle('actived');
            })
        }

    }


}


function disabled() {
    const inputs = document.querySelectorAll('.select-input');
    const btns = document.querySelectorAll('.select-btn');

    for (let i = 0; i < 2; i++) {
        if (inputs[i].value) {
            btns[i + 1].classList.remove('disabled');
        } else {
            btns[i + 1].classList.add('disabled');
        }
    }
}

function reset() {
    const btns = document.querySelectorAll('.select-btn');
    btns.forEach((btn) => {
        let btnText = btn.querySelector('.select-title');
        let btnArrows = btn.querySelectorAll('.arrow-line');
        let input = btn.querySelector('.select-input');


        input.value = "";
        btnText.textContent = btnText.dataset.value;
        btnText.classList.remove('is-focus');


        btnArrows.forEach((arrow) => {
            arrow.classList.remove('is-focus');
        })
    })

    disabled();
}


const resetBtn = document.querySelector('input[type=reset]');
resetBtn.addEventListener('click', reset);

const selects = document.querySelectorAll('.select');

selects.forEach((select) => {
    let selectBtn = select.querySelector('.select-btn');
    let dropdown = select.querySelector('.select-dropdown');

    const dropdownOptions = dropdown.querySelectorAll('.custom-options li');


    selectBtn.addEventListener("click", () => {
        showDropdown(selectBtn, dropdown, btnArrows);
        if (dropdown.classList.contains('is-visible')) {
            document.addEventListener("click", function _listener(e) {
                if (e.target !== dropdown && e.target !== selectBtn && e.target.parentElement.className !== "custom-options") {

                    showDropdown(selectBtn, dropdown, btnArrows);
                }
                document.removeEventListener("click", _listener, true);
            }, true);
        }
    });

    let btnText = select.querySelector('.select-title');
    let btnInput = select.querySelector('.select-input');
    let btnArrows = select.querySelectorAll('.arrow-line');

    dropdownOptions.forEach((option) => {
        option.addEventListener("click", () => {
            let value = option.dataset.value

            btnText.textContent = value;
            btnInput.value = value;

            if (!btnText.classList.contains('is-focus')) {
                btnText.classList.toggle('is-focus');
                btnArrows.forEach((arrow) => {
                    arrow.classList.toggle('is-focus');
                })
            }

            showDropdown(selectBtn, dropdown, btnArrows);
            disabled();

        });

    });


});
/*
function  outside() {

    const btns = document.querySelectorAll('.select-btn')
    btns.forEach((btn)=>{
        btn.nextElementSibling.classList.remove('is-visible');
    })
}
document.addEventListener('click', ()=>{
    outside();
})*/
