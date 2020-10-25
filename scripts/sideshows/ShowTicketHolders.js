const contentTarget = document.querySelector(".sideshow");
const eventHub = document.querySelector("#state-fair");

export const ShowTicketHolders = () => {
  eventHub.addEventListener("showTicketPurchased", (customEvent) => {
    contentTarget.innerHTML += `
      <div class="person gawker"></div>
      `;
  });
};
