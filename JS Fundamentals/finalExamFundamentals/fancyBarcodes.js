function fancyBarcodes(input) {
    let count = Number(input.shift());
    let pattern = /^\@\#+([A-Z][a-zA-Z0-9]{4,}[A-Z])\@\#+$/
    for (let line of input) {
        line = line.trim();
        let code = pattern.exec(line)
        if(code !== null) {
            let productGroup = '00';
            let numPattern = /[0-9]/g
            code = code[1]; 
            let allNums = code.match(numPattern);
            if(allNums !== null) {
                productGroup = allNums.join('');
            }
            console.log(`Product group: ${productGroup}`);
        }else {
            console.log('Invalid barcode');
            
        }
    
    }
    
    }
fancyBarcodes([
    '6',
    '@###Val1d1teM@### ',
    '@#ValidIteM@# ',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ])