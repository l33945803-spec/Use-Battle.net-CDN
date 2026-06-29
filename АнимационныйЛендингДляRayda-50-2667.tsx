import clsx from "clsx";
import svgPaths from "./svg-ft21t0519i";
import imgImage21 from "figma:asset/138422d062e9c0ce72ded25f9b42301f91754b0f.png";
import imgImage37 from "figma:asset/9941d2978ee9494da5771d8deba7c694001fb561.png";
import imgImage39 from "figma:asset/ff4c1a61b01a708492ac459362a5b82b1f88f788.png";
import imgImage38 from "figma:asset/f460a55d6c30212a13b3fca28ed6767df6371f31.png";
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(142.911deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }} className={clsx("absolute h-[252px] left-0 overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-[333.333px]", additionalClassNames)}>
      {children}
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("bg-[#f3f4f6] h-[40px] min-h-px min-w-px relative rounded-[10px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function LinkBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[44739200px] shrink-0 size-[40px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Icon30VectorBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-1/4">
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          {children}
        </svg>
      </div>
    </div>
  );
}
type ImageBackgroundImageProps = {
  additionalClassNames?: string;
};

function ImageBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ImageBackgroundImageProps>) {
  return (
    <div className={clsx("absolute h-[252px] rounded-[15px] top-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px]">
        <div className="absolute inset-0 overflow-hidden rounded-[15px]">{children}</div>
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[15px]" />
      </div>
    </div>
  );
}
type IconBackgroundImage5Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage5Props>) {
  return (
    <BackgroundImage1 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage1>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type LinkBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function LinkBackgroundImageAndText1({ text, additionalClassNames = "" }: LinkBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[44px] left-[16px] w-[333.333px]", additionalClassNames)}>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] top-[7.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
};

function LinkBackgroundImageAndText({ text }: LinkBackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#d1d5dc] text-[14px] top-[0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <p className="absolute bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] font-bold from-[#155dfc] leading-[28px] left-0 text-[20px] text-[transparent] to-[#1447e6] top-[-0.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="bg-gradient-to-r from-[#f6339a] h-[28px] relative rounded-[44739200px] shrink-0 to-[#e60076] w-[77.71px]">
      <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%-0.08px)] text-[14px] text-center text-white top-[calc(50%-11px)] whitespace-nowrap">{text}</p>
    </div>
  );
}
type IconBackgroundImage4Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage4({ additionalClassNames = "" }: IconBackgroundImage4Props) {
  return (
    <BackgroundImage2 additionalClassNames={clsx("absolute size-[16px]", additionalClassNames)}>
      <g clipPath="url(#clip0_47_1498)" id="Icon">
        <path d={svgPaths.p1a3eb000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M9.66667 8.33333L11 7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M7.66667 6.33333L9 5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M5.66667 4.33333L7 3" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M11.6667 10.3333L13 9" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
      <defs>
        <clipPath id="clip0_47_1498">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage2>
  );
}
type IconBackgroundImage3Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage3({ additionalClassNames = "" }: IconBackgroundImage3Props) {
  return (
    <BackgroundImage2 additionalClassNames={clsx("absolute size-[16px] top-[6px]", additionalClassNames)}>
      <g id="Icon">
        <path d="M6.66667 1.33333H9.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M8 9.33333L10 7.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p1a6375c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
    </BackgroundImage2>
  );
}
type RentalBackgroundImageAndText2Props = {
  text: string;
};

function RentalBackgroundImageAndText2({ text }: RentalBackgroundImageAndText2Props) {
  return (
    <div className="absolute h-[28px] left-[24px] top-[104px] w-[285.333px]">
      <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[143.54px] text-[18px] text-center text-white top-[-0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function IconBackgroundImage2() {
  return (
    <BackgroundImage>
      <path d={svgPaths.p15814b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p453c640} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p1a04fd00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </BackgroundImage>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1e2939] text-[16px] top-[-0.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27c543b0} id="Vector" stroke="url(#paint0_linear_50_2707)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="url(#paint1_linear_50_2707)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_50_2707" x1="4" x2="20" y1="11.9999" y2="11.9999">
            <stop stopColor="#155DFC" />
            <stop offset="1" stopColor="#1447E6" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_50_2707" x1="9" x2="15" y1="10" y2="10">
            <stop stopColor="#155DFC" />
            <stop offset="1" stopColor="#1447E6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
type RentalBackgroundImageAndText1Props = {
  text: string;
};

function RentalBackgroundImageAndText1({ text }: RentalBackgroundImageAndText1Props) {
  return (
    <div className="h-[50.667px] relative rounded-[14px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.333px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage>
      <path d={svgPaths.p30f65280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M2.66667 13.3333H29.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </BackgroundImage>
  );
}
type RentalBackgroundImageAndTextProps = {
  text: string;
};

function RentalBackgroundImageAndText({ text }: RentalBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[20px] left-[24px] top-[140px] w-[285.333px]">
      <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[142.9px] text-[#4a5565] text-[14px] text-center top-[0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Rayda() {
  return (
    <div className="bg-white relative size-full" data-name="Анимационный лендинг для RAYDA">
      <div className="absolute content-stretch flex flex-col h-[4794.833px] items-start left-0 pt-[64px] top-0 w-[365.333px]" data-name="Layout">
        <div className="h-[4156px] relative shrink-0 w-[365.333px]" data-name="Rental" style={{ backgroundImage: "linear-gradient(95.0237deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#155dfc] h-[208px] items-start left-0 pt-[48px] to-[#00a63e] top-0 w-[365.333px]" data-name="Section">
              <div className="h-[112px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
                  <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 1">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[40px] left-[166.9px] text-[36px] text-center text-white top-[-0.67px] whitespace-nowrap">Прокат</p>
                  </div>
                  <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-[166.88px] text-[18px] text-center text-white top-[-0.33px] w-[306px]">Прокат велосипедов по лучшим ценам</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[32px] h-[876px] items-start left-0 px-[16px] top-[256px] w-[365.333px]" data-name="Section">
              <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
                <p className="-translate-x-1/2 absolute bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] font-bold from-[#155dfc] leading-[36px] left-[166.79px] text-[30px] text-[transparent] text-center to-[#1447e6] top-[-1.33px] whitespace-nowrap">Условия проката</p>
              </div>
              <div className="h-[808px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute bg-white h-[184px] left-0 rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[333.333px]" data-name="Container">
                  <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] items-center justify-center left-[134.67px] px-[16px] rounded-[16px] size-[64px] to-[#1447e6] top-[24px]" data-name="Rental">
                    <BackgroundImage>
                      <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      <path d="M16 8V16L21.3333 18.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    </BackgroundImage>
                  </div>
                  <div className="absolute h-[28px] left-[24px] top-[104px] w-[285.333px]" data-name="Rental">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[142.98px] text-[#1e2939] text-[18px] text-center top-[-0.33px] whitespace-nowrap">Время работы</p>
                  </div>
                  <RentalBackgroundImageAndText text="09:00 - 21:00 ежедневно" />
                </div>
                <div className="absolute bg-white h-[184px] left-0 rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[208px] w-[333.333px]" data-name="Container">
                  <div className="absolute content-stretch flex items-center justify-center left-[134.67px] px-[16px] rounded-[16px] size-[64px] top-[24px]" data-name="Rental" style={{ backgroundImage: "linear-gradient(100.84deg, rgb(0, 255, 144) 21.753%, rgb(184, 219, 85) 96.976%)" }}>
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute h-[28px] left-[24px] top-[104px] w-[285.333px]" data-name="Rental">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[143.13px] text-[#1e2939] text-[18px] text-center top-[-0.33px] whitespace-nowrap">Цена за час</p>
                  </div>
                  <div className="absolute h-[20px] left-[24px] top-[140px] w-[285.333px]" data-name="Rental">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[142.83px] text-[#4a5565] text-[14px] text-center top-[0.33px] whitespace-nowrap">₸ 1,500 / час</p>
                  </div>
                </div>
                <div className="absolute bg-white h-[184px] left-0 rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[416px] w-[333.333px]" data-name="Container">
                  <div className="absolute bg-gradient-to-r content-stretch flex from-[#f6339a] items-center justify-center left-[134.67px] px-[16px] rounded-[16px] size-[64px] to-[#e60076] top-[24px]" data-name="Rental">
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute h-[28px] left-[24px] top-[104px] w-[285.333px]" data-name="Rental">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[142.81px] text-[#1e2939] text-[18px] text-center top-[-0.33px] whitespace-nowrap">Цена за день</p>
                  </div>
                  <RentalBackgroundImageAndText text="₸ 8,000 / день" />
                </div>
                <div className="absolute bg-white h-[184px] left-0 rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[624px] w-[333.333px]" data-name="Container">
                  <div className="absolute content-stretch flex items-center justify-center left-[134.67px] px-[16px] rounded-[16px] size-[64px] top-[24px]" data-name="Rental" style={{ backgroundImage: "linear-gradient(92.6192deg, rgb(0, 85, 255) 2.1872%, rgb(155, 90, 255) 53.969%, rgb(212, 79, 223) 104.76%)" }}>
                    <BackgroundImage>
                      <path d={svgPaths.p3ae94df2} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      <path d={svgPaths.p363c980} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    </BackgroundImage>
                  </div>
                  <div className="absolute h-[28px] left-[24px] top-[104px] w-[285.333px]" data-name="Rental">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[142.94px] text-[#1e2939] text-[18px] text-center top-[-0.33px] whitespace-nowrap">Точки проката</p>
                  </div>
                  <div className="absolute h-[20px] left-[24px] top-[140px] w-[285.333px]" data-name="Rental">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[142.65px] text-[#4a5565] text-[14px] text-center top-[0.33px] whitespace-nowrap">5 точек по городу Алматы</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col gap-[32px] h-[592px] items-start left-0 pt-[48px] px-[16px] top-[1180px] w-[365.333px]" data-name="Section">
              <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
                <p className="-translate-x-1/2 absolute bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] font-bold from-[#1e2939] leading-[36px] left-[167.23px] text-[30px] text-[transparent] text-center to-[#101828] top-[-1.33px] whitespace-nowrap">Забронировать</p>
              </div>
              <div className="h-[428px] relative rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Form" style={{ backgroundImage: "linear-gradient(127.912deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}>
                <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[24px] h-[380px] items-start relative shrink-0 w-full" data-name="Rental">
                    <div className="content-stretch flex flex-col gap-[8px] h-[82.667px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="h-[24px] relative shrink-0 w-full" data-name="Rental">
                        <IconBackgroundImage5 additionalClassNames="absolute left-0 top-[2px]">
                          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </IconBackgroundImage5>
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] left-[28px] text-[#364153] text-[16px] top-[-0.67px] whitespace-nowrap">Имя</p>
                      </div>
                      <RentalBackgroundImageAndText1 text="Введите ваше имя" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] h-[82.667px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="h-[24px] relative shrink-0 w-full" data-name="Rental">
                        <BackgroundImage1 additionalClassNames="absolute left-0 top-[2px]">
                          <g clipPath="url(#clip0_47_1487)" id="Icon">
                            <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                          <defs>
                            <clipPath id="clip0_47_1487">
                              <rect fill="white" height="20" width="20" />
                            </clipPath>
                          </defs>
                        </BackgroundImage1>
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] left-[28px] text-[#364153] text-[16px] top-[-0.67px] whitespace-nowrap">Номер телефона</p>
                      </div>
                      <RentalBackgroundImageAndText1 text="+7 ___ ___ __ __" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] h-[82.667px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="h-[24px] relative shrink-0 w-full" data-name="Rental">
                        <IconBackgroundImage5 additionalClassNames="absolute left-0 top-[2px]">
                          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </IconBackgroundImage5>
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] left-[28px] text-[#364153] text-[16px] top-[-0.67px] whitespace-nowrap">Дата проката</p>
                      </div>
                      <div className="h-[50.667px] relative rounded-[14px] shrink-0 w-full" data-name="Rental">
                        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.333px] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#155dfc] h-[60px] relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#1447e6] w-full" data-name="Button">
                      <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[142.81px] text-[18px] text-center text-white top-[15.67px] whitespace-nowrap">Отправить</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[1104px] items-start left-0 pt-[48px] top-[1772px] w-[365.333px]" data-name="Section" style={{ backgroundImage: "linear-gradient(108.31deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}>
              <div className="h-[1008px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] relative size-full">
                  <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
                    <p className="-translate-x-1/2 absolute bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] font-bold from-[#1e2939] leading-[36px] left-[166.96px] text-[30px] text-[transparent] text-center to-[#101828] top-[-1.33px] whitespace-nowrap">Точки проката</p>
                  </div>
                  <div className="h-[940px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[508px] items-start left-0 pt-[24px] px-[24px] rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[333.333px]" data-name="Container">
                      <div className="h-[32px] relative shrink-0 w-full" data-name="Rental">
                        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#1e2939] text-[24px] top-[-0.67px] whitespace-nowrap">Наши точки проката</p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[16px] h-[404px] items-start relative shrink-0 w-full" data-name="Rental">
                        <div className="h-[68px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
                          <IconBackgroundImage1 />
                          <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[48px] top-[12px] w-[126.354px]" data-name="Rental">
                            <HeadingBackgroundImageAndText text="Парк Горького" />
                            <ParagraphBackgroundImageAndText text="ул. Достык, 104" />
                          </div>
                        </div>
                        <div className="h-[68px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
                          <IconBackgroundImage1 />
                          <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[48px] top-[12px] w-[167px]" data-name="Rental">
                            <HeadingBackgroundImageAndText text="Центральный парк" />
                            <ParagraphBackgroundImageAndText text="пр. Абая, 56" />
                          </div>
                        </div>
                        <div className="h-[68px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
                          <IconBackgroundImage1 />
                          <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[48px] top-[12px] w-[107px]" data-name="Rental">
                            <HeadingBackgroundImageAndText text="Медеу" />
                            <ParagraphBackgroundImageAndText text="Ущелье Медеу" />
                          </div>
                        </div>
                        <div className="h-[68px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
                          <IconBackgroundImage1 />
                          <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[48px] top-[12px] w-[102.667px]" data-name="Rental">
                            <HeadingBackgroundImageAndText text="Кок-Тобе" />
                            <ParagraphBackgroundImageAndText text="гора Кок-Тобе" />
                          </div>
                        </div>
                        <div className="h-[68px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
                          <IconBackgroundImage1 />
                          <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[48px] top-[12px] w-[177.875px]" data-name="Rental">
                            <HeadingBackgroundImageAndText text="Первомайский парк" />
                            <ParagraphBackgroundImageAndText text="ул. Гагарина, 135" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-white content-stretch flex flex-col h-[400px] items-start left-0 overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[540px] w-[333.333px]" data-name="Container">
                      <div className="bg-[#eee] h-[400px] shrink-0 w-full" data-name="Rental" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col gap-[32px] h-[1280px] items-start left-0 pt-[48px] px-[16px] top-[2876px] w-[365.333px]" data-name="Section">
              <div className="h-[72px] relative shrink-0 w-full" data-name="Heading 2">
                <p className="-translate-x-1/2 absolute bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] font-bold from-[#155dfc] leading-[36px] left-[167px] text-[30px] text-[transparent] text-center to-[#1447e6] top-[-1.33px] w-[208px]">Популярные маршруты</p>
              </div>
              <div className="h-[1080px] relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage additionalClassNames="top-0">
                  <div className="absolute h-[252px] left-0 top-0 w-[333px]" data-name="image 21">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                      <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage21} />
                      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
                    </div>
                  </div>
                  <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] items-center justify-center left-[134.67px] px-[16px] rounded-[16px] size-[64px] to-[#1447e6] top-[24px]" data-name="Rental">
                    <IconBackgroundImage2 />
                  </div>
                  <RentalBackgroundImageAndText2 text="Городской маршрут" />
                  <div className="absolute h-[84px] left-[24px] top-[144px] w-[285.333px]" data-name="Rental">
                    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.44px)] top-0">
                      <div className="h-[28px] relative rounded-[44739200px] shrink-0 w-[100.458px]" data-name="Text">
                        <IconBackgroundImage3 additionalClassNames="left-[12px]" />
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[34px] text-[14px] text-white top-[4.33px] whitespace-nowrap">1-2 часа</p>
                      </div>
                      <div className="h-[28px] relative rounded-[44739200px] shrink-0 w-[81.854px]" data-name="Text">
                        <IconBackgroundImage4 additionalClassNames="left-[12px] top-[6px]" />
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[34px] text-[14px] text-white top-[4.33px] whitespace-nowrap">15 км</p>
                      </div>
                      <ParagraphBackgroundImageAndText1 text="Легкий" />
                    </div>
                  </div>
                </ContainerBackgroundImage>
                <ContainerBackgroundImage additionalClassNames="top-[276px]">
                  <div className="absolute h-[252px] left-0 rounded-[15px] top-0 w-[341px]" data-name="image 37">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px]">
                      <img alt="" className="absolute max-w-none object-cover rounded-[15px] size-full" src={imgImage37} />
                      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[15px]" />
                    </div>
                  </div>
                  <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] items-center justify-center left-[134.67px] px-[16px] rounded-[16px] size-[64px] to-[#1447e6] top-[24px]" data-name="Rental">
                    <IconBackgroundImage2 />
                  </div>
                  <div className="absolute h-[28px] left-[24px] top-[104px] w-[285.333px]" data-name="Rental">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[143.15px] text-[18px] text-center text-white top-[-0.33px] whitespace-nowrap">Парковый маршрут</p>
                  </div>
                  <div className="absolute h-[84px] left-[24px] top-[144px] w-[285.333px]" data-name="Rental">
                    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.44px)] top-0">
                      <div className="h-[28px] relative rounded-[44739200px] shrink-0 w-[100.458px]" data-name="Text">
                        <IconBackgroundImage3 additionalClassNames="left-[20px]" />
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[44px] text-[14px] text-white top-[4px] whitespace-nowrap">1 час</p>
                      </div>
                      <div className="h-[28px] relative rounded-[44739200px] shrink-0 w-[81.854px]" data-name="Text">
                        <IconBackgroundImage4 additionalClassNames="left-[11.7px] top-[3px]" />
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[32.7px] text-[14px] text-white top-px whitespace-nowrap">10 км</p>
                      </div>
                      <ParagraphBackgroundImageAndText1 text="Легкий" />
                    </div>
                  </div>
                </ContainerBackgroundImage>
                <ContainerBackgroundImage additionalClassNames="top-[552px]">
                  <ImageBackgroundImage additionalClassNames="-translate-x-1/2 left-[calc(50%+0.33px)] w-[550px]">
                    <img alt="" className="absolute h-[155.65%] left-0 max-w-none top-[-41.92%] w-full" src={imgImage39} />
                  </ImageBackgroundImage>
                  <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] items-center justify-center left-[134.67px] px-[16px] rounded-[16px] size-[64px] to-[#1447e6] top-[24px]" data-name="Rental">
                    <IconBackgroundImage2 />
                  </div>
                  <RentalBackgroundImageAndText2 text="Горный маршрут" />
                  <div className="absolute h-[84px] left-[24px] top-[144px] w-[285.333px]" data-name="Rental">
                    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.44px)] top-0">
                      <div className="h-[28px] relative rounded-[44739200px] shrink-0 w-[100.458px]" data-name="Text">
                        <IconBackgroundImage3 additionalClassNames="left-[8px]" />
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[30px] text-[14px] text-white top-[4.33px] whitespace-nowrap">3-4 часа</p>
                      </div>
                      <div className="h-[28px] relative rounded-[44739200px] shrink-0 w-[81.854px]" data-name="Text">
                        <IconBackgroundImage4 additionalClassNames="left-[7px] top-[4px]" />
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[29px] text-[14px] text-white top-[2.33px] whitespace-nowrap">25 км</p>
                      </div>
                      <div className="bg-gradient-to-r from-[#155dfc] h-[28px] relative rounded-[44739200px] shrink-0 to-[#1447e6] w-[100px]" data-name="Paragraph">
                        <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%-0.23px)] text-[14px] text-center text-white top-[calc(50%-11px)] whitespace-nowrap">Средний</p>
                      </div>
                    </div>
                  </div>
                </ContainerBackgroundImage>
                <ContainerBackgroundImage additionalClassNames="top-[828px]">
                  <ImageBackgroundImage additionalClassNames="left-0 w-[341px]">
                    <img alt="" className="absolute h-[100.03%] left-[-8.09%] max-w-none top-[-0.01%] w-[108.09%]" src={imgImage38} />
                  </ImageBackgroundImage>
                  <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] items-center justify-center left-[134.67px] px-[16px] rounded-[16px] size-[64px] to-[#1447e6] top-[24px]" data-name="Rental">
                    <IconBackgroundImage2 />
                  </div>
                  <div className="absolute h-[28px] left-[24px] top-[104px] w-[285.333px]" data-name="Rental">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[143.06px] text-[18px] text-center text-white top-[-0.33px] whitespace-nowrap">Экстремальный маршрут</p>
                  </div>
                  <div className="absolute h-[84px] left-[24px] top-[144px] w-[285.333px]" data-name="Rental">
                    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.44px)] top-0">
                      <div className="h-[28px] relative rounded-[44739200px] shrink-0 w-[100.458px]" data-name="Text">
                        <IconBackgroundImage3 additionalClassNames="left-[5px]" />
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[27px] text-[14px] text-white top-[4.33px] whitespace-nowrap">5-6 часов</p>
                      </div>
                      <div className="h-[28px] relative rounded-[44739200px] shrink-0 w-[81.854px]" data-name="Text">
                        <IconBackgroundImage4 additionalClassNames="left-[5px] top-[3px]" />
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[27px] text-[14px] text-white top-[1.33px] whitespace-nowrap">40 км</p>
                      </div>
                      <div className="h-[28px] relative rounded-[44739200px] shrink-0 w-[100px]" data-name="Paragraph" style={{ backgroundImage: "linear-gradient(99.2788deg, rgb(0, 85, 255) 2.1872%, rgb(155, 90, 255) 53.969%, rgb(212, 79, 223) 104.76%)" }}>
                        <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal h-[23px] leading-[20px] left-[calc(50%+0.13px)] text-[14px] text-center text-white top-[calc(50%-11px)] w-[69px]">Сложный</p>
                      </div>
                    </div>
                  </div>
                </ContainerBackgroundImage>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#1e2939] h-[574.833px] relative shrink-0 to-[#101828] w-[365.333px]" data-name="Footer">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start pt-[32px] px-[16px] relative size-full">
            <div className="h-[433.5px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex flex-col gap-[16px] h-[193.5px] items-start left-0 top-0 w-[333.333px]" data-name="Container">
                <HeadingBackgroundImageAndText1 text="Контакты" />
                <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#d1d5dc] text-[14px] top-[0.67px] w-[295px]">Мы всегда открыты для сотрудничества, дилеров и партнёров.</p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
                    <IconBackgroundImage5 additionalClassNames="absolute left-0 top-[4px]">
                      <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage5>
                    <div className="absolute h-[20px] left-[32px] top-0 w-[135.25px]" data-name="Footer">
                      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[0.33px] whitespace-nowrap">Алматы, Казахстан</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Link">
                    <BackgroundImage1 additionalClassNames="relative shrink-0">
                      <g clipPath="url(#clip0_47_1477)" id="Icon">
                        <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_47_1477">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </BackgroundImage1>
                    <div className="h-[20px] relative shrink-0 w-[104.854px]" data-name="Footer">
                      <BackgroundImageAndText text="+7 771 146 5057" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Link">
                    <IconBackgroundImage5 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage5>
                    <div className="h-[20px] relative shrink-0 w-[97.604px]" data-name="Footer">
                      <BackgroundImageAndText text="info@rayda.kz" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[16px] h-[84px] items-start left-0 top-[225.5px] w-[333.333px]" data-name="Container">
                <HeadingBackgroundImageAndText1 text="Социальные сети" />
                <div className="content-stretch flex gap-[16px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                  <LinkBackgroundImage>
                    <IconBackgroundImage5 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage5>
                  </LinkBackgroundImage>
                  <LinkBackgroundImage>
                    <BackgroundImage1 additionalClassNames="relative shrink-0">
                      <g clipPath="url(#clip0_47_1523)" id="Icon">
                        <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p19f4a800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_47_1523">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </BackgroundImage1>
                  </LinkBackgroundImage>
                  <LinkBackgroundImage>
                    <IconBackgroundImage5 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p2ffa5d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage5>
                  </LinkBackgroundImage>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[16px] h-[92px] items-start left-0 top-[341.5px] w-[333.333px]" data-name="Container">
                <HeadingBackgroundImageAndText1 text="Юридическая информация" />
                <div className="content-stretch flex flex-col gap-[8px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
                  <LinkBackgroundImageAndText text="Политика конфиденциальности" />
                  <LinkBackgroundImageAndText text="Пользовательское соглашение" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[45.333px] items-start pt-[25.333px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#1e2939] border-solid border-t-[1.333px] inset-0 pointer-events-none" />
              <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[166.73px] text-[#99a1af] text-[14px] text-center top-[0.33px] whitespace-nowrap">© 2024-2026 RAYDA. Все права защищены</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.95)] h-[389.333px] left-0 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[365.333px]" data-name="Header">
        <div className="absolute content-stretch flex h-[64px] items-center justify-between left-[16px] top-0 w-[333.333px]" data-name="Container">
          <div className="h-[40px] relative shrink-0 w-[121.917px]" data-name="Link">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.214px] items-center pl-[-3.786px] relative size-full">
              <BackgroundImage4 additionalClassNames="size-[47.571px]">
                <div className="flex-none rotate-[-167.76deg]">
                  <div className="bg-[#155dfc] relative rounded-[44739200px] size-[40px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14.343px] relative size-full">
                      <BackgroundImage4 additionalClassNames="h-[30.544px] w-[20.595px]">
                        <div className="flex-none rotate-[167.76deg]">
                          <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[28px] relative text-[20px] text-white whitespace-nowrap">R</p>
                        </div>
                      </BackgroundImage4>
                    </div>
                  </div>
                </div>
              </BackgroundImage4>
              <div className="h-[28px] relative shrink-0 w-[73.917px]" data-name="Header">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#121212] text-[20px] top-[-0.67px] whitespace-nowrap">RAYDA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[40px]" data-name="Button">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                <Icon30VectorBackgroundImage>
                  <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </Icon30VectorBackgroundImage>
                <Icon30VectorBackgroundImage>
                  <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </Icon30VectorBackgroundImage>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white h-[325.333px] left-0 top-[64px] w-[365.333px]" data-name="Container">
          <div className="content-stretch flex flex-col items-start overflow-clip pt-[1.333px] relative rounded-[inherit] size-full">
            <div className="h-[324px] relative shrink-0 w-full" data-name="Header">
              <LinkBackgroundImageAndText1 text="О нас" additionalClassNames="top-[16px]" />
              <LinkBackgroundImageAndText1 text="Покупка" additionalClassNames="top-[76px]" />
              <div className="absolute h-[44px] left-[16px] top-[136px] w-[333.333px]" data-name="Link">
                <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#155dfc] text-[18px] top-[7.67px] whitespace-nowrap">Прокат</p>
              </div>
              <div className="absolute content-stretch flex gap-[8px] h-[48px] items-start left-[16px] pt-[8px] top-[196px] w-[333.333px]" data-name="Container">
                <div className="flex-[105.771_0_0] h-[40px] min-h-px min-w-px relative rounded-[10px]" data-name="Button" style={{ backgroundImage: "linear-gradient(96.8971deg, rgb(0, 85, 255) 2.1872%, rgb(155, 90, 255) 53.969%, rgb(212, 79, 223) 104.76%)" }}>
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[53.23px] text-[16px] text-center text-white top-[7.33px] whitespace-nowrap">RU</p>
                  </div>
                </div>
                <BackgroundImage3 additionalClassNames="flex-[105.792_0_0]">
                  <p className="-translate-x-1/2 absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[53.02px] text-[#4a5565] text-[16px] text-center top-[7.33px] whitespace-nowrap">EN</p>
                </BackgroundImage3>
                <BackgroundImage3 additionalClassNames="flex-[105.771_0_0]">
                  <p className="-translate-x-1/2 absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] left-[53.38px] text-[#4a5565] text-[16px] text-center top-[7.33px] whitespace-nowrap">KZ</p>
                </BackgroundImage3>
              </div>
              <div className="absolute bg-gradient-to-r from-[#155dfc] h-[50.398px] left-[7.67px] rounded-[44739200px] to-[#1447e6] top-[258.8px] w-[349.637px]" data-name="Link">
                <div className="absolute left-[39.54px] size-[20.999px] top-[14px]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9993 20.9992">
                    <g clipPath="url(#clip0_47_1535)" id="Icon">
                      <path d={svgPaths.p8e09500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.74994" />
                    </g>
                    <defs>
                      <clipPath id="clip0_47_1535">
                        <rect fill="white" height="20.9992" width="20.9993" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-[67.54px] text-[16px] text-white top-[11.43px] whitespace-nowrap">Связаться через WhatsApp</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t-[1.333px] inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}