const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "rideTicket") {
    const rideEvent = new CustomEvent("rideTicketPurchased");
    eventHub.dispatchEvent(rideEvent);
  }
  if (event.target.id === "foodTicket") {
    const foodEvent = new CustomEvent("foodTicketPurchased");
    eventHub.dispatchEvent(foodEvent);
  }
  if (event.target.id === "gameTicket") {
    const gameEvent = new CustomEvent("gameTicketPurchased");
    eventHub.dispatchEvent(gameEvent);
  }
  if (event.target.id === "showTicket") {
    const showEvent = new CustomEvent("showTicketPurchased");
    eventHub.dispatchEvent(showEvent);
  }
});

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gameTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="showTicket">Sideshow Ticket</button>
        </div>
    `;
};
