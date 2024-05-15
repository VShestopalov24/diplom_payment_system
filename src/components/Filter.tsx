export default function Filter() {
    
  return (
    <form class="w-full md:w-52 h-fit mb-5 md:mb-0 border-b-2 md:border-b-0 md:border-r-2 border-purple relative" id="filter">
        {/* <button class="absolute block md:hidden" id="closeButton">Свернуть</button> */}
        <h3 class="text-center text-xl md:text-2xl mb-2 font-medium">Сортировать</h3>
        <fieldset>
            <div class="flex flex-wrap justify-center md:block gap-2">
                <legend class="text-base md:text-lg my-1 md:my-2">По новизне:</legend>
                <div class="flex flex-wrap justify-center md:block gap-3">
                    <div class="flex items-center gap-2 my-1 md:my-2">
                        <input class="w-4 md:w-5 h-4 md:h-5" type="radio" id="newnessChoice1" name="newness" value="new" />
                        <label class="text-sm md:text-base" for="newnessChoice1">Новые</label>
                    </div>
                    <div class="flex items-center gap-2 my-1 md:my-2">
                        <input class="w-4 md:w-5 h-4 md:h-5" type="radio" id="newnessChoice2" name="newness" value="old" />
                        <label class="text-sm md:text-base" for="newnessChoice2">Старые</label>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-center md:block gap-2">
                <legend class="text-base md:text-lg my-1 md:my-2">По статусу:</legend>
                <div class="flex flex-wrap justify-center md:block gap-3">
                    <div class="flex items-center gap-2 my-1 md:my-2">
                        <input class="w-4 md:w-5 h-4 md:h-5" type="radio" id="statusChoice1" name="status" value="all" />
                        <label class="text-sm md:text-base" for="statusChoice1">Все</label>
                    </div>
                    <div class="flex items-center gap-2 my-1 md:my-2">
                        <input class="w-4 md:w-5 h-4 md:h-5" type="radio" id="statusChoice2" name="status" value="confirmed" />
                        <label class="text-sm md:text-base" for="statusChoice2">Подтверждено</label>
                    </div>
                    <div class="flex items-center gap-2 my-1 md:my-2">
                        <input class="w-4 md:w-5 h-4 md:h-5" type="radio" id="statusChoice3" name="status" value="not-confirmed" />
                        <label class="text-sm md:text-base" for="statusChoice3">Не подтверждено</label>
                    </div>
                    
                </div>
            </div>
            <div>
                <button class="w-[70%] flex justify-center items-center mt-4 mb-5 mx-auto h-10 bg-purple text-white rounded-lg shadow-md cursor-pointer">Сортировать</button>
            </div>
        </fieldset>
    </form>

  );
}
