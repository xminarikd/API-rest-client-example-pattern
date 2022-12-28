export function paramsSerializer(params) {
  const parsedParams = serializeBooleanAsInt(
    serializedKeys(lowerCaseKeys(params))
  );

  return qs.stringify(parsedParams, {
    encodeValuesOnly: true,
    encodeURIComponent: qs.unescape,
    arrayFormat: "brackets",
  });
}

export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);
