export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:rocioabad.m@gmail.com" className="footer-email">
        rocioabad.m@gmail.com
      </a>
      <span className="footer-copy">© {new Date().getFullYear()}</span>
    </footer>
  )
}
