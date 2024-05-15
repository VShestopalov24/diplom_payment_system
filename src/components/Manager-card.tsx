
const ManagerCards = (props) => {
    let status;
    if(props.payment.status == "1"){
        status = <p class='flex items-center gap-1 text-green text-base xs:text-lg'><img class="w-6  xs:w-7" src='/Checkmark.svg' alt='V'/>Подтверждено</p>;
    }
    else{
        status = <p class='flex items-center gap-1 text-red text-base xs:text-lg'><img class="w-6  xs:w-7" src='/X.svg' alt='X'/>Не подтверждено</p>;
    }

    return (
        <div class="flex flex-col items-center gap-5 p-25 pt-6 px-7 pb-11 w-72 bg-light-purple border-2 border-solid border-purple rounded-2xl">
            {status}
            <div class="flex justify-between w-full">
                <p class="text-base xs:text-lg">{props.payment.date}</p>
                <p class="text-base xs:text-lg">{props.payment.price}</p>
            </div>
            <p class="text-base xs:text-lg text-center">Договор: {props.payment.contract}</p>
            <p class="text-base xs:text-lg text-center">Проект: {props.payment.project}</p>
            <p class="text-base xs:text-lg text-center">Кому: {props.payment.employee}</p>
        </div>
    );
};

export default ManagerCards;