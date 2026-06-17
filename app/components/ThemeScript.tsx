import Script from "next/script";

export function ThemeScript() {
  return (
    <Script
      id="theme-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            const theme = localStorage.getItem("theme");
            const root = document.documentElement;
            if (theme === "light") {
              root.classList.remove("dark");
            } else {
              root.classList.add("dark");
            }
          })();
        `,
      }}
    />
  );
}
