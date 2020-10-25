import { FoodTicketHolders } from "./food/FoodTicketHolders.js";
import { GameTicketHolders } from "./games/GameTicketHolders.js";
import { PackageTicketHolders } from "./package/PackageTicketHolders.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { ShowTicketHolders } from "./sideshows/ShowTicketHolders.js";
import { TicketBooth } from "./TicketBooth.js";
import { TicketCount } from "./TicketCounter.js";

TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
ShowTicketHolders();
PackageTicketHolders();
TicketCount();
