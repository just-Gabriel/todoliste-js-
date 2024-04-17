export function Link({ children, color }) {
  return (
    <>
      <a className={color === "error" ? "link-error" : "link"}>{children}</a>
    </>
  );
}
