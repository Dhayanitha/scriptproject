areaBtn = document.querySelector('#button_area');

areaBtn.addEventListener('click',function(e){
    txtR = document.querySelector('#value_radius');
    txtC = document.querySelector('#value_c');

    let c;

    c = 3.14*parseFloat(txtR.value)*parseFloat(txtR.value)

        txtC.value = c;
});