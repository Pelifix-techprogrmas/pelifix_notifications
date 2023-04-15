const $TYPES = {
  ["success"]: {
    ["icon"]: "fa fa-check",
  },
  ["error"]: {
    ["icon"]: "bi bi-exclamation-circle",
  },
  ["info"]: {
    ["icon"]: "fa fa-bell",
  },
};

const COLOR_CODES = {
  "~g~": "green",
  "~r~": "red",
  "~y~": "yellow",
  "~b~": "blue",
  "~lb~": "lightblue",
  "~lg~": "lightgreen",
  "~w~": "white",
};

const REPLACE_COLORCODES = (string, obj) => {
  let stringToReplace = string;

  for (let id in obj) {
    stringToReplace = stringToReplace.replace(new RegExp(id, "g"), obj[id]);
  }

  return stringToReplace;
};

$NOTIFICATION = function (DATA) {
  let id = $(`.notification`).length + 1;

  for (color in COLOR_CODES) {
    if (DATA["Message"].includes(color)) {
      let objArray = {};
      objArray[color] = `<span style="color: ${COLOR_CODES[color]};">`;
      objArray["~s~"] = `</span>`;

      let newString = REPLACE_COLORCODES(DATA["Message"], objArray);

      DATA["Message"] = newString;
    }
  }

  let iconColor;

  switch (DATA.TYPE) {
    case 'success':
      iconColor = 'green';
      DATA.TYPE = $TYPES[DATA.TYPE]['icon'];
      break;
    case 'error':
      iconColor = 'red';
      DATA.TYPE = $TYPES[DATA.TYPE]['icon'];
      break;
    case 'info':
      iconColor = '#0066b2';
      DATA.TYPE = $TYPES[DATA.TYPE]['icon'];
      break;
    default:
      iconColor = '';
      DATA.TYPE = DATA.Icon;
      break;
  }

  let $notification = $(
    `<div class="notification unfold" id="${id}">
        <div class="type" style="color: ${iconColor};">
            <i class="${DATA.TYPE}"></i>
        </div>

        <div class="message"><small style="font-size: 12px;">${DATA.Title}</small>${
          DATA["Message"]
        }</div>
    </div>`
  ).appendTo(`.main`);

  setTimeout(() => {
    $notification.addClass("fold").fadeOut(700);
  }, 10000);

  return $notification;
};


$(function () {
  window.addEventListener("message", function (event) {
    if (event.data.createNew === true) {
      $NOTIFICATION({
        TYPE: event.data.data.type,
        Message: event.data.data.message,
        Title: event.data.data.title,
        Icon: event.data.data.icon
      });
    }
  });
});
