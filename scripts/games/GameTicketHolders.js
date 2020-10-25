const contentTarget = document.querySelector(".games");
const eventHub = document.querySelector("#state-fair");

export const GameTicketHolders = () => {
  eventHub.addEventListener("ticketPurchased", (customEvent) => {
    if (customEvent.detail.ticketType === "game") {
      contentTarget.innerHTML += `
      <div class="person player"></div>
      `;
    }
  });
};
