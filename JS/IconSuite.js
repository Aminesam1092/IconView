const submit = document.querySelector('input[type=submit]');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const divs = document.querySelectorAll('.ballon');
    divs.forEach((elem) => {
        elem.parentNode.removeChild(elem);
    });
    const rname = document.querySelector('input[name=name]');
    if (rname.value.length < 1) {
        rname.insertAdjacentHTML('beforebegin', '<div class="ballon">お名前を入力してください</div>');
    }
    const rkana = document.querySelector('input[name=kana]');
    if ((rkana.value.length < 1) || (rkana.value.search(/^[ｱ -ンヴ-]+$/) == -1)) {
        rkana.insertAdjacentHTML('beforebegin', '<div class="ballon"><p>フリガナが正しく入力されていません</p></div>');
    }
    const remail = document.querySelector('input[name=email]');
    if ((remail.value.length < 1) || (remail.value.search(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*[A-Za-z0-9]{1}@{1}[A-Za-z0-9]{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/) == -1)) {
        remail.insertAdjacentHTML('beforebegin', '<div class="ballon"><p>メールアドレスが正しく入力されていません</p></div>');
    }
    const rtel = document.querySelector('input[name=tel]');
    if (rtel.value.length > 0) {
        if (rtel.value.search(/^[0-9]+$/) == -1) {
            rtel.insertAdjacentHTML('beforebegin', '<div class="ballon"><p>電話番号が正しく入力されていません</p></div>');
        }
    }
    const rselect = document.querySelector('select');
    if (rselect.value == "") {
        rselect.insertAdjacentHTML('beforebegin', '<div class="ballon"><p>お問い合わせ内容が正しく入力されていません</p></div>');
    }
});

let OpacityOpen = document.querySelector('.CreatorInformation__Conteiner').clientWidth;
let OpacityClose = document.querySelector('.CreatorImageSliderConteiner').clientWidth;
let Slider = document.querySelectorAll('.swiperslide');

console.log(OpacityOpen + 'px');
console.log(OpacityClose + 'px');
console.log(Slider + 'px');