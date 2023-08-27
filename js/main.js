let show = true;
let open = document.querySelector('.shop__select');
        function showCheckboxes() {
            let checkboxes = 
                document.getElementById("checkBoxes");
  
            if (show) {
                checkboxes.style.display = "block";
                checkboxes.style.height = "400px";
                checkboxes.style.overflow = "auto";
                show = false;
                open.classList.add('select__open');

            } else {
                checkboxes.style.display = "none";
                checkboxes.style.height = "0";
                // checkboxes.style.overflow = "hidden";
                show = true;
            }
        }

//mask

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
// save email and password btn
let save = document.querySelector('.btn__save-mail');
let change = document.querySelector('.btn__change-password');
let inputEmail = document.querySelector('.interest__mail');
let inputPassword = document.querySelector('.interest__password');
let saveNumber = document.querySelector('.contacts__phone1-button');
let changeNumber = document.querySelector('.contacts__phone2-button');
let tel = document.querySelector('.tel');
let tel2 = document.querySelector('.tel2')

save.addEventListener('click', () => {
    save.setAttribute('disabled','disabled');
    save.classList.add('disable__btn');
    inputEmail.classList.add('disabled-input');
    inputPassword.classList.add('disabled-input');
})
change.addEventListener('click', () => {
    save.removeAttribute('disabled','disabled');
    inputEmail.classList.remove('disabled-input');
    inputPassword.classList.remove('disabled-input');
    save.classList.remove('disable__btn');
});
saveNumber.addEventListener('click', () => {
    saveNumber.setAttribute('disabled', 'disabled');
    save.classList.add('disable__btn');
    tel.classList.add('disabled-input');
    tel2.classList.add('disabled-input');
});
changeNumber.addEventListener('click', () => {
    saveNumber.removeAttribute('disabled', 'disabled');
    save.classList.remove('disable__btn');
    tel.classList.remove('disabled-input');
    tel2.classList.remove('disabled-input');
})