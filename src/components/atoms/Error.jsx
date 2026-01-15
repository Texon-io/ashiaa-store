function Error({ message }) {
  return (
    <p className="col-span-4 text-center text-main-text text-lg my-5">
      عذرا يبدو أن هناك خطأ
      <br />
      <br />
      <span>{message}</span>
    </p>
  );
}

export default Error;
