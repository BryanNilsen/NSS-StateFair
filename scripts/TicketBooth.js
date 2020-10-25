const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener("click", (event) => {
  // NOT DRY
  //   if (event.target.id === "rideTicket") {
  //     const rideEvent = new CustomEvent("rideTicketPurchased");
  //     eventHub.dispatchEvent(rideEvent);
  //   }
  //   if (event.target.id === "foodTicket") {
  //     const foodEvent = new CustomEvent("foodTicketPurchased");
  //     eventHub.dispatchEvent(foodEvent);
  //   }
  //   if (event.target.id === "gameTicket") {
  //     const gameEvent = new CustomEvent("gameTicketPurchased");
  //     eventHub.dispatchEvent(gameEvent);
  //   }
  //   if (event.target.id === "showTicket") {
  //     const showEvent = new CustomEvent("showTicketPurchased");
  //     eventHub.dispatchEvent(showEvent);
  //   }
  //   if (event.target.id === "packageTicket") {
  //     const showEvent = new CustomEvent("packageTicketPurchased");
  //     eventHub.dispatchEvent(showEvent);
  //   }

  //   Get type of ticket from button Id and create custom event
  if (event.target.id.includes("--Ticket")) {
    const [type] = event.target.id.split("--Ticket");
    const customEventName = type + "TicketPurchased";
    const customEvent = new CustomEvent(customEventName);
    const ticketPurchasedEvent = new CustomEvent("ticketPurchased", {
      detail: {
        ticketType: type,
      },
    });
    eventHub.dispatchEvent(customEvent);
    eventHub.dispatchEvent(ticketPurchasedEvent);
  }
});

export const TicketBooth = () => {
  // ensure all button IDs end with '--Ticket'
  contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="ride--Ticket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="food--Ticket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="game--Ticket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="show--Ticket">Sideshow Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="package--Ticket">Full Package Ticket</button>
        </div>
    `;
};
