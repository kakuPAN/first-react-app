import NavLinks from "./nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <NavLinks/>
      </div>
      <div>{children}</div>
    </div>
  );
}