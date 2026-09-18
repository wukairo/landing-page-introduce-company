import { ArrowUp } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer>
      <div className="container footer-main">
        <div>
          <Logo light />
          <p>
            Giải pháp số và công nghệ
            <br />
            cho doanh nghiệp.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span>Điều hướng</span>
            <a href="#services">Dịch vụ</a>
            <a href="#solutions">Giải pháp</a>
            <a href="#projects">Sản phẩm</a>
            <a href="#about">Về LAZTAR</a>
          </div>
          <div>
            <span>Liên hệ</span>
            <a href="mailto:contact@laztar.com">contact@laztar.com</a>
            <a href="tel:+842866867027">028 6686 7027</a>
          </div>
        </div>
        <a className="back-top" href="#top" aria-label="Về đầu trang">
          <ArrowUp />
        </a>
      </div>
      <div className="container footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} LAZTAR. Bản quyền đã được bảo hộ.
        </span>
        <span>Giải pháp số & dịch vụ công nghệ</span>
      </div>
    </footer>
  );
}
