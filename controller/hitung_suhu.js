function temperature(suhu,satuan,konv){
    if (satuan == "c" && konv =="f"){
   let fehrenheit =  (9/5 * suhu) + 32 ;
   console.log("maka hasil dalam fehrenheit adalah " + fehrenheit);
 return fehrenheit
}else if (satuan == "c" && konv == "r" ){
    let reamure = suhu *4/5;
    console.log("maka hasil dalam reamure adalah " + reamure);
}else if (satuan == "f" && konv == "c" ){
    let celcius = (suhu - 32) * 5/9;
    console.log("maka hasil dalam celcius adalah " + celcius);
}else if (satuan == "f" && konv == "r" ){
    let reamure = (suhu - 32) *4/9;
    console.log("maka hasil dalam reamure adalah " + reamure);
}else if (satuan == "r" && konv == "c" ){
    let celcius = suhu *5/4;
    console.log("maka hasil dalam celcius adalah " + celcius);
}else if (satuan == "r" && konv == "f" ){
    let fehreinheit = (suhu *9/4)+32;
    console.log("maka hasil dalam fehrenheit adalah " + fehrenheit);
} else{
    console.log ("Silahkan isi dengan benar!");
}
}