function aquarium([arg1,arg2,arg3,arg4]){
    let a = parseFloat(arg1);
    let b = parseFloat(arg2);
    let c = parseFloat(arg3);
    let percent = parseFloat(arg4);
    let volume = a * b * c;
    percent = percent * 0.01;
    volume = volume -(volume * percent);
    volume = volume * 0.001;
    console.log(volume.toFixed(3))
}
aquarium(["85","75","47","17"])