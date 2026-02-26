import "clsx";
function FormSubmit($$renderer) {
  $$renderer.push(`<section style="background: var(--smoky-black)"><h1>Thanks Contacting Surendra Dev !!</h1></section>`);
}
function _page($$renderer) {
  $$renderer.push(`<div>`);
  FormSubmit($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
