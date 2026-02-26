import { s as sanitize_props, a as spread_props, b as slot, c as stringify, d as attr_class, e as clsx, f as escape_html, g as ensure_array_like, h as attr, i as head } from "../../chunks/index2.js";
import "class-variance-authority";
import { I as Icon, B as Button, c as cn, L as Linkedin, G as Github } from "../../chunks/linkedin.js";
import { s as siteConfig, n as navItems, f as footerContent } from "../../chunks/data.js";
function Instagram($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.363.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "20",
        "x": "2",
        "y": "2",
        "rx": "5",
        "ry": "5"
      }
    ],
    [
      "path",
      { "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }
    ],
    [
      "line",
      { "x1": "17.5", "x2": "17.51", "y1": "6.5", "y2": "6.5" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "instagram" },
    $$sanitized_props,
    {
      /**
       * @component @name Instagram
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIiIHk9IjIiIHJ4PSI1IiByeT0iNSIgLz4KICA8cGF0aCBkPSJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3eiIgLz4KICA8bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/instagram
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Message_square($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.363.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "message-square" },
    $$sanitized_props,
    {
      /**
       * @component @name MessageSquare
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTVhMiAyIDAgMCAxLTIgMkg3bC00IDRWNWEyIDIgMCAwIDEgMi0yaDE0YTIgMiAwIDAgMSAyIDJ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/message-square
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Moon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.363.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]];
  Icon($$renderer, spread_props([
    { name: "moon" },
    $$sanitized_props,
    {
      /**
       * @component @name Moon
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgM2E2IDYgMCAwIDAgOSA5IDkgOSAwIDEgMS05LTlaIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/moon
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Sun($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.363.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sun" },
    $$sanitized_props,
    {
      /**
       * @component @name Sun
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Twitter($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.363.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "twitter" },
    $$sanitized_props,
    {
      /**
       * @component @name Twitter
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgNHMtLjcgMi4xLTIgMy40YzEuNiAxMC05LjQgMTcuMy0xOCAxMS42IDIuMi4xIDQuNC0uNiA2LTJDMyAxNS41LjUgOS42IDMgNWMyLjIgMi42IDUuNiA0LjEgOSA0LS45LTQuMiA0LTYuNiA3LTMuOCAxLjEgMCAzLTEuMiAzLTEuMnoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/twitter
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function ThemeToggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let mode = "system";
    let isDark = false;
    function applyTheme(targetMode) {
      let actualDark = false;
      if (targetMode === "system") {
        actualDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        localStorage.removeItem("theme");
      } else {
        actualDark = targetMode === "dark";
        localStorage.theme = targetMode;
      }
      if (actualDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      isDark = actualDark;
      mode = targetMode;
    }
    function cycleTheme() {
      if (mode === "system") applyTheme("light");
      else if (mode === "light") applyTheme("dark");
      else applyTheme("system");
    }
    Button($$renderer2, {
      variant: "ghost",
      size: "icon",
      onclick: cycleTheme,
      "aria-label": `Toggle theme: current mode is ${stringify(mode)}`,
      class: "relative group",
      children: ($$renderer3) => {
        if (mode === "system") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="relative">`);
          if (isDark) {
            $$renderer3.push("<!--[-->");
            Moon($$renderer3, { class: "h-5 w-5 text-primary" });
          } else {
            $$renderer3.push("<!--[!-->");
            Sun($$renderer3, { class: "h-5 w-5 text-primary" });
          }
          $$renderer3.push(`<!--]--> <span class="absolute -top-1 -right-1 flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span></span></div>`);
        } else if (isDark) {
          $$renderer3.push("<!--[1-->");
          Moon($$renderer3, { class: "h-5 w-5" });
        } else {
          $$renderer3.push("<!--[!-->");
          Sun($$renderer3, { class: "h-5 w-5" });
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
  });
}
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className = "" } = $$props;
    $$renderer2.push(`<header${attr_class(clsx(cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      "py-5 bg-transparent border-transparent",
      className
    )))}><div class="container flex items-center justify-between"><div class="flex items-center gap-2"><a href="/" class="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">${escape_html(siteConfig.name.split(" ")[0])}<span class="text-primary">.</span></a></div> <nav class="hidden md:flex items-center gap-8"><!--[-->`);
    const each_array = ensure_array_like(navItems);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<a${attr("href", item.href)} class="text-sm font-medium text-muted-foreground transition-all hover:text-primary relative group inline-block">${escape_html(item.name)} <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></a>`);
    }
    $$renderer2.push(`<!--]--> <div class="h-4 w-px bg-border/60 mx-2"></div> `);
    ThemeToggle($$renderer2);
    $$renderer2.push(`<!----></nav> <div class="flex md:hidden items-center gap-4">`);
    ThemeToggle($$renderer2);
    $$renderer2.push(`<!----></div></div></header>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const iconMap = { Github, Linkedin, Instagram, Twitter };
    $$renderer2.push(`<footer class="bg-background overflow-hidden"><div class="border-t border-border/40 py-20 md:py-28"><div class="container flex flex-col items-center text-center gap-8 max-w-3xl"><h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">${escape_html(footerContent.cta.headline)}</h2> `);
    Button($$renderer2, {
      href: footerContent.cta.buttonHref,
      size: "lg",
      class: "rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-semibold gap-3 group transition-all hover:scale-[1.03] active:scale-95",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(footerContent.cta.buttonLabel)} <div class="bg-background/20 rounded-full p-1.5 group-hover:bg-background/30 transition-colors">`);
        Message_square($$renderer3, { class: "h-4 w-4" });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div> <div class="border-t border-border/40"><div class="container py-8 flex flex-col md:flex-row items-center justify-between gap-8"><a href="/" class="flex items-center gap-2.5 text-foreground shrink-0"><span class="text-base font-bold tracking-tight">${escape_html(footerContent.brand.name)}<span class="text-primary">/</span>${escape_html(footerContent.brand.suffix)}</span></a> <nav><ul class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"><!--[-->`);
    const each_array = ensure_array_like(navItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.href)} class="hover:text-foreground transition-colors">${escape_html(link.name)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav> <div class="flex items-center gap-4 shrink-0"><!--[-->`);
    const each_array_1 = ensure_array_like(footerContent.socials);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let social = each_array_1[$$index_1];
      const IconComponent = iconMap[social.icon];
      $$renderer2.push(`<a${attr("href", social.href)} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground transition-colors"${attr("aria-label", social.label)}>`);
      IconComponent($$renderer2, { class: "h-[18px] w-[18px]" });
      $$renderer2.push(`<!----></a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="border-t border-border/40"><div class="container py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"><p>©${escape_html((/* @__PURE__ */ new Date()).getFullYear())}
                ${escape_html(footerContent.brand.name)}/${escape_html(footerContent.brand.suffix)}, ${escape_html(footerContent.bottom.copyrightText)} <span class="text-red-500">❤</span> ${escape_html(footerContent.bottom.tagline)}</p> <div class="flex items-center gap-6"><!--[-->`);
    const each_array_2 = ensure_array_like(footerContent.bottom.links);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let link = each_array_2[$$index_2];
      $$renderer2.push(`<a${attr("href", link.href)} class="hover:text-foreground transition-colors">${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(siteConfig.name)} — ${escape_html(siteConfig.description)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", siteConfig.description)}/> <meta property="og:type" content="website"/> <meta property="og:url"${attr("content", siteConfig.url)}/> <meta property="og:title"${attr("content", siteConfig.name)}/> <meta property="og:description"${attr("content", siteConfig.description)}/> <meta property="og:image"${attr("content", `${stringify(siteConfig.url)}/og.png`)}/> <meta property="twitter:card" content="summary_large_image"/> <meta property="twitter:url"${attr("content", siteConfig.url)}/> <meta property="twitter:title"${attr("content", siteConfig.name)}/> <meta property="twitter:description"${attr("content", siteConfig.description)}/> <meta property="twitter:image"${attr("content", `${stringify(siteConfig.url)}/og.png`)}/> <link rel="canonical"${attr("href", siteConfig.url)}/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&amp;display=swap" rel="stylesheet"/>`);
    });
    $$renderer2.push(`<div class="relative flex min-h-screen flex-col font-sans selection:bg-primary/20 selection:text-primary">`);
    Navbar($$renderer2, {});
    $$renderer2.push(`<!----> <main class="flex-1">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
