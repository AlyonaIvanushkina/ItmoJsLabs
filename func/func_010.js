console.log(
    (
      f => x => x <= 1 ? 1 : x * f(f)(x - 1)
    )(
      f => x => x <= 1 ? 1 : x * f(f)(x - 1)
    )(5)
)