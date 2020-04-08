function danceHall([arg1,arg2,arg3]){
    let lengthHall = parseFloat(arg1) * 100;
    let widthHall = parseFloat(arg2) * 100;
    let aWardrobe = parseFloat(arg3) * 100;
    let areaHall = (lengthHall * widthHall);
    let benchArea = areaHall / 10;
    areaHall = areaHall-(benchArea+(aWardrobe*aWardrobe));
    let dancerArea = 7040;
    let output = Math.trunc(areaHall / dancerArea);
    console.log(output);

}
danceHall(["50","25","2"])