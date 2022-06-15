let text = 'malam';
    let length = text.length;
    let split = Math.round(length / 2);

    for (i = 0; i <= split; i++) {
        if (text[i] != text[length - 1 - i]) {
            console.log('bukan palindrom');
            break
        } else if (i == split) {
            console.log('palindrom');
        }
    }
