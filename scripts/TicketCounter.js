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
  const sumValues = Object.values(allTickets).reduce((a, b) => a + b);
  ticketCount = sumValues;
  TicketCount();
});

export const TicketCount = () => {
  contentTarget.innerHTML = `<p>Total tickets purchased: ${ticketCount}</p>`;
  for (const [key, value] of Object.entries(allTickets)) {
    contentTarget.innerHTML += ` ${key}: ${value} </br>`;
  }
};
