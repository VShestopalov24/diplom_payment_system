import Header from "~/components/Header";
import Filter from "~/components/Filter";
import EmployeeCards from "~/components/Employee-cards";

export default function Employee() {

  const payments = [
    { status: "1", date: "15/04/2024", price: "5 000₽", contract: "№456345", project: "Дизайн сайта" },
    { status: "0", date: "14/04/2024", price: "10 000₽", contract: "№749205", project: "Верстка сайта" },
    { status: "1", date: "13/04/2024", price: "7 000₽", contract: "№853957", project: "Дизайн сайта" },
    { status: "0", date: "12/04/2024", price: "8 500₽", contract: "№948591", project: "Редизайн сайта" },
    { status: "1", date: "11/04/2024", price: "9 500₽", contract: "№938572", project: "Верстка сайта" },
    // Добавьте дополнительные выплаты по мере необходимости
  ];

  return (
    <main>
      <Header></Header>
      <div class="flex flex-col md:flex-row px-3 sm:px-8 md:px-12 relative">
        <Filter></Filter>
        <div class="w-full px-4">
          <h2 class="text-xl sm:text-2xl md:text-3xl text-center mb-7 font-medium">Ваши выплаты</h2>
          <div class="flex flex-wrap justify-around gap-8 pb-12">
            {payments.map((payment, index) => (
              <EmployeeCards key={index} payment={payment}></EmployeeCards>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
