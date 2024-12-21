var text = document.getElementById('text')

var Typewriter = new Typewriter(text, {
  loop: true,
  delay: 75,
});

Typewriter
  .pauseFor(1000)
  .typeString('<span style="font-size: 30px; font-family: "Monsterrat", sans-serif">Женя, ты очень <strong>красивая</strong></span>')
  .pauseFor(1000)
  .deleteChars(8)
  .typeString('<strong style="font-size: 30px">милая</strong>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<strong style="font-size: 30px">добрая</strong>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<strong style="font-size: 30px">харизматичная</strong>')
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<strong style="font-size: 30px">заботливая</strong>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<strong style="font-size: 30px">умная</strong>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<strong style="font-size: 30px">талантливая</strong>')
  .pauseFor(1000)
  .deleteChars(11)
  .typeString('<strong style="font-size: 30px">доброжелательная</strong>')
  .pauseFor(500)
  .deleteAll()
  .typeString('<span style="font-size: 30px">И вообще, <strong style="color: red; font-size: 30px">я тебя люблю❤</strong></span>')
  .pauseFor(1000)
  .start()