import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

function HeroVisual() {
  return (
    <div className="hero-illustration">
      <Image
        src="/images/Innovation-amico.svg"
        alt="Minh họa đổi mới công nghệ"
        fill
        priority
        sizes="(max-width: 760px) 100vw, 44vw"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> Giải pháp số & công nghệ
          </div>
          <h1>
            Mở khóa{" "}
            <span className="bg-gradient-to-r from-[#C9FF38] via-[#B7F92D] to-[#8EDB1F] bg-clip-text text-transparent">
              tiềm năng tối đa
            </span>{" "}
            cho doanh nghiệp.
          </h1>
          <p>
            LAZTAR mang công nghệ đến gần hơn với doanh nghiệp, tạo nền tảng cho
            những bước đột phá bền vững và hành trình tăng trưởng dài hạn.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Bắt đầu cùng LAZTAR <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#services">
              Khám phá dịch vụ <ArrowDown size={17} />
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
