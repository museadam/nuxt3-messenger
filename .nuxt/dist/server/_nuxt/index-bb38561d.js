import { defineComponent, useSSRContext, mergeProps, unref, ref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { m as messages, c as currentUser, a as message } from "./store-d92ce372.js";
import "hookable";
import { a as useNuxtApp, b as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { onBeforeRouteLeave } from "vue-router";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "h3";
import "ufo";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ConnectUserDisplay",
  __ssrInlineRender: true,
  props: {
    connectUsers: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (_ctx.connectUsers) {
        _push(`<div rounded="xl" class="pa-1" outlined="black" color="light-blue"><!--[-->`);
        ssrRenderList(_ctx.connectUsers, (user) => {
          _push(`<h3>${ssrInterpolate(user.name)} is Connected </h3>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConnectUserDisplay.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Message",
  __ssrInlineRender: true,
  props: {
    msg: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div><div><p class="text-xs">${ssrInterpolate(_ctx.msg.date)}</p></div></div><div><p>${ssrInterpolate(_ctx.msg.text)}</p></div><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Message.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Messages",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Message = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "card",
        class: "mb-1 mx-1"
      }, _attrs))}><div><!--[-->`);
      ssrRenderList(unref(messages), (msg2, index) => {
        _push(`<div><div>`);
        if (msg2.from !== unref(currentUser).id) {
          _push(`<div align="end" rounded="xl" class="pa-2 px-4 rounded-br-0 m-1" bg="green" outline="black" text-light>`);
          _push(ssrRenderComponent(_component_Message, { msg: msg2 }, null, _parent));
          _push(`</div>`);
        } else if (msg2.from === unref(currentUser).id) {
          _push(`<div rounded="xl" align="start" class="pa-3 px-4 rounded-bl-0 m-1 outline-black" bg="light-blue" text-light>`);
          _push(ssrRenderComponent(_component_Message, { msg: msg2 }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Messages.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const InputMessage_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "InputMessage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><form class="flex"><input${ssrRenderAttr("value", unref(message))} class="px-2 m-1 p-3 rounded" label="Create a message"><button> Send </button></form></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InputMessage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
function useSocket() {
  const { $socket } = useNuxtApp();
  return $socket;
}
const onSendMessage = async (message2) => {
  const data = {
    message: msg,
    room: room.value
  };
  socket.emit("send:private-chat", data);
  return ret;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChatRoom",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    console.log(route.params.room);
    const socket2 = useSocket();
    ref(false);
    const roomStr = route.params.room.toString();
    let room2 = ref(roomStr);
    let connectUsers = ref();
    const user = currentUser;
    onBeforeRouteLeave(() => {
      socket2.emit("leave-room", room2.value, user);
    });
    const send = async () => {
      console.log("sending");
      const from = currentUser.id;
      const date = (/* @__PURE__ */ new Date()).toDateString();
      ({ id: `${messages.value.length + 1}`, room: room2.value, text: message.value, from, date });
      await onSendMessage();
      console.log("sent");
      message.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConnectUserDisplay = _sfc_main$5;
      const _component_Messages = _sfc_main$3;
      const _component_InputMessage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}><div class="flex flex-col w-80%"><div>`);
      _push(ssrRenderComponent(_component_ConnectUserDisplay, { "connect-users": unref(connectUsers) }, null, _parent));
      _push(`</div><div class="contained m-3 outline rounded-lg p-2 outline-black">`);
      _push(ssrRenderComponent(_component_Messages, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_InputMessage, { onSend: send }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const ChatRoom_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChatRoom.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$1), _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rooms/[room]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-bb38561d.js.map
