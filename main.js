let selectItems = document.querySelectorAll('.select-items');

selectItems.forEach((selects) => {
    let select = selects.querySelector('.select');

    let selectDropdown = selects.querySelector('.select-dropdown');


    select.addEventListener('click', () => {
        if (selects.classList.contains('disabled')) return;
        selectDropdown.classList.toggle("is-visible");
        select.classList.toggle("actived");

        let options = selectDropdown.querySelectorAll('li');
        let selectTitle = select.querySelector('.select-title');
        let selectInput = select.querySelector('.select-input');
        options.forEach((option) => {
            option.addEventListener('click', () => {


                selectTitle.dataset.value = option.dataset.value;
                selectTitle.textContent = selectTitle.dataset.value;
                selectTitle.classList.add('is-focus');
                selectInput.value = option.dataset.value;

                select.querySelector(".arrow-line.first").classList.add("cross");
                select.querySelector(".arrow-line.second").classList.add("cross");
                select.querySelector(".select-arrow").dataset.state = "cross";

                if (selectDropdown.classList.contains("is-visible")) {
                    selectDropdown.classList.toggle("is-visible");
                    select.classList.toggle("actived");
                }

                let inputs = document.querySelectorAll('.select-input')
                if (inputs[0].value !== "") {
                    selectItems[1].classList.remove('disabled');
                }
                if (inputs[1].value !== "") {
                    selectItems[2].classList.remove('disabled');
                }
            })

        })

        document.addEventListener('click', (e) => {

            if (e.target !== selectDropdown && e.target.parentElement.parentElement !== selectDropdown && e.target !== selectTitle && e.target !== select && e.target !== select.querySelector('.select-arrow')) {
                if (selectDropdown.classList.contains("is-visible")) {
                    selectDropdown.classList.toggle("is-visible");
                    select.classList.toggle("actived");
                }
            }
        })


    })
    if (select.querySelector(".select-arrow").dataset.state === 'cross') {
        select.querySelector(".select-arrow").addEventListener('click',()=>{
            select.querySelector(".select-arrow").dataset.state = "arrow";

        })
    }
})




