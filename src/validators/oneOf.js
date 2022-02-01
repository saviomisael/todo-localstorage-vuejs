export const oneOf =
  ([...params]) =>
  (value) =>
    params.includes(value)
