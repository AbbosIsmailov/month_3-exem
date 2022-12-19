let mavzu = document.getElementById('mavzu');
let header_name = document.getElementById('header_name');
mavzu.addEventListener('click', () => {
      document.body.classList.toggle('mavzu')
})
///////////////////////////////////////////////////// 1-boshlandi
let lavozim = document.getElementById('lavozim');
let btn_lavozim = document.getElementById('btn-lavozim');
let lavozim_qaytaruvchi = document.getElementById('lavozim-qaytaruvchi');

let forma = document.querySelector('#forma');
forma.onsubmit = function (event) {
      event.preventDefault();
}

btn_lavozim.addEventListener('click', () => {
      let a = lavozim.value.toLowerCase();
      if (a === 'ishchi') {
            lavozim_qaytaruvchi.innerHTML = 'Hello...';
      }
      else if (a === 'director') {
            lavozim_qaytaruvchi.innerText = 'Greetings...';
      }
      else if (a === '') {
            lavozim_qaytaruvchi.innerHTML = 'No login'
      }
      else {
            lavozim_qaytaruvchi.innerHTML = 'Bunday lavozim yo\'q'
      }
});
////////////////////////////////////////////////////////// 2-boshlandi
let btn_farq = document.getElementById('btn-farq');
btn_farq.addEventListener('click', () => {
      let sana_1 = document.getElementById('sana-1');
      let sana_2 = document.getElementById('sana-2');
      let sana_farqi = document.getElementById('sana_farqi');
      let date_1 = new Date(sana_1.value);
      let date_2 = new Date(sana_2.value);
      let result = Math.abs(date_2 - date_1);
      let farq_sana = result / (1000 * 60 * 60 * 24);
      sana_farqi.innerHTML =`${farq_sana} kun`;
});
/////////////////////////////////////////////////////////////// 3 - boshlandi
let son_kiritish = document.getElementById('son-kiritish');

son_kiritish.addEventListener('input', (event) => {
      let kir_son = document.getElementById('kir-son');
      let qiymat = +event.target.value;
      let m = Math.floor(qiymat / 10);
      let n = qiymat % 10;
      let a = Math.ceil(qiymat / 10);
      switch (m) {
            case 1: m_value = 'o\'n'; break;
            case 2: m_value = 'yigirma'; break;
            case 3: m_value = 'o\'ttiz'; break;
            case 4: m_value = 'qirq'; break;
            case 5: m_value = 'ellik'; break;
            case 6: m_value = 'oltimish'; break;
            case 7: m_value = 'yetimish'; break;
            case 8: m_value = 'sakson'; break;
            case 9: m_value = 'toqson'; break;
      }
      switch (n) {
            case 0: n_value = 'nol'; break;
            case 1: n_value = 'bir'; break;
            case 2: n_value = 'ikki'; break;
            case 3: n_value = 'uch'; break;
            case 4: n_value = 'tort'; break;
            case 5: n_value = 'besh'; break;
            case 6: n_value = 'olti'; break;
            case 7: n_value = 'yetti'; break;
            case 8: n_value = 'sakkiz'; break;
            case 9: n_value = 'toqqiz'; break;
      }
      if (qiymat === 10) {
            kir_son.innerHTML = 'o\'n';
      }
      else if (a == 1) {
            kir_son.innerHTML = n_value;
      }
      else if (son_kiritish.value === ''){
            kir_son.innerHTML = ''
      }
      else if (n == 0) {
            kir_son.innerHTML = m_value;
      }
      else {
            kir_son.innerHTML = m_value + n_value
      }
})
////////////////////////////////////////////////////////////////// 4-boshlandi
let array = [3, 5, 22, 5, 7, 2, 45, 75];
let array_qiymati = document.getElementById('array-qiymati');
let sum = 0;
for (let i = 0; i < array.length; i++) {
      let yigindi = array[i] + 3;
      sum += yigindi;
}
array_qiymati.innerHTML = sum;
////////////////////////////////////////////////////////////////// 5-boshlandi
let array_2 = [3, 4, 12, 6, 9, 10];
let array_3 = [2, 6, 12, 15, 4, 5];
let natija_array = [];
let qiymat_array = document.getElementById('qiymat-array')

for (let i = 0; i < array_2.length; i++) {
      let yigindi = array_2[i] + array_3[i];
      natija_array.push(yigindi);
}
qiymat_array.innerHTML = `[${natija_array.join(', ')}]`;
/////////////////////////////////////////////////////////////////// 7-boshlandi
let max_ism = document.querySelector('.forma');
max_ism.onsubmit = function (e) {
      e.preventDefault();
}
let name_age = document.getElementById('name-age');
let first_name = document.getElementById('first-name');
let age_7 = document.getElementById('age-7');
let btn_7 = document.getElementById('btn_7');
btn_7.addEventListener('click', () => {
      name_age.innerHTML = `Name: ${first_name.value} <br> Age: ${age_7.value}`
})
//////////////////////////////////////////////////////////////////// 8-boshlandi
let array_dalete = [2, 7, 42, 23, 6, 53, 12, 4, 18];
let array_ochirish = document.querySelector('.array_ochirish');
let btn_dalete = document.getElementById('btn_dalete');
let och_array = document.getElementById('och-array');
btn_dalete.addEventListener('click', () => {
      array_ochirish.value
      let p = document.createElement('p')
      for (let i = 0; i < array_dalete.length; i++) {
            if (array_ochirish.value == array_dalete[i]) {
                  delete array_dalete[i]
            }
      }
      p.innerHTML = `[${array_dalete.join(' ')}]`;
      och_array.appendChild(p);
});
////////////////////////////////////////////////////////////////// 9-boshlandi
let ismlar = document.getElementById('Ismlar');
let ism_chiqarish = document.getElementById('ism_chiqarish');

let ism_list = document.getElementsByClassName('ism_list')[0];
ism_list.onsubmit = function (event) {
      event.preventDefault();
}

ismlar.addEventListener('keyup', chiqarish)
function chiqarish(e) {
      if (e.keyCode == 13) {
            let p = document.createElement('p');
            p.innerHTML = ismlar.value;
            ism_chiqarish.appendChild(p);
            ismlar.value = ''
      }
}

