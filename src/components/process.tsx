const steps = [
  ["01", "Khám phá", "Lắng nghe và khám phá ý tưởng để cùng doanh nghiệp định hình dự án."],
  ["02", "Thiết kế", "Phân tích yêu cầu để thiết kế sản phẩm phù hợp với bài toán thực tế."],
  ["03", "Triển khai", "Hiện thực hóa và trình bày giải pháp tối ưu cho doanh nghiệp."],
  ["04", "Phát triển", "Nâng cấp và hỗ trợ dự án để tạo nên sự phát triển bền vững."],
];

export function Process() {
  return <section className="section process"><div className="container"><div className="process-head"><div><span className="section-number">04</span><span className="eyebrow">Phương pháp của LAZTAR</span></div><h2>Lộ trình rõ ràng từ<br /><span className="bg-gradient-to-r from-[#C9FF38] via-[#B7F92D] to-[#8EDB1F] bg-clip-text text-transparent">
  ý tưởng đến phát triển
</span></h2></div><div className="timeline">{steps.map(([n,t,c]) => <article key={n}><div className="timeline-dot" /><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>;
}
