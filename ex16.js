function desenha_piramide() {
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        // for (var j = 1; j <= i; j++) {
            // output +=  i + '  ';
            output += '# '.repeat(i) + ' '
        // }
        console.log(output);
        output = '';
    }
}

desenha_piramide();