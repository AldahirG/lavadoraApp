const waterButton = document.querySelector(
    ".col-sm-2:nth-child(2) .btn.btn-info"
  );
  const washLevelButton = document.querySelector(
    ".col-sm-2:nth-child(3) .btn.btn-info"
  );
  const washTimeButton = document.querySelector(
    ".col-sm-2:nth-child(4) .btn.btn-info"
  );
  const rinseButton = document.querySelector(
    ".col-sm-2:nth-child(5) .btn.btn-info"
  );
  const powerButton = document.querySelector(
    ".col-sm-2:nth-child(1) .btn.btn-danger"
  );
  const startButton = document.querySelector(
    ".col-sm-2:nth-child(6) .btn.btn-success"
  );
 
  const badges = {
    water: document.querySelectorAll(".col-sm-2:nth-child(2) .badge"),
    washLevel: document.querySelectorAll(".col-sm-2:nth-child(3) .badge"),
    washTime: document.querySelectorAll(".col-sm-2:nth-child(4) .badge"),
    rinse: document.querySelectorAll(".col-sm-2:nth-child(5) .badge"),
  };
  
  let currentIndex = {
    water: badges.water.length - 1,
    washLevel: badges.washLevel.length - 1,
    washTime: badges.washTime.length - 1,
    rinse: badges.rinse.length - 1,
  };

  let isPowerOn = false;
  let buttonsDisabled = false;
  
  const powerBadge = document.querySelector(".badge.bg-secondary");
  const startBadge = document.querySelector(".badge.bg-secondary:last-of-type");
  
  powerButton.addEventListener("click", () => {
    isPowerOn = !isPowerOn;
  
    if (isPowerOn) {
      
      waterButton.disabled = false;
      washLevelButton.disabled = false;
      washTimeButton.disabled = false;
      rinseButton.disabled = false;
      startButton.disabled = false;
  
      powerBadge.classList.remove("bg-secondary");
      powerBadge.classList.add("bg-success");
    } else {
      
      waterButton.disabled = true;
      washLevelButton.disabled = true;
      washTimeButton.disabled = true;
      rinseButton.disabled = true;
      startButton.disabled = true;

      Object.values(badges).forEach((badgeGroup) => {
        badgeGroup.forEach((badge) => {
          badge.classList.remove("bg-success");
          badge.classList.add("bg-secondary");
        });
      });
      powerBadge.classList.remove("bg-success");
      powerBadge.classList.add("bg-secondary");
      startButton.classList.remove("btn-warning");
      startButton.classList.add("btn-success");
    }
  });
  
  startButton.addEventListener("click", () => {
    startButton.classList.toggle("btn-warning");
    buttonsDisabled = !buttonsDisabled;
  
    waterButton.disabled = buttonsDisabled;
    washLevelButton.disabled = buttonsDisabled;
    washTimeButton.disabled = buttonsDisabled;
    rinseButton.disabled = buttonsDisabled;
  });
  
  waterButton.addEventListener("click", function () {
    changeBadgeColor("water");
  });
  
  washLevelButton.addEventListener("click", function () {
    changeBadgeColor("washLevel");
  });
  
  washTimeButton.addEventListener("click", function () {
    changeBadgeColor("washTime");
  });
  
  rinseButton.addEventListener("click", function () {
    changeBadgeColor("rinse");
  });
  
  function changeBadgeColor(column) {
    badges[column].forEach(function (badge) {
      badge.classList.remove("bg-success");
      badge.classList.add("bg-secondary");
    });
  
    badges[column][currentIndex[column]].classList.remove("bg-secondary");
    badges[column][currentIndex[column]].classList.add("bg-success");
  
    currentIndex[column] =
      (currentIndex[column] - 1 + badges[column].length) % badges[column].length;
  }