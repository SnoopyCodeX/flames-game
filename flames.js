const doFLAMES = (name1, name2) => {
    let flames = 'FLAMES';
    let arrFlames = flames.split('');
    let objFlames = {
        F: 'Friends',
        L: 'Lovers',
        A: 'Affection',
        M: 'Marriage',
        E: 'Enemy',
        S: 'Siblings'
    };

    let name1Arr = name1.toLowerCase().replace(' ', '').split('');
    let name2Arr = name2.toLowerCase().replace(' ', '').split('');

    name1Arr = name1Arr.filter((letter) => !name2.toLowerCase().replace(' ', '').includes(letter));
    name2Arr = name2Arr.filter((letter) => !name1.toLowerCase().replace(' ', '').includes(letter));

    let lettersCount = name1Arr.length + name2Arr.length;
    let flamesLength = flames.length;
    let index = 0;

    while(flamesLength > 1) {
        index = Math.floor(lettersCount % flamesLength);

        if(index == 0)
            flames = flames.replace(arrFlames[flamesLength - 1], '');
        else {
            flames = flames.replace(arrFlames[index - 1], '');
            flames = flames.substring(index - 1) + flames.substring(0, index - 1);
        }

        arrFlames = flames.split('');
        flamesLength -= 1;
    }

    return objFlames[flames];
};

$('.alert>#close-alert').on('click', (e) => {
    $('.alert').removeClass(['alert-danger', 'border-success', 'border-danger', 'alert-success', 'show']);
    $('.alert>#message').removeClass(['text-success', 'text-danger']);
    $('.alert>#message').text('');
});

$('form').on('submit', (e) => {
    e.preventDefault();
    
    let name1 = $('#yourname').val();
    let name2 = $('#yourcrushname').val();

    if(name1.length < 1 || name2.length < 1) {
        $('.alert>#message').text('Fill in all the input fields!');

        $('.alert>#message').addClass('text-danger');
        $('.alert').addClass(['alert-danger', 'border-danger', 'show']);

        return;
    }

    // $('form').trigger('reset');
    let result = doFLAMES(name1, name2);

    $('.alert>#message').html(`The result is:&nbsp;&nbsp;&nbsp;<strong>${result}</strong>`);
    $('.alert>#message').addClass('text-success');
    $('.alert').addClass(['alert-success', 'border-success', 'show']);
});