import{aE as Pe,aC as ze,av as I,r as i,w as ct,i as Q,at as dt,c6 as ft,ar as se,ag as F,aw as oe,aV as We,c7 as mt,bI as Ge,ax as pt,c8 as ve,c9 as gt,a9 as vt,aH as bt,aa as ht,aI as St,aJ as Nt,ac as be,aM as He,ca as Le,cb as It,cc as yt,cd as Et,aY as wt,af as xt,b2 as $t,b4 as Ct,aZ as Rt,b3 as Dt,b8 as he,bi as Be,bj as ke,bC as _t,ce as Ot,cf as Mt,b9 as At}from"./index-b88df3f9.js";function Se(){return typeof BigInt=="function"}function Ue(e){return!e&&e!==0&&!Number.isNaN(e)||!String(e).trim()}function P(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var r=t||"0",a=r.split("."),s=a[0]||"0",v=a[1]||"0";s==="0"&&v==="0"&&(n=!1);var c=n?"-":"";return{negative:n,negativeStr:c,trimStr:r,integerStr:s,decimalStr:v,fullStr:"".concat(c).concat(r)}}function Ne(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function T(e){var t=String(e);if(Ne(e)){var n=Number(t.slice(t.indexOf("e-")+2)),r=t.match(/\.(\d+)/);return r!=null&&r[1]&&(n+=r[1].length),n}return t.includes(".")&&Ie(t)?t.length-t.indexOf(".")-1:0}function le(e){var t=String(e);if(Ne(e)){if(e>Number.MAX_SAFE_INTEGER)return String(Se()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(Se()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(T(t))}return P(t).fullStr}function Ie(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}var Bt=function(){function e(t){if(ze(this,e),I(this,"origin",""),I(this,"negative",void 0),I(this,"integer",void 0),I(this,"decimal",void 0),I(this,"decimalLen",void 0),I(this,"empty",void 0),I(this,"nan",void 0),Ue(t)){this.empty=!0;return}if(this.origin=String(t),t==="-"||Number.isNaN(t)){this.nan=!0;return}var n=t;if(Ne(n)&&(n=Number(n)),n=typeof n=="string"?n:le(n),Ie(n)){var r=P(n);this.negative=r.negative;var a=r.trimStr.split(".");this.integer=BigInt(a[0]);var s=a[1]||"0";this.decimal=BigInt(s),this.decimalLen=s.length}else this.nan=!0}return Pe(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var r="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(r)}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"cal",value:function(n,r,a){var s=Math.max(this.getDecimalStr().length,n.getDecimalStr().length),v=this.alignDecimal(s),c=n.alignDecimal(s),b=r(v,c).toString(),g=a(s),f=P(b),N=f.negativeStr,p=f.trimStr,h="".concat(N).concat(p.padStart(g+1,"0"));return new e("".concat(h.slice(0,-g),".").concat(h.slice(-g)))}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var r=new e(n);return r.isInvalidate()?this:this.cal(r,function(a,s){return a+s},function(a){return a})}},{key:"multi",value:function(n){var r=new e(n);return this.isInvalidate()||r.isInvalidate()?new e(NaN):this.cal(r,function(a,s){return a*s},function(a){return a*2})}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":P("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}(),kt=function(){function e(t){if(ze(this,e),I(this,"origin",""),I(this,"number",void 0),I(this,"empty",void 0),Ue(t)){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return Pe(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var r=Number(n);if(Number.isNaN(r))return this;var a=this.number+r;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var s=Math.max(T(this.number),T(r));return new e(a.toFixed(s))}},{key:"multi",value:function(n){var r=Number(n);if(this.isInvalidate()||Number.isNaN(r))return new e(NaN);var a=this.number*r;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var s=Math.max(T(this.number),T(r));return new e(a.toFixed(s))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":le(this.number):this.origin}}]),e}();function R(e){return Se()?new Bt(e):new kt(e)}function ie(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var a=P(e),s=a.negativeStr,v=a.integerStr,c=a.decimalStr,b="".concat(t).concat(c),g="".concat(s).concat(v);if(n>=0){var f=Number(c[n]);if(f>=5&&!r){var N=R(e).add("".concat(s,"0.").concat("0".repeat(n)).concat(10-f));return ie(N.toString(),t,n,r)}return n===0?g:"".concat(g).concat(t).concat(c.padEnd(n,"0").slice(0,n))}return b===".0"?g:"".concat(g).concat(b)}function Vt(e,t){var n=i.useRef(null);function r(){try{var s=e.selectionStart,v=e.selectionEnd,c=e.value,b=c.substring(0,s),g=c.substring(v);n.current={start:s,end:v,value:c,beforeTxt:b,afterTxt:g}}catch{}}function a(){if(e&&n.current&&t)try{var s=e.value,v=n.current,c=v.beforeTxt,b=v.afterTxt,g=v.start,f=s.length;if(s.endsWith(b))f=s.length-n.current.afterTxt.length;else if(s.startsWith(c))f=c.length;else{var N=c[g-1],p=s.indexOf(N,g-1);p!==-1&&(f=p+1)}e.setSelectionRange(f,f)}catch(h){ct(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(h.message))}}return[r,a]}var Ft=function(){var t=i.useState(!1),n=Q(t,2),r=n[0],a=n[1];return dt(function(){a(ft())},[]),r},jt=200,Tt=600;function Pt(e){var t=e.prefixCls,n=e.upNode,r=e.downNode,a=e.upDisabled,s=e.downDisabled,v=e.onStep,c=i.useRef(),b=i.useRef([]),g=i.useRef();g.current=v;var f=function(){clearTimeout(c.current)},N=function($,E){$.preventDefault(),f(),g.current(E);function A(){g.current(E),c.current=setTimeout(A,jt)}c.current=setTimeout(A,Tt)};i.useEffect(function(){return function(){f(),b.current.forEach(function(u){return se.cancel(u)})}},[]);var p=Ft();if(p)return null;var h="".concat(t,"-handler"),w=F(h,"".concat(h,"-up"),I({},"".concat(h,"-up-disabled"),a)),M=F(h,"".concat(h,"-down"),I({},"".concat(h,"-down-disabled"),s)),y=function(){return b.current.push(se(f))},D={unselectable:"on",role:"button",onMouseUp:y,onMouseLeave:y};return i.createElement("div",{className:"".concat(h,"-wrap")},i.createElement("span",oe({},D,{onMouseDown:function($){N($,!0)},"aria-label":"Increase Value","aria-disabled":a,className:w}),n||i.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),i.createElement("span",oe({},D,{onMouseDown:function($){N($,!1)},"aria-label":"Decrease Value","aria-disabled":s,className:M}),r||i.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}function Ve(e){var t=typeof e=="number"?le(e):P(e).fullStr,n=t.includes(".");return n?P(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}const zt=function(){var e=i.useRef(0),t=function(){se.cancel(e.current)};return i.useEffect(function(){return t},[]),function(n){t(),e.current=se(function(){n()})}};var Wt=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","changeOnBlur"],Gt=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","classes","className","classNames"],Fe=function(t,n){return t||n.isEmpty()?n.toString():n.toNumber()},je=function(t){var n=R(t);return n.isInvalidate()?null:n},Ht=i.forwardRef(function(e,t){var n,r=e.prefixCls,a=r===void 0?"rc-input-number":r,s=e.className,v=e.style,c=e.min,b=e.max,g=e.step,f=g===void 0?1:g,N=e.defaultValue,p=e.value,h=e.disabled,w=e.readOnly,M=e.upHandler,y=e.downHandler,D=e.keyboard,u=e.controls,$=u===void 0?!0:u,E=e.classNames,A=e.stringMode,B=e.parser,x=e.formatter,_=e.precision,k=e.decimalSeparator,j=e.onChange,L=e.onInput,U=e.onPressEnter,q=e.onStep,z=e.changeOnBlur,V=z===void 0?!0:z,ue=We(e,Wt),K="".concat(a,"-input"),W=i.useRef(null),ce=i.useState(!1),ee=Q(ce,2),te=ee[0],ne=ee[1],C=i.useRef(!1),X=i.useRef(!1),re=i.useRef(!1),Ye=i.useState(function(){return R(p??N)}),ye=Q(Ye,2),S=ye[0],Ee=ye[1];function Je(l){p===void 0&&Ee(l)}var de=i.useCallback(function(l,o){if(!o)return _>=0?_:Math.max(T(l),T(f))},[_,f]),fe=i.useCallback(function(l){var o=String(l);if(B)return B(o);var m=o;return k&&(m=m.replace(k,".")),m.replace(/[^\w.-]+/g,"")},[B,k]),me=i.useRef(""),we=i.useCallback(function(l,o){if(x)return x(l,{userTyping:o,input:String(me.current)});var m=typeof l=="number"?le(l):l;if(!o){var d=de(m,o);if(Ie(m)&&(k||d>=0)){var O=k||".";m=ie(m,O,d)}}return m},[x,de,k]),Ze=i.useState(function(){var l=N??p;return S.isInvalidate()&&["string","number"].includes(pt(l))?Number.isNaN(l)?"":l:we(S.toString(),!1)}),xe=Q(Ze,2),Y=xe[0],$e=xe[1];me.current=Y;function J(l,o){$e(we(l.isInvalidate()?l.toString(!1):l.toString(!o),o))}var G=i.useMemo(function(){return je(b)},[b,_]),H=i.useMemo(function(){return je(c)},[c,_]),Ce=i.useMemo(function(){return!G||!S||S.isInvalidate()?!1:G.lessEquals(S)},[G,S]),Re=i.useMemo(function(){return!H||!S||S.isInvalidate()?!1:S.lessEquals(H)},[H,S]),Qe=Vt(W.current,te),De=Q(Qe,2),et=De[0],tt=De[1],_e=function(o){return G&&!o.lessEquals(G)?G:H&&!H.lessEquals(o)?H:null},pe=function(o){return!_e(o)},ae=function(o,m){var d=o,O=pe(d)||d.isEmpty();if(!d.isEmpty()&&!m&&(d=_e(d)||d,O=!0),!w&&!h&&O){var Z=d.toString(),ge=de(Z,m);return ge>=0&&(d=R(ie(Z,".",ge)),pe(d)||(d=R(ie(Z,".",ge,!0)))),d.equals(S)||(Je(d),j==null||j(d.isEmpty()?null:Fe(A,d)),p===void 0&&J(d,m)),d}return S},nt=zt(),Oe=function l(o){if(et(),me.current=o,$e(o),!X.current){var m=fe(o),d=R(m);d.isNaN()||ae(d,!0)}L==null||L(o),nt(function(){var O=o;B||(O=o.replace(/。/g,".")),O!==o&&l(O)})},rt=function(){X.current=!0},at=function(){X.current=!1,Oe(W.current.value)},it=function(o){Oe(o.target.value)},Me=function(o){var m;if(!(o&&Ce||!o&&Re)){C.current=!1;var d=R(re.current?Ve(f):f);o||(d=d.negate());var O=(S||R(0)).add(d.toString()),Z=ae(O,!1);q==null||q(Fe(A,Z),{offset:re.current?Ve(f):f,type:o?"up":"down"}),(m=W.current)===null||m===void 0||m.focus()}},Ae=function(o){var m=R(fe(Y)),d=m;m.isNaN()?d=ae(S,o):d=ae(m,o),p!==void 0?J(S,!1):d.isNaN()||J(d,!1)},st=function(){C.current=!0},ot=function(o){var m=o.key,d=o.shiftKey;C.current=!0,re.current=d,m==="Enter"&&(X.current||(C.current=!1),Ae(!1),U==null||U(o)),D!==!1&&!X.current&&["Up","ArrowUp","Down","ArrowDown"].includes(m)&&(Me(m==="Up"||m==="ArrowUp"),o.preventDefault())},lt=function(){C.current=!1,re.current=!1},ut=function(){V&&Ae(!1),ne(!1),C.current=!1};return ve(function(){S.isInvalidate()||J(S,!1)},[_,x]),ve(function(){var l=R(p);Ee(l);var o=R(fe(Y));(!l.equals(o)||!C.current||x)&&J(l,C.current)},[p]),ve(function(){x&&tt()},[Y]),i.createElement("div",{className:F(a,E==null?void 0:E.input,s,(n={},I(n,"".concat(a,"-focused"),te),I(n,"".concat(a,"-disabled"),h),I(n,"".concat(a,"-readonly"),w),I(n,"".concat(a,"-not-a-number"),S.isNaN()),I(n,"".concat(a,"-out-of-range"),!S.isInvalidate()&&!pe(S)),n)),style:v,onFocus:function(){ne(!0)},onBlur:ut,onKeyDown:ot,onKeyUp:lt,onCompositionStart:rt,onCompositionEnd:at,onBeforeInput:st},$&&i.createElement(Pt,{prefixCls:a,upNode:M,downNode:y,upDisabled:Ce,downDisabled:Re,onStep:Me}),i.createElement("div",{className:"".concat(K,"-wrap")},i.createElement("input",oe({autoComplete:"off",role:"spinbutton","aria-valuemin":c,"aria-valuemax":b,"aria-valuenow":S.isInvalidate()?null:S.toString(),step:f},ue,{ref:Ge(W,t),className:K,value:Y,onChange:it,disabled:h,readOnly:w}))))}),qe=i.forwardRef(function(e,t){var n=e.disabled,r=e.style,a=e.prefixCls,s=e.value,v=e.prefix,c=e.suffix,b=e.addonBefore,g=e.addonAfter,f=e.classes,N=e.className,p=e.classNames,h=We(e,Gt),w=i.useRef(null),M=function(D){w.current&&gt(w.current,D)};return i.createElement(mt,{inputElement:i.createElement(Ht,oe({prefixCls:a,disabled:n,classNames:p,ref:Ge(w,t)},h)),className:N,triggerFocus:M,prefixCls:a,value:s,disabled:n,style:r,prefix:v,suffix:c,addonAfter:g,addonBefore:b,classes:f,classNames:p,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"}})});qe.displayName="InputNumber";const Te=(e,t)=>{let{componentCls:n,borderRadiusSM:r,borderRadiusLG:a}=e;const s=t==="lg"?a:r;return{[`&-${t}`]:{[`${n}-handler-wrap`]:{borderStartEndRadius:s,borderEndEndRadius:s},[`${n}-handler-up`]:{borderStartEndRadius:s},[`${n}-handler-down`]:{borderEndEndRadius:s}}}},Lt=e=>{const{componentCls:t,lineWidth:n,lineType:r,colorBorder:a,borderRadius:s,fontSizeLG:v,controlHeightLG:c,controlHeightSM:b,colorError:g,paddingInlineSM:f,colorTextDescription:N,motionDurationMid:p,handleHoverColor:h,paddingInline:w,paddingBlock:M,handleBg:y,handleActiveBg:D,colorTextDisabled:u,borderRadiusSM:$,borderRadiusLG:E,controlWidth:A,handleVisible:B,handleBorderColor:x}=e;return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},be(e)),He(e)),Le(e,t)),{display:"inline-block",width:A,margin:0,padding:0,border:`${n}px ${r} ${a}`,borderRadius:s,"&-rtl":{direction:"rtl",[`${t}-input`]:{direction:"rtl"}},"&-lg":{padding:0,fontSize:v,borderRadius:E,[`input${t}-input`]:{height:c-2*n}},"&-sm":{padding:0,borderRadius:$,[`input${t}-input`]:{height:b-2*n,padding:`0 ${f}px`}},"&-out-of-range":{[`${t}-input-wrap`]:{input:{color:g}}},"&-group":Object.assign(Object.assign(Object.assign({},be(e)),It(e)),{"&-wrapper":{display:"inline-block",textAlign:"start",verticalAlign:"top",[`${t}-affix-wrapper`]:{width:"100%"},"&-lg":{[`${t}-group-addon`]:{borderRadius:E,fontSize:e.fontSizeLG}},"&-sm":{[`${t}-group-addon`]:{borderRadius:$}},[`${t}-wrapper-disabled > ${t}-group-addon`]:Object.assign({},yt(e))}}),[`&-disabled ${t}-input`]:{cursor:"not-allowed"},[t]:{"&-input":Object.assign(Object.assign(Object.assign(Object.assign({},be(e)),{width:"100%",padding:`${M}px ${w}px`,textAlign:"start",backgroundColor:"transparent",border:0,borderRadius:s,outline:0,transition:`all ${p} linear`,appearance:"textfield",fontSize:"inherit"}),Et(e.colorTextPlaceholder)),{'&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':{margin:0,webkitAppearance:"none",appearance:"none"}})}})},{[t]:Object.assign(Object.assign(Object.assign({[`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]:{opacity:1},[`${t}-handler-wrap`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,width:e.handleWidth,height:"100%",background:y,borderStartStartRadius:0,borderStartEndRadius:s,borderEndEndRadius:s,borderEndStartRadius:0,opacity:B===!0?1:0,display:"flex",flexDirection:"column",alignItems:"stretch",transition:`opacity ${p} linear ${p}`,[`${t}-handler`]:{display:"flex",alignItems:"center",justifyContent:"center",flex:"auto",height:"40%",[`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]:{marginInlineEnd:0,fontSize:e.handleFontSize}}},[`${t}-handler`]:{height:"50%",overflow:"hidden",color:N,fontWeight:"bold",lineHeight:0,textAlign:"center",cursor:"pointer",borderInlineStart:`${n}px ${r} ${x}`,transition:`all ${p} linear`,"&:active":{background:D},"&:hover":{height:"60%",[`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]:{color:h}},"&-up-inner, &-down-inner":Object.assign(Object.assign({},wt()),{color:N,transition:`all ${p} linear`,userSelect:"none"})},[`${t}-handler-up`]:{borderStartEndRadius:s},[`${t}-handler-down`]:{borderBlockStart:`${n}px ${r} ${x}`,borderEndEndRadius:s}},Te(e,"lg")),Te(e,"sm")),{"&-disabled, &-readonly":{[`${t}-handler-wrap`]:{display:"none"},[`${t}-input`]:{color:"inherit"}},[`
          ${t}-handler-up-disabled,
          ${t}-handler-down-disabled
        `]:{cursor:"not-allowed"},[`
          ${t}-handler-up-disabled:hover &-handler-up-inner,
          ${t}-handler-down-disabled:hover &-handler-down-inner
        `]:{color:u}})},{[`${t}-borderless`]:{borderColor:"transparent",boxShadow:"none",[`${t}-handler-down`]:{borderBlockStartWidth:0}}}]},Ut=e=>{const{componentCls:t,paddingBlock:n,paddingInline:r,inputAffixPadding:a,controlWidth:s,borderRadiusLG:v,borderRadiusSM:c}=e;return{[`${t}-affix-wrapper`]:Object.assign(Object.assign(Object.assign({},He(e)),Le(e,`${t}-affix-wrapper`)),{position:"relative",display:"inline-flex",width:s,padding:0,paddingInlineStart:r,"&-lg":{borderRadius:v},"&-sm":{borderRadius:c},[`&:not(${t}-affix-wrapper-disabled):hover`]:{zIndex:1},"&-focused, &:focus":{zIndex:1},[`&-disabled > ${t}-disabled`]:{background:"transparent"},[`> div${t}`]:{width:"100%",border:"none",outline:"none",[`&${t}-focused`]:{boxShadow:"none !important"}},[`input${t}-input`]:{padding:`${n}px 0`},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${t}-handler-wrap`]:{zIndex:2},[t]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center",pointerEvents:"none"},"&-prefix":{marginInlineEnd:a},"&-suffix":{position:"absolute",insetBlockStart:0,insetInlineEnd:0,zIndex:1,height:"100%",marginInlineEnd:r,marginInlineStart:a}}})}},qt=vt("InputNumber",e=>{const t=ht(e,St(e));return[Lt(t),Ut(t),Nt(t)]},e=>Object.assign(Object.assign({},bt(e)),{controlWidth:90,handleWidth:e.controlHeightSM-e.lineWidth*2,handleFontSize:e.fontSize/2,handleVisible:"auto",handleActiveBg:e.colorFillAlter,handleBg:e.colorBgContainer,handleHoverColor:e.colorPrimary,handleBorderColor:e.colorBorder}));var Kt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ke=i.forwardRef((e,t)=>{const{getPrefixCls:n,direction:r}=i.useContext(xt),a=i.useRef(null);i.useImperativeHandle(t,()=>a.current);const{className:s,rootClassName:v,size:c,disabled:b,prefixCls:g,addonBefore:f,addonAfter:N,prefix:p,bordered:h=!0,readOnly:w,status:M,controls:y}=e,D=Kt(e,["className","rootClassName","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),u=n("input-number",g),[$,E]=qt(u),{compactSize:A,compactItemClassnames:B}=$t(u,r);let x=i.createElement(Ot,{className:`${u}-handler-up-inner`}),_=i.createElement(Mt,{className:`${u}-handler-down-inner`});const k=typeof y=="boolean"?y:void 0;typeof y=="object"&&(x=typeof y.upIcon>"u"?x:i.createElement("span",{className:`${u}-handler-up-inner`},y.upIcon),_=typeof y.downIcon>"u"?_:i.createElement("span",{className:`${u}-handler-down-inner`},y.downIcon));const{hasFeedback:j,status:L,isFormItemInput:U,feedbackIcon:q}=i.useContext(Ct),z=At(L,M),V=Rt(ne=>{var C;return(C=c??A)!==null&&C!==void 0?C:ne}),ue=i.useContext(Dt),K=b??ue,W=F({[`${u}-lg`]:V==="large",[`${u}-sm`]:V==="small",[`${u}-rtl`]:r==="rtl",[`${u}-borderless`]:!h,[`${u}-in-form-item`]:U},he(u,z),E),ce=`${u}-group`,ee=j&&i.createElement(i.Fragment,null,q),te=i.createElement(qe,Object.assign({ref:a,disabled:K,className:F(s,v,B),upHandler:x,downHandler:_,prefixCls:u,readOnly:w,controls:k,prefix:p,suffix:ee,addonAfter:N&&i.createElement(Be,null,i.createElement(ke,{override:!0,status:!0},N)),addonBefore:f&&i.createElement(Be,null,i.createElement(ke,{override:!0,status:!0},f)),classNames:{input:W},classes:{affixWrapper:F(he(`${u}-affix-wrapper`,z,j),{[`${u}-affix-wrapper-sm`]:V==="small",[`${u}-affix-wrapper-lg`]:V==="large",[`${u}-affix-wrapper-rtl`]:r==="rtl",[`${u}-affix-wrapper-borderless`]:!h},E),wrapper:F({[`${ce}-rtl`]:r==="rtl",[`${u}-wrapper-disabled`]:K},E),group:F({[`${u}-group-wrapper-sm`]:V==="small",[`${u}-group-wrapper-lg`]:V==="large",[`${u}-group-wrapper-rtl`]:r==="rtl"},he(`${u}-group-wrapper`,z,j),E)}},D));return $(te)}),Xe=Ke,Xt=e=>i.createElement(_t,{theme:{components:{InputNumber:{handleVisible:!0}}}},i.createElement(Ke,Object.assign({},e)));Xe._InternalPanelDoNotUseOrYouWillBeFired=Xt;const Jt=Xe;export{Jt as _};
