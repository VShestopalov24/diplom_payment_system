import { createSignal } from 'solid-js';

const Registration = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const openRegistration = () => {
    setIsOpen(true); 
    const body: HTMLElement | null = document.getElementById('body'); 
    body.style.overflowY = "hidden";
  }
  const closeRegistration = () => {
    setIsOpen(false);
    const body: HTMLElement | null = document.getElementById('body'); 
    body.style.overflowY = "auto";
  }

  return (
    <div>
      <button class='text-sm sm:text-lg md:text-xl' onClick={openRegistration}>Новый сотрудник</button>
      {isOpen() && (
        <div class="fixed top-0 left-0 w-full h-full bg-purple bg-opacity-75 text-black cursor-default z-10 overflow-y-auto">
          <div class="relative w-5/6 sm:w-3/4 md:w-7/12 xl:w-5/12 mx-auto my-10 py-7 md:py-10 bg-light-purple rounded-3xl border-2 border-purple shadow-xl">
            <button class="absolute top-3 right-3 w-8 md:w-11" onClick={closeRegistration}><img src="/Close.svg" alt="Закрыть" /></button>

            <form action="" class="w-4/5 sm:w-2/3 flex flex-col items-center mx-auto gap-3 sm:gap-5">

                <img src="/logo.svg" alt="Логотип" class="w-16 md:w-24" />

                <h2 class="text-xl sm:text-2xl md:text-3xl text-center font-medium">Регистрация сотрудника</h2>

                <input type="text" name="full-name" placeholder="ФИО" class="w-full h-10 sm:h-12 px-4 border-2 border-purple rounded-lg shadow-md" required/>
                
                <input type="text" name="login" placeholder="Логин" class="w-full h-10 sm:h-12 px-4 border-2 border-purple rounded-lg shadow-md" autocomplete='username' required/>
                
                <input type="password" name="password" placeholder="Пароль" class="w-full h-10 sm:h-12 px-4 border-2 border-purple rounded-lg shadow-md" autocomplete="new-password" required/>
                
                <input type="password" name="password-repeat" placeholder="Повтор пароля" class="w-full h-10 sm:h-12 px-4 border-2 border-purple rounded-lg shadow-md" autocomplete="new-password" required/>
                
                <input type="submit" value="Войти" class="w-full h-10 sm:h-12 bg-purple text-white rounded-lg shadow-md cursor-pointer"/>
                
            </form>
            

          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;