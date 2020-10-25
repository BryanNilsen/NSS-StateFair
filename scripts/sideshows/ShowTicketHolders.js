const contentTarget = document.querySelector(".sideshow");
const eventHub = document.querySelector("#state-fair");

export const ShowTicketHolders = () => {
  eventHub.addEventListener("ticketPurchased", (customEvent) => {
    if (customEvent.detail.ticketType === "show") {
      contentTarget.innerHTML += `
      <div class="person gawker"></div>
      `;
    }
  });
};
