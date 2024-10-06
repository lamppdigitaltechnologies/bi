(()=>{var e={6942:(e,s)=>{var t;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e="",s=0;s<arguments.length;s++){var t=arguments[s];t&&(e=r(e,n(t)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var t in e)l.call(e,t)&&e[t]&&(s=r(s,t));return s}function r(e,s){return s?e?e+" "+s:e+s:e}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(s,[]))||(e.exports=t)}()}},s={};function t(l){var a=s[l];if(void 0!==a)return a.exports;var n=s[l]={exports:{}};return e[l](n,n.exports,t),n.exports}t.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},t.d=(e,s)=>{for(var l in s)t.o(s,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:s[l]})},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};t.r(e),t.d(e,{metadata:()=>_,name:()=>k,settings:()=>y});const s=window.wp.blocks,l=window.wp.primitives,a=window.ReactJSXRuntime,n=(0,a.jsx)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(l.Path,{fillRule:"evenodd",d:"M6 5.5h12a.5.5 0 01.5.5v7H14a2 2 0 11-4 0H5.5V6a.5.5 0 01.5-.5zm-.5 9V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-3.5h-3.337a3.5 3.5 0 01-6.326 0H5.5zM4 13V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z",clipRule:"evenodd"})});var r=t(6942),i=t.n(r);const o=window.wp.apiFetch;var c=t.n(o);const p=window.wp.i18n,d=window.wp.element,u=window.wp.components,h=window.wp.blockEditor,w=window.wp.data,m=e=>"newspack-newsletters-list-checkbox-"+e,b=newspack_newsletters_blocks.settings_url,g=[{label:(0,p.__)("Initial","newspack-newsletters"),value:"initial"},{label:(0,p.__)("Success","newspack-newsletters"),value:"success"}];function x(e){let s="";if(e){const t=(0,w.select)("core/editor").getEditorSettings(),l=(0,h.getColorObjectByColorValue)(t.colors,e);l&&(s=l.slug)}return s}const _=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"newspack-newsletters/subscribe","title":"Newsletter Subscription Form","category":"newspack","description":"Subscribe an email to a newsletter list.","textdomain":"newspack-newsletters","attributes":{"displayInputLabels":{"type":"boolean","default":false},"placeholder":{"type":"string","default":"Email Address"},"emailLabel":{"type":"string","default":"Email Address"},"displayNameField":{"type":"boolean","default":false},"displayLastNameField":{"type":"boolean","default":false},"namePlaceholder":{"type":"string","default":"Name"},"nameLabel":{"type":"string","default":"Name"},"lastNamePlaceholder":{"type":"string","default":"Last Name"},"lastNameLabel":{"type":"string","default":"Last Name"},"label":{"type":"string","default":"Sign up"},"displayDescription":{"type":"boolean","default":true},"lists":{"type":"array","default":[],"items":{"type":"string"}},"listsCheckboxes":{"type":"object","default":{}},"mailchimpDoubleOptIn":{"type":"boolean","default":false},"successMessage":{"type":"string","default":"Thank you for signing up!"},"className":{"type":"string"},"textColor":{"type":"string","default":"#ffffff"},"textColorName":{"type":"string","default":""},"backgroundColor":{"type":"string","default":"#dd3333"},"backgroundColorName":{"type":"string","default":""}},"supports":{"html":false,"align":true},"styles":[{"name":"modern","label":"Modern"}]}'),{name:k}=_,y={icon:{src:n,foreground:"#36f"},edit:function({setAttributes:e,attributes:{displayInputLabels:s,placeholder:t,emailLabel:l,displayNameField:n,displayLastNameField:r,namePlaceholder:o,nameLabel:w,lastNamePlaceholder:_,lastNameLabel:k,label:y,successMessage:f,lists:j,listsCheckboxes:v,displayDescription:C,mailchimpDoubleOptIn:N,textColor:S,backgroundColor:P}}){const L=(0,h.useBlockProps)(),[T,O]=(0,d.useState)(g[0].value),[D,A]=(0,d.useState)(!1),[B,F]=(0,d.useState)({}),[M,E]=(0,d.useState)(!1),[I,R]=(0,d.useState)(!1);(0,d.useEffect)((()=>{A(!0),c()({path:"/newspack-newsletters/v1/lists_config"}).then(F).finally((()=>{E(!0),A(!1)}))}),[]);const H=()=>j.some((e=>!B.hasOwnProperty(e)));(0,d.useEffect)((()=>{M&&(j.length?!I&&H()&&(R(!0),e({lists:j.filter((e=>B.hasOwnProperty(e)))})):e({lists:[Object.keys(B)[0]]}))}),[M]),(0,d.useEffect)((()=>{j.length&&I&&!H()&&R(!1)}),[j]);const V=e=>!v.hasOwnProperty(e)||v[e],z=s=>()=>{const t={...v};t[s]=!V(s),e({listsCheckboxes:t})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(h.InspectorControls,{children:[(0,a.jsxs)(u.PanelBody,{title:(0,p.__)("Form settings","newspack-newsletters"),children:[(0,a.jsx)(u.ToggleControl,{label:(0,p.__)("Display input labels","newspack-newsletters"),checked:s,onChange:s=>e({displayInputLabels:s})}),(0,a.jsx)(u.TextControl,{label:(0,p.__)("Email placeholder","newspack-newsletters"),value:t,onChange:s=>e({placeholder:s})}),(0,a.jsx)(u.ToggleControl,{label:(0,p.__)("Display name field","newspack-newsletters"),checked:n,onChange:s=>e({displayNameField:s})}),n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.TextControl,{label:(0,p.__)("Name placeholder","newspack-newsletters"),value:o,onChange:s=>e({namePlaceholder:s})}),(0,a.jsx)(u.ToggleControl,{label:(0,p.__)('Display "Last Name" field',"newspack-newsletters"),checked:r,onChange:s=>e({displayLastNameField:s})}),r&&(0,a.jsx)(u.TextControl,{label:(0,p.__)('"Last Name" placeholder',"newspack-newsletters"),value:_,onChange:s=>e({lastNamePlaceholder:s})})]}),j.length>1&&(0,a.jsx)(u.ToggleControl,{label:(0,p.__)("Display list description","newspack-newsletters"),checked:C,onChange:()=>e({displayDescription:!C})})]}),(0,a.jsxs)(u.PanelBody,{title:(0,p.__)("Styles","newspack-newsletters"),className:"styles-container",children:[(0,a.jsx)("p",{children:(0,p.__)("Make sure to pick a color that will contrast against the rest of your site's color scheme, to help this block stand out!","newspack-newsletters")}),(0,a.jsx)(h.PanelColorSettings,{initialOpen:!0,colorSettings:[{value:S,onChange:s=>{e({textColorName:x(s)}),e({textColor:s})},label:(0,p.__)("Text color","newspack-newsletters")},{value:P,onChange:s=>{e({backgroundColorName:x(s)}),e({backgroundColor:s})},label:(0,p.__)("Background color","newspack-newsletters")}]})]}),(0,a.jsxs)(u.PanelBody,{title:(0,p.__)("Subscription Lists","newspack-newsletters"),children:[D&&(0,a.jsx)(u.Spinner,{}),!D&&!Object.keys(B).length&&(0,a.jsx)("div",{style:{marginBottom:"1.5rem"},children:(0,a.jsx)(u.Notice,{isDismissible:!1,status:"error",children:(0,p.__)("You must enable lists for subscription.","newspack-newsletters")})}),j.length<1&&(0,a.jsx)("div",{style:{marginBottom:"1.5rem"},children:(0,a.jsx)(u.Notice,{isDismissible:!1,status:"error",children:(0,p.__)("You must select at least one list.","newspack-newsletters")})}),Object.keys(B).map((s=>(0,a.jsx)(u.ToggleControl,{label:B[s].title,checked:j.includes(s),onChange:()=>{j.includes(s)?e({lists:j.filter((e=>e!==s))}):e({lists:j.concat(s)})}},s))),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:b,children:(0,p.__)("Manage your subscription lists","newspack-newsletters")})})]}),"mailchimp"===newspack_newsletters_blocks.provider&&(0,a.jsx)(u.PanelBody,{title:(0,p.__)("Mailchimp Settings","newspack-newsletters"),children:(0,a.jsx)(u.CheckboxControl,{label:(0,p.__)("Enable double opt-in","newspack-newsletters"),help:(0,p.__)('Whether the new contact will have its status as "pending" until email confirmation',"newspack-newsletters"),checked:N,onChange:s=>e({mailchimpDoubleOptIn:s})})}),newspack_newsletters_blocks.supports_recaptcha&&(0,a.jsxs)(u.PanelBody,{title:(0,p.__)("Spam protection","newspack-newsletters"),children:[(0,a.jsx)("p",{children:(0,p.sprintf)(
// translators: %s is either 'enabled' or 'disabled'.
// translators: %s is either 'enabled' or 'disabled'.
(0,p.__)("reCAPTCHA is currently %s.","newspack-newsletters"),newspack_newsletters_blocks.has_recaptcha?(0,p.__)("enabled","newspack-newsletters"):(0,p.__)("disabled","newspack-newsletters"))}),!newspack_newsletters_blocks.has_recaptcha&&(0,a.jsx)("p",{children:(0,p.__)("It's highly recommended that you enable reCAPTCHA protection to prevent spambots from using this form!","newspack-newsletters")}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:newspack_newsletters_blocks.recaptcha_url,children:(0,p.__)("Configure your reCAPTCHA settings.","newspack-newsletters")})})]})]}),(0,a.jsxs)("div",{...L,children:[(0,a.jsxs)("div",{className:"newspack-newsletters-subscribe__state-bar",children:[(0,a.jsx)("span",{children:(0,p.__)("Edited State","newspack-newsletters")}),(0,a.jsx)("div",{children:g.map((e=>(0,a.jsx)(u.Button,{"data-is-active":T===e.value,onClick:()=>O(e.value),children:e.label},e.value)))})]}),M?(0,a.jsxs)("div",{className:i()({"newspack-newsletters-subscribe":!0,"multiple-lists":j.length>1}),"data-status":"200",children:["initial"===T&&(0,a.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[I&&(0,a.jsx)(u.Notice,{isDismissible:!1,status:"error",children:(0,p.__)("A previously selected list is no longer available. Please, revise the subscription lists selection.","newspack-newsletters")}),j.length>1&&(0,a.jsx)("div",{className:"newspack-newsletters-lists",children:(0,a.jsx)("ul",{children:j.map((e=>(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"list-checkbox",children:(0,a.jsx)("input",{id:m(e),type:"checkbox",checked:V(e),onChange:z(e)})}),(0,a.jsx)("span",{className:"list-details",children:(0,a.jsxs)("label",{htmlFor:m(e),children:[(0,a.jsx)("span",{className:"list-title",children:B[e]?.title}),C&&(0,a.jsx)("span",{className:"list-description",children:B[e]?.description})]})})]},e)))})}),n&&(0,a.jsxs)("div",{className:"newspack-newsletters-name-input",children:[(0,a.jsxs)("div",{className:"newspack-newsletters-name-input-item",children:[(0,a.jsx)("label",{children:s&&(0,a.jsx)(h.RichText,{onChange:s=>e({nameLabel:s}),placeholder:(0,p.__)("Name","newspack-newsletters"),value:w,tagName:"span"})}),(0,a.jsx)("input",{type:"text",placeholder:o})]}),r&&(0,a.jsxs)("div",{className:"newspack-newsletters-name-input-item",children:[(0,a.jsx)("label",{children:s&&(0,a.jsx)(h.RichText,{onChange:s=>e({lastNameLabel:s}),placeholder:(0,p.__)("Last Name","newspack-newsletters"),value:k,tagName:"span"})}),(0,a.jsx)("input",{type:"text",placeholder:_})]})]}),(0,a.jsxs)("div",{className:"newspack-newsletters-email-input",children:[(0,a.jsx)("label",{children:s&&(0,a.jsx)(h.RichText,{onChange:s=>e({emailLabel:s}),placeholder:(0,p.__)("Email Address","newspack-newsletters"),value:l,tagName:"span"})}),(0,a.jsx)("input",{type:"email",placeholder:t}),(0,a.jsx)("div",{className:"submit-button",style:{backgroundColor:P,color:S},children:(0,a.jsx)(h.RichText,{onChange:s=>e({label:s}),placeholder:(0,p.__)("Sign up","newspack-newsletters"),value:y,tagName:"span"})})]})]}),"success"===T&&(0,a.jsxs)("div",{className:"newspack-newsletters-subscribe__response",children:[(0,a.jsx)("div",{className:"newspack-newsletters-subscribe__icon"}),(0,a.jsx)("div",{className:"newspack-newsletters-subscribe__message",children:(0,a.jsx)(h.RichText,{onChange:s=>e({successMessage:s}),placeholder:(0,p.__)("Success message","newspack-newsletters"),value:f,tagName:"p",className:"message status-200",allowedFormats:["core/bold","core/italic"]})})]})]}):(0,a.jsx)(u.Spinner,{})]})]})}},f=[e],j=e=>{if(!e)return;const{metadata:t,settings:l,name:a}=e;(0,s.registerBlockType)({name:a,...t},l)};for(const e of f)j(e)})()})();