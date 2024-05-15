const EmployeeCards = (props) => {
    let status;
    let button;
    if(props.payment.status == "1"){
        status = <p class='flex items-center gap-1 text-green text-base xs:text-lg'><img class="w-6  xs:w-7" src='/Checkmark.svg' alt='V'/>Подтверждено</p>;
        button = "";
    }
    else{
        status = <p class='flex items-center gap-1 text-red text-base xs:text-lg'><img class="w-6  xs:w-7" src='/X.svg' alt='X'/>Не подтверждено</p>;
        button = <button class="w-2/3 xs:w-1/2 flex justify-center items-center mx-auto h-10 bg-purple text-white rounded-lg shadow-md cursor-pointer">Подтвердить</button>;
    }
  
    return (
        <div class="flex flex-col items-center gap-5 pt-6 px-7 pb-8 w-72 bg-light-purple border-2 border-solid border-purple rounded-2xl">
            {status}
            <div class="flex justify-between w-full">
                <p class="text-base xs:text-lg">{props.payment.date}</p>
                <p class="text-base xs:text-lg">{props.payment.price}</p>
            </div>
            <p class="text-base xs:text-lg text-center">Договор: {props.payment.contract}</p>
            <p class="text-base xs:text-lg text-center">Проект: {props.payment.project}</p>
            {button}
        </div>
    );
};
export default EmployeeCards;