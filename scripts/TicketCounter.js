const contentTarget = document.querySelector(".customers");
const eventHub = document.querySelector("#state-fair");

let ticketCount = 0;

let allTickets = {};

eventHub.addEventListener("ticketPurchased", (event) => {
  const ticketType = event.detail.ticketType;
  if (allTickets.hasOwnProperty(ticketType)) {
    allTickets[ticketType]++;
  } else {
    allTickets[ticketType] = 1;
  }
  console.log(allTickets);
  const sumValues = Object.values(allTickets).reduce((a, b) => a + b);
  console.log("sumValues: ", sumValues);

  ticketCount = sumValues;
  TicketCount();
});

export const TicketCount = () => {
  contentTarget.innerHTML = `Total tickets purchased: ${ticketCount}`;
};
