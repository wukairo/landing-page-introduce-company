import { Blocks, Bot, CloudCog, CodeXml, LifeBuoy, Network } from "lucide-react";

const services = [
  [CodeXml, "Phát triển phần mềm", "Xây dựng sản phẩm phần mềm phù hợp với nhu cầu vận hành và định hướng phát triển của doanh nghiệp."],
  [Blocks, "Thiết kế website", "Thiết kế và phát triển website hiện đại, rõ ràng, nhất quán với thương hiệu."],
  [Bot, "AI & tự động hóa", "Ứng dụng AI vào tư vấn, hỗ trợ khách hàng và những tác vụ lặp lại trong doanh nghiệp."],
  [Network, "Giải pháp số", "Kết nối công nghệ, dữ liệu và quy trình để doanh nghiệp vận hành hiệu quả hơn."],
  [CloudCog, "Tư vấn công nghệ", "Phân tích nhu cầu và đề xuất hướng triển khai phù hợp cho từng bài toán cụ thể."],
  [LifeBuoy, "Hỗ trợ & nâng cấp", "Đồng hành cải tiến, nâng cấp và hỗ trợ sản phẩm trong suốt quá trình phát triển."],
];

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading split-heading">
          <div><span className="section-number">01</span><span className="eyebrow">Dịch vụ của LAZTAR</span></div>
          <h2>Từ ý tưởng đến<br /><span className="bg-gradient-to-r from-[#C9FF38] via-[#B7F92D] to-[#8EDB1F] bg-clip-text text-transparent">
  giải pháp thực tế.
</span></h2>
          <p>Các dịch vụ công nghệ và giải pháp số được xây dựng quanh nhu cầu thực tế của mỗi doanh nghiệp.</p>
        </div>
        <div className="service-grid">
          {services.map(([Icon, title, copy], i) => (
            <article className="service-card" key={String(title)}>
              <div className="service-top"><span>0{i + 1}</span><Icon size={25} strokeWidth={1.5} /></div>
              <h3>{String(title)}</h3><p>{String(copy)}</p><div className="card-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
