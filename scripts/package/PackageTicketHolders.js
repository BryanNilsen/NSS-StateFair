const foodTarget = document.querySelector(".food");
const rideTarget = document.querySelector(".rides");
const showTarget = document.querySelector(".sideshow");
const gameTarget = document.querySelector(".games");
const eventHub = document.querySelector("#state-fair");

export const PackageTicketHolders = () => {
  eventHub.addEventListener("packageTicketPurchased", (customEvent) => {
    foodTarget.innerHTML += `
      <div class="person bigSpender"></div>
      `;
    rideTarget.innerHTML += `
      <div class="person bigSpender"></div>
      `;
    showTarget.innerHTML += `
      <div class="person bigSpender"></div>
      `;
    gameTarget.innerHTML += `
      <div class="person bigSpender"></div>
      `;
  });
};
