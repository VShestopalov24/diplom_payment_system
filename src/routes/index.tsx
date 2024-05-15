import { createSignal } from "solid-js";

export default function Home() {

  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");

  function handleSubmit(e) {
    e.preventDefault();

    // Проверка на пустые поля
    if (!username() || !password()) {
      setError("Пожалуйста, заполните все поля");
      return;
    }
    
    if(username() === "user" && password() === "user"){
      window.location.href = '/employee';
    }
    else{
      if (username() === "admin" && password() === "admin") {
        window.location.href = '/manager';
      } else {
        setError("Неправильное имя пользователя или пароль");
      }
    }
  }

  return (
    <div class="flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat" style="background-image: url('/background.svg')">
      <form onSubmit={handleSubmit} class="flex flex-col items-center p-10 w-5/6 sm:w-96 bg-light-purple rounded-xl shadow-md gap-5">
        {error() && <div style="color: red;">{error()}</div>}

        <img src="/logo.svg" alt="Логотип" class="w-[75px] sm:w-[100px]" />

        <h2 class="text-2xl sm:text-3xl font-medium">Авторизация</h2>
        
        <input type="text" name="username" value={username()} onInput={(e) => setUsername(e.target.value)} class="w-full h-10 sm:h-12 px-4 border-2 border-purple rounded-lg shadow-md" autocomplete="username" required/>
        
        <input type="password" name="password" value={password()} onInput={(e) => setPassword(e.target.value)} class="w-full h-10 sm:h-12 px-4 border-2 border-purple rounded-lg shadow-md" autocomplete="current-password" required/>
        
        <div class="flex">
          <input class="w-[15px]" type="checkbox" name="remember" id="remember" placeholder="Запомнить меня" />
          <label class="ml-[5px]" for="remember">Запомнить меня</label>
        </div>
        
        <button type="submit" class="w-full h-10 sm:h-12 bg-purple text-white rounded-lg shadow-md cursor-pointer">Войти</button>
          
      </form>

    </div>

  );
}
