const reasons = [
  ["01", "Quy trình rõ ràng", "Mỗi dự án tuân theo kế hoạch và timeline cụ thể, giúp doanh nghiệp kiểm soát toàn diện."],
  ["02", "Hệ thống bền vững", "Hệ thống ổn định, linh hoạt và được xây dựng để sẵn sàng cho quá trình phát triển dài hạn."],
  ["03", "Đội ngũ tận tâm", "Chuyên môn sâu, tập trung giải quyết tận gốc vấn đề để tạo ra kết quả đáng tin cậy."],
];

export function WhyLaztar() {
  return (
    <section className="section why" id="capabilities">
      <div className="container why-grid">
        <div className="why-intro"><span className="section-number">02</span><span className="eyebrow">Năng lực cốt lõi</span><h2>Nền tảng vững vàng.<br /><span className="bg-gradient-to-r from-[#C9FF38] via-[#B7F92D] to-[#8EDB1F] bg-clip-text text-transparent">
  đồng hành tận tâm
</span></h2></div>
        <div className="reasons">
          {reasons.map(([num, title, copy]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
