//Test if the id is 13 characters long

let sample = "8801235111088";



function getBirthDate(value) {


    value = value.substring(0, 6);

    const month = [[1, "January", 31], [2, "February", 29], [3, "March", 31], [4, "April", 30],
    [5, "May", 31], [6, "June", 30], [7, "July", 31], [8, "August", 31],
    [9, "September", 30], [10, "October", 31], [11, "November", 30], [12, "December", 31]];







    console.log(value);



    if (Number(value.substring(2, 4)) >= 0
        && value.substring(2, 4) <= 11) {


        birth_month = month[Number(value.substring(2, 4)) - 1][1];
        last_date = month[Number(value.substring(2, 4)) - 1][2];

        //find birthdate
        if (Number(value.substring(4, 6)) >= 1 &&
            Number(value.substring(4, 6)) <= last_date) {
            let birth_date = Number(value.substring(4, 6));





}








            //finding the year of birth
            let currentYear = new Date().getFullYear();
            currentYear = Number(currentYear.toString().substring(2, 4));
            let birth_year = Number(value.substring(0, 2));
            if (birth_year <= currentYear) {
                birth_year = "20" + birth_year;
            }
            else { birth_year = "19" + birth_year; }







            return [birth_date, birth_month,birth_year];
        }
        else { console.log("Month is out of range"); }

    }



function send_error_for_txt(txt, lbl, error_message) {
    txt = txt.value.length;
    if (txt >= 3) {
       
        document.getElementById(lbl.id.toString()).textContent = '';
        return true;
    }

    else {
        document.getElementById(lbl.id.toString()).textContent = error_message;
        return false;
    }
}



function send_error_for_num(txt, lbl, error_message) {
    txt = txt.value;


    txt = txt.replace(/\s+/g, "");
    if (txt.length === 10 && Number(txt)) {
        document.getElementById(lbl.id.toString()).textContent = '';
        return true;
    }

    else {
        document.getElementById(lbl.id.toString()).textContent = error_message;
        return false;
    }
}


function validate(value) {

    let result = "";
    let index_value = 0;

    for (let i = 0; i < value.length; i++) {
        if (i % 2 === 1) {
            index_value = value[i] * 2;

            if (index_value.toString().length > 1) {
                index_value = Number(index_value.toString().substring(0, 1)) +
                    Number(index_value.toString().substring(1, 2));
            }

            result += index_value;
        }

        else { result += value[i]; }
    }
    let checksum = 0;

    for (let i = 0; i <= result.length; i++) {
        checksum += Number(result.toString().substring(i, i + 1));
    }
    valid = checksum % 10 === 0;
    return valid;
}









if (sample.length === 13 && Number.isInteger(parseInt(sample))) {
    if (validate(sample)) {
        //console.log("Id number is valid");

       // getBirthDate(sample);

      //  console.log(getBirthDate(sample));
    }
    else { console.log("ID number is invalid") }
}
else {
    console.log("ID must be 13 characters long");
}





function run_check(){




    check_ID_surname = send_error_for_txt(txt_ID_surname,lbl_ID_surname,'Please enter the surname on the ID Card');
    check_ID_name = send_error_for_txt(txt_ID_name,lbl_ID_name,'Please enter the name on the ID Card');
    check_finder_name = send_error_for_txt(txt_finder_name,lbl_name,'please enter your name');
    check_finder_surname = send_error_for_txt(txt_finder_surname,lbl_surname,'please enter your surname');
    check_phone_number = send_error_for_num(txt_finder_phone_number,lbl_phone_number,'please enter your number');
    check_email_address = send_error_for_txt(txt_finder_email,lbl_email_address,'please enter your emall address');

    



    let final_checkout = check_ID_name && check_ID_name && check_finder_name && check_finder_surname &&
                        check_phone_number && check_email_address;


    console.log(final_checkout);



    console.log("run check finished");

}