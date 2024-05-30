import localFont from "next/font/local";

export const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir-lt-std-95-black.woff2",
      weight: "750",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir-lt-std-55-roman.woff2",
      weight: "350",
      style: "normal",
    },
  ],
});

export const proxima_nova = localFont({
  src: [
    {
      path: "../../public/fonts/proxima-nova-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/proxima-nova-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/proxima-nova-light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});
