



export default class id{

    //Declare variables
    idNumber = "";
    idSurname = "";
    idName = "";

    finderSurname = "";
    finderName = "";
    finderPhoneNumber = "";
    finderPhoneNumber = "";
    


    //get Data

    id(idNumber, idSurname, idName, finderName,
        finderSurname, finderPhoneNumber, finderEmailAddress) {

        this.idNumber = idNumber;
        this.idSurname = idSurname;
        this.idName = idName;
        this.finderName = finderName;
        this.finderSurname = finderSurname;
        this.finderPhoneNumber = finderPhoneNumber;
        this.finderEmailAddress = finderEmailAddress;

    }




     showAll(){
        
        print(idNumber);
        print(idSurname);       
        print(idName);
        print(finderName);
        print(finderSurname);
        print(finderPhoneNumber);
        print(finderEmailAddress);
    }




}





