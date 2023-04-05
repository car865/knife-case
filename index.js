let lowTier = [
  "Candy cane",
  "Kohaku",
  "Ktac",
  "luna",
  "Luxe",
  "Piedra del sol",
  "Prism III",
  "Ruin",
  "Smite",
  "Soulstrife",
  "Spline",
  "Striker pink",
  ".SYS",
  "Task force 141",
];

let lowTierImg = [
  "low/candycane.png",
  "low/kohaku.png",
  "low/ktac.png",
  "low/luna.png",
  "low/Luxe.png",
  "low/piedra-del-sol.png",
  "low/prism-3.png",
  "low/ruin.png",
  "low/smite.png",
  "low/soulstrife.png",
  "low/spline.png",
  "low/striker-pink.png",
  "low/sys.png",
  "low/task-force.png",
];

let midTier = [
  "Elderflame",
  "Forsaken",
  "Neptune",
  "Prelude to chaos",
  "Prime 2.0",
  "Reaver",
  "Sovereign",
  "Xeno hunter",
];

let midTierImg = [
  "mid/elderflame.png",
  "mid/forsaken.png",
  "mid/neptune.png",
  "mid/preludechaos.png",
  "mid/prime2.png",
  "mid/reaver.png",
  "mid/sovereign.png",
  "mid/xenohunter.png",
];

let highTier = ["Celestial", "Karambit reaver", "RGX blade"];

let highTierImg = [
  "high/celestial.png",
  "high/karambit-reaver.png",
  "high/rgx-blade.png",
];

let itemTitleDisplay = document.getElementById("item-title-display");
let itemImageDisplay = document.getElementById("item-image-display");
let tierImg = document.getElementById("tierImg");
let caseCounterDisplay = document.getElementById("case-counter-display")

let caseCount = 0

function renderGame() {
  let randomNum = Math.random() * 1000;
  let percentageDisplay = " " + "(" + Math.round(randomNum) + "%" + ")";
  console.log(percentageDisplay);

  if (randomNum < 0.5) {
    tierImg.src = "tiers/exclusive-icon.png";
    itemImageDisplay.src = "special/oni.png";
    itemTitleDisplay.textContent = "Oni Nastja";
    itemTitleDisplay.style.color = "#f6945b";

    caseCount++
    caseCounterDisplay.textContent = "Case opened: " + caseCount

  } else if (randomNum < 5) {
    var highTierVariant = Math.floor(Math.random() * highTier.length);

    tierImg.src = "tiers/premium-icon.png";
    itemImageDisplay.src = highTierImg[highTierVariant];
    itemTitleDisplay.textContent =
    highTier[highTierVariant] + percentageDisplay;
    itemTitleDisplay.style.color = "#ca568d";

    caseCount++
    caseCounterDisplay.textContent = "Case opened: " + caseCount

  } else if (randomNum < 16) {
    var midTierVariant = Math.floor(Math.random() * midTier.length);

    tierImg.src = "tiers/deluxe-icon.png";
    itemImageDisplay.src = midTierImg[midTierVariant];
    itemTitleDisplay.textContent = midTier[midTierVariant] + percentageDisplay;
    itemTitleDisplay.style.color = "#16bfa8";

    caseCount++
    caseCounterDisplay.textContent = "Case opened: " + caseCount


  } else {
    var lowTierVariant = Math.floor(Math.random() * lowTier.length);

    tierImg.src = "tiers/select-icon.png";
    itemImageDisplay.src = lowTierImg[lowTierVariant];
    itemTitleDisplay.textContent = lowTier[lowTierVariant] + percentageDisplay;
    itemTitleDisplay.style.color = "#5aa3e7";

    caseCount++
    caseCounterDisplay.textContent = "Case opened: " + caseCount

  }
}

