DEBUG = true;

function general(str, pattern) {
    let exec = pattern.exec(str);
    if (exec == null) return false;
    else {
        if (DEBUG) {
            console.log(exec)
        }
        return true;
    }
}

function is_timeString(str) {
    let pattern = /(0[0-9]|1[0-9]|2[0-3]|[0-9]):([0-5][0-9]):([0-5][0-9])/;
    return general(str, pattern);
}

console.log("Q1");
console.log(is_timeString("11:35:30"));
console.log(is_timeString("90:90:90"));

function is_hex(str) {
    let pattern = /^[0-9a-fA-F]*$/;
    return general(str, pattern);
}

console.log("Q2");
console.log(is_hex("ffffff"));
console.log(is_hex("fgffff"));

function is_uppercase(str) {
    let pattern = /^[A-Z].*$/;
    return general(str, pattern);
}

console.log("Q3");
console.log(is_uppercase("html"));
console.log(is_uppercase("Html"));
console.log(is_uppercase("PHP"));

function is_email(str) {
    let pattern = /^[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~.@]*$/;
    let pattern2 = /^(.*?)\.{2}(.*?)$/;
    let pattern3 = /^(\..*?)|(.*?\.)$/;
    if (pattern.exec(str) != null && pattern2.exec(str) == null && pattern3.exec(str) == null) {
        //extra rule
        let num = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '@') num++;
        }
        if (num === 1) return true;
    }
    return false;
    // let exec = pattern.exec(str);
    // if(exec!=null){
    //     let exec2=pattern2.exec(str);
    //     if(exec2==null){
    //         let exec3=pattern3.exec(str);
    //         if(exec3==null){
    //             return true;
    //         }
    //     }
    // }
    // return false;
}

console.log("Q4");
console.log(is_email("vivek.nallur@ucd.ie"));
console.log(is_email("Vivek.Nallur@ucd.ie"));
console.log(is_email("Vivek.Nallur+webapp@ucd.ie"));
console.log(is_email("vivek-nallur@ucd.ie"));
console.log(is_email("vivek-nallur@ucd.ie"));
console.log(is_email(".vivek.nallur@ucd.ie"));
console.log(is_email("vivek..nallur@ucd.ie"));
console.log(is_email("vivek.nallur@@ucd.ie"));

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverse_join(array, split) {
    let r = "";
    for (let i = 0; i < array.length; i++) {
        if (i !== 0) r += ",";
        r += reverse(array[i]);
    }
    return r;
}

//This question may shouldn't use regex
function separate_thousands(str) {
    let pattern = /(\S*)(\.\S*)/;
    let front = "";
    let back = "";
    let exec = pattern.exec(str);
    if (exec != null) {
        front = exec[1];
        back = exec[2];
    } else {
        front = str.toString();
        //...
    }
    //I dont understand that...
    //front = front.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
    //return front + back;
    front = reverse(front);
    let regExpMatchArray = front.match(/\d{1,3}/g);
    return reverse_join(regExpMatchArray.reverse(), ",") + back;
}

console.log("Q5");
console.log(separate_thousands(1000));
console.log(separate_thousands(12345.67));
console.log(separate_thousands(100000));
console.log(separate_thousands(1000000));
