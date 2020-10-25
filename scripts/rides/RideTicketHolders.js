const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const RideTicketHolders = () => {
  eventHub.addEventListener("ticketPurchased", (customEvent) => {
    if (customEvent.detail.ticketType === "ride") {
      contentTarget.innerHTML += `
      <div class="person rider"></div>
      `;
    }
  });
};
