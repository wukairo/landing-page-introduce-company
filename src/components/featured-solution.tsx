import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";

export function FeaturedSolution() {
  return (
    <section className="section solution" id="solutions">
      <div className="container solution-shell">
        <div className="solution-copy">
          <span className="pill">Giải pháp nổi bật</span>
          <h2>AI Agent hiểu sản phẩm và <span>doanh nghiệp của bạn.</span></h2>
          <p>LAZTAR AI Agent hỗ trợ tư vấn bán hàng, dịch vụ doanh nghiệp, tìm kiếm thông tin và chăm sóc khách hàng xuyên suốt.</p>
          <ul>
            <li><Check size={16} />Hỗ trợ khách hàng tức thì 24/7</li>
            <li><Check size={16} />Phản hồi chính xác và nhất quán</li>
            <li><Check size={16} />Tự động hóa những câu hỏi lặp lại</li>
          </ul>
          <a className="button button-light" href="#contact">Tư vấn về AI Agent <ArrowUpRight size={18} /></a>
        </div>
        <div className="solution-illustration">
          <Image
            src="/images/Chat bot-pana.svg"
            alt="Minh họa LAZTAR AI Agent hỗ trợ trò chuyện với khách hàng"
            fill
            sizes="(max-width: 760px) 100vw, 52vw"
          />
        </div>
      </div>
    </section>
  );
}
