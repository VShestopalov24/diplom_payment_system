import { createSignal } from 'solid-js';

const Modal = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const openModal = () => {
    setIsOpen(true); 
    const body: HTMLElement | null = document.getElementById('body'); 
    body.style.overflowY = "hidden";
  }
  const closeModal = () => {
    setIsOpen(false);
    const body: HTMLElement | null = document.getElementById('body'); 
    body.style.overflowY = "auto";
  }

  return (
    <div>
      <button class='text-sm sm:text-lg md:text-xl' onClick={openModal}>Создать выплату</button>
      {isOpen() && (
        <div class="fixed top-0 left-0 w-full h-full bg-purple bg-opacity-75 text-black cursor-default z-10 overflow-y-auto">
          <div class="relative w-5/6 sm:w-3/4 lg:w-1/2 mx-auto my-10 py-7 md:py-10 bg-light-purple rounded-3xl border-2 border-purple shadow-xl">
            <button class="absolute top-3 right-3 w-8 md:w-11" onClick={closeModal}><img src="/Close.svg" alt="Закрыть" /></button>

            <h2 class="mt-4 mb-4 sm:mb-6 w-full text-center text-lg sm:text-2xl md:text-3xl font-medium">Создание новой выплаты</h2>
            <form action="" class='w-4/5 sm:w-2/3 flex mx-auto flex-col gap-3 sm:gap-6'>

              <div class='flex flex-col gap-2 sm:gap-3'>
                <label class='text-base sm:text-lg' for="project">Название проекта:</label>
                <input class='px-3 h-8 sm:h-10 border border-purple rounded-lg sm:rounded-xl shadow-md' type="text" id='project' name='project' required />
              </div>

              <div class='flex flex-col gap-2 sm:gap-3'>
                <label class='text-base sm:text-lg' for="contract">Номер договора:</label>
                <input class='px-3 h-8 sm:h-10 border border-purple rounded-lg sm:rounded-xl shadow-md' type="text" id='contract' name='contract' required />
              </div>

              <div class='flex items-center gap-2 sm:gap-3'>
                <label class='text-base sm:text-lg' for="date">Дата:</label>
                <input class='px-3 h-8 sm:h-10 border border-purple rounded-lg sm:rounded-xl shadow-md' type="date" id='date' name='date' required />
              </div>

              <div class='flex flex-col gap-2 sm:gap-3'>
                <label class='text-base sm:text-lg' for="price">Сумма, ₽:</label>
                <input class='px-3 h-8 sm:h-10 border border-purple rounded-lg sm:rounded-xl shadow-md' type="number" id='price' name='price' min={1} required />
              </div>

              <div class='flex flex-col gap-2 sm:gap-3'>
                <label class='text-base sm:text-lg' for="employee">Выбор сотрудника:</label>
                <select class='px-3 h-8 sm:h-10 border border-purple rounded-lg sm:rounded-xl shadow-md' id='employee' name="employee">
                  {/* <option selected>Выберите сотрудника</option> */}
                  <option value="value1">Иванов Иван Иванович</option>
                  <option value="value2">Борисов Борис Борисович</option>
                  <option value="value3">Петров Петр Петрович</option>
                </select>
              </div>

              <input type="submit" class='mx-auto w-10/12 h-10 sm:h-12 bg-purple text-white rounded-lg shadow-md cursor-pointer' value="Создать" />
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;