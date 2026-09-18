import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <>
      <section className="cta-section">
        <div className="container cta-inner">
          <span className="eyebrow eyebrow-light">Bạn có một ý tưởng?</span>
          <h2>
            Cùng LAZTAR tạo nên
            <br />
            <span>giải pháp ý nghĩa.</span>
          </h2>
          <a className="round-link" href="#contact">
            <span>
              Liên hệ
              <br />
              LAZTAR
            </span>
            <ArrowRight />
          </a>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Liên hệ</span>
            <h2>
              Bắt đầu bằng một
              <br />
              <em>cuộc trò chuyện.</em>
            </h2>
            <p>
              Bạn đang cần tư vấn, báo giá dịch vụ hoặc hỗ trợ? LAZTAR luôn sẵn
              sàng kết nối cùng bạn.
            </p>
          </div>
          <div className="contact-details">
            <a href="mailto:contact@laztar.com">
              <Mail />
              <span>
                <span className="contact-label">Email</span>contact@laztar.com
              </span>
              <ArrowRight />
            </a>
            <a href="tel:+842866867027">
              <Phone />
              <span>
                <span className="contact-label">Số điện thoại</span>028 6686 7027
              </span>
              <ArrowRight />
            </a>
            <div>
              <MapPin />
              <span>
                <span className="contact-label">Địa chỉ</span>86/11 Ngô Chí Quốc, Tam Bình, TP. Hồ Chí
                Minh
              </span>
            </div>
            <div>
              <Clock3 />
              <span>
                <span className="contact-label">Giờ làm việc</span>Thứ 2 – Thứ 6, 09:00 – 18:00
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
