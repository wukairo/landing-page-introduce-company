import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "LAZTAR AI Agent",
    type: "Tư vấn & hỗ trợ 24/7",
    copy: "AI Agent hỗ trợ tư vấn bán hàng, giải thích dịch vụ, tìm kiếm tài liệu và chăm sóc khách hàng một cách nhất quán.",
    image: "/images/Chat bot-amico.svg",
    imageAlt: "Minh họa giải pháp AI Agent",
  },
  {
    num: "02",
    title: "LazSphere Check-in QR",
    type: "Check-in & báo cáo",
    copy: "Nền tảng check-in QR dành cho sự kiện, hỗ trợ quét nhanh và theo dõi báo cáo theo thời gian thực.",
    image: "/images/Events-pana.svg",
    imageAlt: "Minh họa nền tảng quản lý sự kiện",
  },
];

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-heading project-heading">
          <div>
            <span className="section-number">03</span>
            <span className="eyebrow">Giải pháp của LAZTAR</span>
          </div>
          <h2>
            Công nghệ đi vào
            <br />
            <span className="bg-gradient-to-r from-[#C9FF38] via-[#B7F92D] to-[#8EDB1F] bg-clip-text text-transparent">
  bài toán thực tế.
</span>
          </h2>
          <p>
            Những giải pháp đang được LAZTAR giới thiệu nhằm hỗ trợ doanh nghiệp
            trong tư vấn khách hàng và vận hành sự kiện.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.num}>
              <div className="project-visual project-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                </div>
                <a href="#contact" aria-label={`Tìm hiểu ${project.title}`}>
                  <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
