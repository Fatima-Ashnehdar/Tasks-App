export function PromiseAllSettled() {
  const a = Promise.resolve("A موفق");
  const b = Promise.reject("B خطا");
  const c = Promise.resolve("C موفق");

  Promise.allSettled([a, b, c]).then((results) => {
    console.log(results);
  });
  return (
    <div className="flex items-center">
      <p className="text-lg text-gray-700 pr-4">Promise.allSettled :</p>
      <p className="text-lg text-gray-700 pr-4">console</p>
    </div>
  );
}
