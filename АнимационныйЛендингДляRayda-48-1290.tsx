import clsx from "clsx";
import svgPaths from "./svg-pj398iv3n4";
import imgImageRaydaMountainPro from "figma:asset/cc5d6753285b4148633538a34fa2f7af15c483d2.png";
import imgImageRaydaCityComfort from "figma:asset/76afc7f6cc042d55427beee17b4c5729c1630bcf.png";
import imgImageRaydaSportRacing from "figma:asset/915c108dbc8d7d989ea8a8206c056ce9ae573cab.png";
import imgImageRaydaEBikeSmart from "figma:asset/bc2556b4d686a8237439851fb6d055ea76a1e815.png";
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(150.577deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }} className={clsx("absolute h-[188px] left-0 rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] w-[333.333px]", additionalClassNames)}>
      {children}
    </div>
  );
}
type HeaderBackgroundImageProps = {
  additionalClassNames?: string;
};

function HeaderBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<HeaderBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
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

function PurchaseBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[108px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type IconBackgroundImage1Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage1Props>) {
  return (
    <BackgroundImage additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type Icon9VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon9VectorBackgroundImage({ additionalClassNames = "" }: Icon9VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute left-[16.67%] right-[16.67%]", additionalClassNames)}>
      <div className="absolute inset-[-1px_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
          <path d="M1 1H17" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
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
type HeadingBackgroundImageAndText2Props = {
  text: string;
};

function HeadingBackgroundImageAndText2({ text }: HeadingBackgroundImageAndText2Props) {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#155dfc] text-[20px] top-[-0.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return (
    <div className="absolute h-[28px] left-[24px] top-[104px] w-[285.333px]">
      <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[142.94px] text-[#1e2939] text-[20px] text-center top-[-0.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1e2939] text-[18px] top-[-0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ImageRaydaMountainProBackgroundImageProps = {
  additionalClassNames?: string;
};

function ImageRaydaMountainProBackgroundImage({ additionalClassNames = "" }: ImageRaydaMountainProBackgroundImageProps) {
  return (
    <div className={clsx("absolute left-0 top-0 w-[333.333px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRaydaMountainPro} />
    </div>
  );
}

export default function Rayda() {
  return (
    <div className="bg-white relative size-full" data-name="Анимационный лендинг для RAYDA">
      <div className="absolute content-stretch flex flex-col h-[3078.833px] items-start left-0 pt-[64px] top-0 w-[365.333px]" data-name="Layout">
        <div className="h-[2440px] relative shrink-0 w-[365.333px]" data-name="Purchase" style={{ backgroundImage: "linear-gradient(98.5155deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start relative size-full">
            <div className="content-stretch flex flex-col h-[208px] items-start pt-[48px] relative shrink-0 w-full" data-name="Section" style={{ backgroundImage: "linear-gradient(108.59deg, rgb(0, 255, 144) 21.753%, rgb(184, 219, 85) 96.976%)" }}>
              <div className="h-[112px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
                  <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 1">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[40px] left-[166.94px] text-[36px] text-center text-white top-[-0.67px] whitespace-nowrap">Покупка</p>
                  </div>
                  <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-[166.9px] text-[18px] text-center text-white top-[-0.33px] w-[255px]">Выберите свой идеальный велосипед</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1340px] relative shrink-0 w-full" data-name="Section">
              <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] relative size-full">
                <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
                  <p className="-translate-x-1/2 absolute bg-clip-text font-['Montserrat:Bold',sans-serif] font-bold leading-[36px] left-[166.75px] text-[30px] text-[transparent] text-center top-[-1.33px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(0, 166, 62) 100%)" }}>
                    Наши модели
                  </p>
                </div>
                <div className="h-[1272px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute bg-white content-stretch flex flex-col h-[300px] items-start left-0 overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[333.333px]" data-name="Container">
                    <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-name="Purchase">
                      <ImageRaydaMountainProBackgroundImage additionalClassNames="h-[192px]" />
                      <div className="absolute h-[28px] left-[224.08px] rounded-[44739200px] top-[16px] w-[93.25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(122.527deg, rgb(0, 255, 144) 21.753%, rgb(184, 219, 85) 96.976%)" }}>
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[12px] text-[14px] text-white top-[4.33px] whitespace-nowrap">₸ 180,000</p>
                      </div>
                    </div>
                    <PurchaseBackgroundImage>
                      <HeadingBackgroundImageAndText text="RAYDA Mountain Pro" />
                      <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.33px] w-[284px]">Горный велосипед для экстремальных приключений</p>
                      </div>
                    </PurchaseBackgroundImage>
                  </div>
                  <div className="absolute bg-white content-stretch flex flex-col h-[300px] items-start left-0 overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[324px] w-[333.333px]" data-name="Container">
                    <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-name="Purchase">
                      <div className="absolute h-[192px] left-0 top-0 w-[333.333px]" data-name="Image (RAYDA City Comfort)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRaydaCityComfort} />
                      </div>
                      <div className="absolute h-[28px] left-[225.06px] rounded-[44739200px] top-[16px] w-[92.271px]" data-name="Container" style={{ backgroundImage: "linear-gradient(122.253deg, rgb(0, 255, 144) 21.753%, rgb(184, 219, 85) 96.976%)" }}>
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[12px] text-[14px] text-white top-[4.33px] whitespace-nowrap">₸ 120,000</p>
                      </div>
                    </div>
                    <PurchaseBackgroundImage>
                      <HeadingBackgroundImageAndText text="RAYDA City Comfort" />
                      <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.33px] w-[286px]">Городской велосипед для комфортных поездок</p>
                      </div>
                    </PurchaseBackgroundImage>
                  </div>
                  <div className="absolute bg-white content-stretch flex flex-col h-[300px] items-start left-0 overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[648px] w-[333.333px]" data-name="Container">
                    <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-name="Purchase">
                      <div className="absolute h-[192px] left-0 top-0 w-[333.333px]" data-name="Image (RAYDA Sport Racing)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRaydaSportRacing} />
                      </div>
                      <div className="absolute h-[28px] left-[222.21px] rounded-[44739200px] top-[16px] w-[95.125px]" data-name="Container" style={{ backgroundImage: "linear-gradient(123.046deg, rgb(0, 255, 144) 21.753%, rgb(184, 219, 85) 96.976%)" }}>
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[12px] text-[14px] text-white top-[4.33px] whitespace-nowrap">₸ 250,000</p>
                      </div>
                    </div>
                    <PurchaseBackgroundImage>
                      <HeadingBackgroundImageAndText text="RAYDA Sport Racing" />
                      <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.33px] w-[265px]">Спортивный велосипед для гонок и скорости</p>
                      </div>
                    </PurchaseBackgroundImage>
                  </div>
                  <div className="absolute bg-white content-stretch flex flex-col h-[300px] items-start left-0 overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[972px] w-[333.333px]" data-name="Container">
                    <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-name="Purchase">
                      <div className="absolute h-[192px] left-0 top-0 w-[333.333px]" data-name="Image (RAYDA E-Bike Smart)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRaydaEBikeSmart} />
                      </div>
                      <div className="absolute h-[28px] left-[222.35px] rounded-[44739200px] top-[16px] w-[94.979px]" data-name="Container" style={{ backgroundImage: "linear-gradient(123.006deg, rgb(0, 255, 144) 21.753%, rgb(184, 219, 85) 96.976%)" }}>
                        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] left-[12px] text-[14px] text-white top-[4.33px] whitespace-nowrap">₸ 350,000</p>
                      </div>
                    </div>
                    <PurchaseBackgroundImage>
                      <HeadingBackgroundImageAndText text="RAYDA E-Bike Smart" />
                      <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.33px] w-[272px]">Электрический велосипед с умными функциями</p>
                      </div>
                    </PurchaseBackgroundImage>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-[796px] relative shrink-0 w-full" data-name="Section">
              <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[16px] relative size-full">
                <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
                  <p className="-translate-x-1/2 absolute bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] font-bold from-[#1e2939] leading-[36px] left-[166.9px] text-[30px] text-[transparent] text-center to-[#101828] top-[-1.33px] whitespace-nowrap">Как купить</p>
                </div>
                <div className="h-[632px] relative shrink-0 w-full" data-name="Container">
                  <ContainerBackgroundImage additionalClassNames="top-0">
                    <HeadingBackgroundImageAndText1 text="Купить через WhatsApp" />
                    <div className="absolute h-[20px] left-[24px] top-[144px] w-[285.333px]" data-name="Paragraph">
                      <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[143.6px] text-[#4a5565] text-[14px] text-center top-[0.33px] whitespace-nowrap">Быстрая покупка через мессенджер</p>
                    </div>
                    <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] items-center justify-center left-[134.46px] px-[16.104px] rounded-[16px] size-[64.414px] to-[#1447e6] top-[23.79px]" data-name="Container">
                      <div className="relative shrink-0 size-[32.207px]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.2071 32.207">
                          <g id="Icon">
                            <path d={svgPaths.p26eb8780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.68392" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </ContainerBackgroundImage>
                  <ContainerBackgroundImage additionalClassNames="top-[212px]">
                    <div className="absolute h-[28px] left-[24px] top-[104px] w-[285.333px]" data-name="Heading 3">
                      <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[143.08px] text-[#1e2939] text-[20px] text-center top-[-0.67px] whitespace-nowrap">Купить на Каспи Магазин</p>
                    </div>
                    <div className="absolute h-[20px] left-[24px] top-[144px] w-[285.333px]" data-name="Paragraph">
                      <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[143.04px] text-[#4a5565] text-[14px] text-center top-[0.33px] whitespace-nowrap">Рассрочка и удобная доставка</p>
                    </div>
                    <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] items-center justify-center left-[134.67px] px-[16px] rounded-[16px] size-[64px] to-[#1447e6] top-[22.71px]" data-name="Container">
                      <IconBackgroundImage>
                        <path d={svgPaths.p362f5e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={svgPaths.p26b4fb80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={svgPaths.pb3be080} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </IconBackgroundImage>
                    </div>
                  </ContainerBackgroundImage>
                  <div className="absolute h-[208px] left-0 rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[424px] w-[333.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(148.036deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}>
                    <HeadingBackgroundImageAndText1 text="Другие способы покупки" />
                    <div className="absolute h-[40px] left-[24px] top-[144px] w-[285.333px]" data-name="Paragraph">
                      <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[143px] text-[#4a5565] text-[14px] text-center top-[0.33px] w-[203px]">Оплата картой, наличными, переводом</p>
                    </div>
                    <div className="absolute flex items-center justify-center left-[133.94px] size-[65.452px] top-[23.27px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                      <div className="flex-none rotate-[-1.32deg]">
                        <div className="bg-gradient-to-r content-stretch flex from-[#155dfc] items-center justify-center px-[16.363px] relative rounded-[16px] size-[64px] to-[#1447e6]" data-name="Container">
                          <IconBackgroundImage>
                            <path d={svgPaths.p30f65280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                            <path d="M2.66667 13.3333H29.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                          </IconBackgroundImage>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[574.833px] relative shrink-0 w-[365.333px]" data-name="Footer" style={{ backgroundImage: "linear-gradient(122.438deg, rgb(16, 24, 40) 0%, rgb(30, 41, 57) 100%)" }}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start pt-[32px] px-[16px] relative size-full">
            <div className="h-[433.5px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex flex-col gap-[16px] h-[193.5px] items-start left-0 top-0 w-[333.333px]" data-name="Container">
                <HeadingBackgroundImageAndText2 text="Контакты" />
                <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#d1d5dc] text-[14px] top-[0.67px] w-[295px]">Мы всегда открыты для сотрудничества, дилеров и партнёров.</p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
                    <IconBackgroundImage1 additionalClassNames="absolute left-0 top-[4px]">
                      <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage1>
                    <div className="absolute h-[20px] left-[32px] top-0 w-[135.25px]" data-name="Footer">
                      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[0.33px] whitespace-nowrap">Алматы, Казахстан</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Link">
                    <BackgroundImage additionalClassNames="relative shrink-0">
                      <g clipPath="url(#clip0_47_1477)" id="Icon">
                        <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_47_1477">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </BackgroundImage>
                    <div className="h-[20px] relative shrink-0 w-[104.854px]" data-name="Footer">
                      <BackgroundImageAndText text="+7 771 146 5057" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Link">
                    <IconBackgroundImage1 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage1>
                    <div className="h-[20px] relative shrink-0 w-[97.604px]" data-name="Footer">
                      <BackgroundImageAndText text="info@rayda.kz" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[16px] h-[84px] items-start left-0 top-[225.5px] w-[333.333px]" data-name="Container">
                <HeadingBackgroundImageAndText2 text="Социальные сети" />
                <div className="content-stretch flex gap-[16px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                  <LinkBackgroundImage>
                    <IconBackgroundImage1 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage1>
                  </LinkBackgroundImage>
                  <LinkBackgroundImage>
                    <BackgroundImage additionalClassNames="relative shrink-0">
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
                    </BackgroundImage>
                  </LinkBackgroundImage>
                  <LinkBackgroundImage>
                    <IconBackgroundImage1 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p2ffa5d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage1>
                  </LinkBackgroundImage>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[16px] h-[92px] items-start left-0 top-[341.5px] w-[333.333px]" data-name="Container">
                <HeadingBackgroundImageAndText2 text="Юридическая информация" />
                <div className="content-stretch flex flex-col gap-[8px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
                  <LinkBackgroundImageAndText text="Политика конфиденциальности" />
                  <LinkBackgroundImageAndText text="Пользовательское соглашение" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[45.333px] items-start pt-[25.333px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#364153] border-solid border-t-[1.333px] inset-0 pointer-events-none" />
              <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] left-[166.73px] text-[#99a1af] text-[14px] text-center top-[0.33px] whitespace-nowrap">© 2024-2026 RAYDA. Все права защищены</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[64px] items-start left-0 px-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[365.333px]" data-name="Header">
        <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <div className="h-[40px] relative shrink-0 w-[121.917px]" data-name="Link">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.387px] items-center pl-[-4.613px] relative size-full">
              <div className="flex items-center justify-center relative shrink-0 size-[49.225px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                <div className="flex-none rotate-[105.48deg]">
                  <div className="bg-gradient-to-r from-[#155dfc] relative rounded-[44739200px] size-[40px] to-[#1447e6]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.352px] relative size-full">
                      <HeaderBackgroundImage additionalClassNames="h-[20.243px] w-[30.521px]">
                        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[-26.63px] text-[18px] text-white top-[-9.53px] whitespace-nowrap">R</p>
                      </HeaderBackgroundImage>
                    </div>
                  </div>
                </div>
              </div>
              <HeaderBackgroundImage additionalClassNames="h-[28px] w-[73.917px]">
                <p className="absolute bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] font-bold from-[#1e2939] leading-[28px] left-0 text-[20px] text-[transparent] to-[#101828] top-[-0.67px] whitespace-nowrap">RAYDA</p>
              </HeaderBackgroundImage>
            </div>
          </div>
          <div className="relative shrink-0 size-[40px]" data-name="Button">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                <Icon9VectorBackgroundImage additionalClassNames="bottom-1/2 top-1/2" />
                <Icon9VectorBackgroundImage additionalClassNames="bottom-3/4 top-1/4" />
                <Icon9VectorBackgroundImage additionalClassNames="bottom-1/4 top-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.8)] content-stretch flex h-[852px] items-center justify-center left-0 px-[16px] top-0 w-[365.333px]" data-name="Container">
        <div className="bg-white h-[540px] relative rounded-[16px] shrink-0 w-[333.333px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="h-[256px] relative shrink-0 w-full" data-name="Purchase">
              <ImageRaydaMountainProBackgroundImage additionalClassNames="h-[256px]" />
              <div className="absolute backdrop-blur-[5px] bg-gradient-to-b content-stretch flex from-[rgba(251,16,240,0.45)] items-center justify-center left-[277.33px] opacity-50 px-[8.8px] py-[0.8px] rounded-[44739200px] size-[40px] to-[rgba(21,93,252,0.45)] top-[16px]" data-name="Button">
                <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[44739200px]" />
                <div className="relative shrink-0 size-[24px]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="Icon">
                      <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute h-[44px] left-[16px] rounded-[44739200px] top-[196px] w-[129.25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(119.358deg, rgb(0, 255, 144) 21.753%, rgb(184, 219, 85) 96.976%)" }}>
                <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[28px] left-[16px] text-[20px] text-white top-[7.33px] whitespace-nowrap">₸ 180,000</p>
              </div>
            </div>
            <div className="h-[284px] relative shrink-0 w-full" data-name="Purchase">
              <div className="absolute h-[32px] left-[24px] top-[24px] w-[285.333px]" data-name="Heading 2">
                <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#1e2939] text-[24px] top-[-0.67px] whitespace-nowrap">RAYDA Mountain Pro</p>
              </div>
              <div className="absolute h-[56px] left-[24px] top-[72px] w-[285.333px]" data-name="Paragraph">
                <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[18px] top-[-0.33px] w-[283px]">Горный велосипед для экстремальных приключений</p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[12px] h-[108px] items-start left-[24px] top-[152px] w-[285.333px]" data-name="Container">
                <div className="bg-[#155dfc] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
                  <BackgroundImage additionalClassNames="absolute left-[25.08px] top-[14px]">
                    <g clipPath="url(#clip0_47_1420)" id="Icon">
                      <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_47_1420">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </BackgroundImage>
                  <p className="-translate-x-1/2 absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] left-[157.08px] text-[16px] text-center text-white top-[11.33px] whitespace-nowrap">Купить через WhatsApp</p>
                </div>
                <div className="h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(105.213deg, rgb(0, 85, 255) 2.1872%, rgb(155, 90, 255) 53.969%, rgb(212, 79, 223) 104.76%)" }}>
                  <BackgroundImage additionalClassNames="absolute left-[18.69px] top-[14px]">
                    <g clipPath="url(#clip0_47_1415)" id="Icon">
                      <path d={svgPaths.p32514c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p2734ea00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p24a52d80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_47_1415">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </BackgroundImage>
                  <p className="-translate-x-1/2 absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] left-[156.69px] text-[16px] text-center text-white top-[11.33px] whitespace-nowrap">Купить на Каспи Магазин</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}