import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { c as currentUser } from './store-d92ce372.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SignUp",
  __ssrInlineRender: true,
  setup(__props) {
    let email;
    let lName;
    let fName;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="login" id="login"><div class="head"><h1 class="company">Sign Up</h1></div><p class="msg">Create Your Login</p><div class="form"><form><input type="text" placeholder="First name" class="text" id="firstName" required${ssrRenderAttr("value", unref(fName))}><br><input type="text" placeholder="Last name" class="text" id="lastName" required${ssrRenderAttr("value", unref(lName))}><br><input type="text" placeholder="Email" class="text" id="email" required${ssrRenderAttr("value", unref(email))}><br><button class="btn-login mt-3" id="do-login">Submit</button></form></div></section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const rooms = [
      "cia",
      "fbi",
      "nsa"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SignUp = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}><div class="flex flex-col w-80%">`);
      if (unref(currentUser).id) {
        _push(`<div><!--[-->`);
        ssrRenderList(rooms, (room) => {
          _push(`<div><button>${ssrInterpolate(room)}</button></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SignUp, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-799d0381.mjs.map
