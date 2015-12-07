(function () {

var keyMap = {
  65: "C",
  87: "Csharp",
  83: "D",
  69: "Dsharp",
  68: "E",
  70: "F",
  84: "Fsharp",
  71: "G",
  89: "Gsharp",
  72: "A",
  85: "Asharp",
  74: "B",
  75: "C2",
  79: "C2sharp",
  76: "D2",
  80: "D2sharp",
  186: "E2"
  //
  // 65: "A4",
  // 83: "B4",
  // 68: "C5",
  // 70: "D5",
  // 71: "E5",
  // 72: "F5",
  // 74: "G5",
  // 75: "A5",
  // 76: "B5"
};

var octaveMap = {
  38: 2,
  40: 0.5
};

  $(document).on("keydown", function (e) {
    if (e.which === 38 || e.which === 40) {
      KeyActions.batchPress([]);
      var octaveX = octaveMap[e.which];
      KeyActions.octaveChange(octaveX);
    }
  });

  $(document).on("keydown", function (e) {
    var noteName = keyMap[e.which];
    KeyActions.keyPressed(noteName);
  });


  $(document).on("keyup", function (e) {
    var noteName = keyMap[e.which];
    KeyActions.keyUnPressed(noteName);
  });

})();
