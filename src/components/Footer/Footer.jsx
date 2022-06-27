import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          &copy; {year} Copyright: Joanna Walkiewicz, nr studenta: s20161
        </div>
      </div>
    </footer>
  );
}
