const frames = document.querySelectorAll(".frame");
// TweenMax.from(frame, 10, {
//     opacity: 0,
//     backgroundColor: "red",
//     x: 20,
//     y: 100
// });

// const tl = new TimelineMax({
//     delay: 2
// });

// tl.set(frames, {
//         visibility: 'visible'
//     })

//     .from(frames, 1, {
//         opacity: 0
//     })
//     .addLabel('moveBoxes')

// tl.to(frames[0], 1, {
//         x: -50,
//         y: 50
//     })
//     .to(frames[2], 1, {
//             x: 50,
//             y: -50
//         },
//         "moveBoxes"
//     )

// TweenMax.fromTo(frame, 2, {
//     opacity: 0,
//     backgroundColor: "pink"
// }, {
//     opacity: 0.5,
//     backgroundColor: "blue"
// })

// TweenMax.to(frame, 2, {
//     x: 200,
//     delay: 2
// })

// TweenMax.staggerFrom(frame, 5, {
//     opacity: 0,
//     x: 200
// }, .5)

const tl = new TimelineMax({
  delay: 0.8
});

tl.set(frames, {
  visibility: "visible"
})

  .from(frames, 1, {
    opacity: 0
  })

  .to(frames, 0.4, {
    opacity: 1
  })
  .to(frames[1], 0.6, {
    x: 20,
    y: -20
  })
  .addLabel("moveToLeft")
  .to(
    frames[2],
    0.3,
    {
      x: -50,
      backgroundColor: "pink",
      zIndex: -3
    },
    "moveToLeft"
  )
  .to(
    frames[0],
    0.3,
    {
      x: 60,
      backgroundColor: "red",
      zIndex: 2
    },
    "moveToLeft"
  )
  .to(frames[1], 1, {
    x: 0,
    y: 0,
    backgroundColor: "#fff",
    zIndex: -1
  })
  .to(frames, 0.5, {
    width: 0
  })

  .addLabel("disabled")

  .to(
    frames[0],
    0.4,
    {
      height: 0,
      border: "0px"
    },
    "disabled"
  )
  .to(
    frames[1],
    0.4,
    {
      height: 0,
      width: 100,
      border: "0px"
    },
    "disabled"
  )
  .to(
    frames[2],
    0.4,
    {
      height: 0,
      border: "0px"
    },
    "disabled"
  );
