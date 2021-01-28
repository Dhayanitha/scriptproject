volumeBtn = document.querySelector('#button_volume');

volumeBtn.addEventListener('click',function(e){
    txtR = document.querySelector('#value_radius');
    txtH = document.querySelector('#value_height');
    txtC = document.querySelector('#value_c');

    let c;

    c = 3.14*parseFloat(txtR.value)*parseFloat(txtR.value)*parseFloat(txtH.value);

        txtC.value = c;
});


