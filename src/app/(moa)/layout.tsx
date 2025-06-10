"use client";

import Logo from "@/components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { text: "인지 재활 서비스", path: "/service" },
  { text: "고객 관리", path: "/customer" },
  { text: "재활 자료 관리", path: "/contents" },
  { text: "방문 일정 조회", path: "/schedule" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex h-dvh w-dvw flex-row overflow-hidden">
      {/* 사이드바 */}
      <div className="w-[240px] flex-shrink-0 bg-[#ffffff] p-[20px_0] shadow-[0px_3px_10px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center">
            <Logo />
            <h1 className="font-hakgyo text-[#707070]">Moa</h1>
          </div>

          <ul className="flex flex-col gap-1 p-[12px]">
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.path);

              return (
                <Link
                  href={item.path}
                  key={item.path}
                  className="text-decoration-none text-inherit"
                >
                  <li
                    className={`rounded-[16px] p-[12px_20px] transition-colors duration-200 ${
                      isActive ? "bg-neutral-100" : ""
                    }`}
                  >
                    <span
                      className={` ${isActive ? "font-bold" : "font-medium"}`}
                    >
                      {item.text}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {/* 콘텐트 영역 */}
      <div className="h-full flex-1 overflow-auto p-[40px]">{children}</div>
    </div>
  );
}
