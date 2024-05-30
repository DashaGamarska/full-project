//  This component is designed to handle the asynchronous resolution of a Promise
//  and render the JSX provided by the children function once the Promise is resolved.

export async function Await<T>({
  promise,
  children,
}: {
  promise: Promise<T>;
  children: (value: T) => JSX.Element;
}) {
  let data = await promise;
  return children(data);
}
