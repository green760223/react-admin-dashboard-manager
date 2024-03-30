import{r as n,_ as K,ap as ce,aW as Ot,aV as gt,w as Ye,av as Kt,an as Vt,i as ue,aq as Oe,aw as St,ay as dt,ax as $t,a9 as Ht,aa as Ct,cg as At,af as Rt,b2 as Wt,ag as ft,b4 as Ft,a$ as jt,aZ as zt,b3 as Bt,b8 as Ut,b6 as Gt,aj as vt,b9 as Xt}from"./index-45b240b9.js";import{u as Yt,a as Zt,B as qt,b as Jt,c as Qt,d as er,D as tr,e as rr}from"./index-396db746.js";import{e as Je,f as nr,h as ar,i as lr,j as or,k as ir,S as cr}from"./Table-657745e7.js";const ur=function(e){var t=n.useRef({valueLabels:new Map});return n.useMemo(function(){var a=t.current.valueLabels,l=new Map,r=e.map(function(c){var o,u=c.value,i=(o=c.label)!==null&&o!==void 0?o:a.get(u);return l.set(u,i),K(K({},c),{},{label:i})});return t.current.valueLabels=l,[r]},[e])},sr=function(e,t,a,l){return n.useMemo(function(){var r=e.map(function(i){var d=i.value;return d}),c=t.map(function(i){var d=i.value;return d}),o=r.filter(function(i){return!l[i]});if(a){var u=Je(r,!0,l);r=u.checkedKeys,c=u.halfCheckedKeys}return[Array.from(new Set([].concat(ce(o),ce(r)))),c]},[e,t,a,l])};function dr(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function fr(e){var t=e||{},a=t.label,l=t.value,r=t.children,c=l||"value";return{_title:a?[a]:["title","label"],value:c,key:c,children:r||"children"}}function Qe(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function vr(e,t){var a=[];function l(r){r.forEach(function(c){var o=c[t.children];o&&(a.push(c[t.value]),l(o))})}return l(e),a}function ht(e){return e==null}const hr=function(e,t){return n.useMemo(function(){var a=nr(e,{fieldNames:t,initWrapper:function(r){return K(K({},r),{},{valueEntities:new Map})},processEntity:function(r,c){var o=r.node[t.value];c.valueEntities.set(o,r)}});return a},[e,t])};var tt=function(){return null},pr=["children","value"];function yt(e){return Ot(e).map(function(t){if(!n.isValidElement(t)||!t.type)return null;var a=t,l=a.key,r=a.props,c=r.children,o=r.value,u=gt(r,pr),i=K({key:l,value:o},u),d=yt(c);return d.length&&(i.children=d),i}).filter(function(t){return t})}function et(e){if(!e)return e;var t=K({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return Ye(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),t}}),t}function mr(e,t,a,l,r,c){var o=null,u=null;function i(){function d(s){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return s.map(function(y,L){var E="".concat(N,"-").concat(L),P=y[c.value],V=a.includes(P),G=d(y[c.children]||[],E,V),F=n.createElement(tt,y,G.map(function(T){return T.node}));if(t===P&&(o=F),V){var m={pos:E,node:F,children:G};return I||u.push(m),m}return null}).filter(function(y){return y})}u||(u=[],d(l),u.sort(function(s,N){var I=s.node.props.value,y=N.node.props.value,L=a.indexOf(I),E=a.indexOf(y);return L-E}))}Object.defineProperty(e,"triggerNode",{get:function(){return Ye(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),i(),o}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return Ye(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),i(),r?u:u.map(function(s){var N=s.node;return N})}})}const gr=function(e,t,a){var l=a.treeNodeFilterProp,r=a.filterTreeNode,c=a.fieldNames,o=c.children;return n.useMemo(function(){if(!t||r===!1)return e;var u;if(typeof r=="function")u=r;else{var i=t.toUpperCase();u=function(N,I){var y=I[l];return String(y).toUpperCase().includes(i)}}function d(s){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return s.reduce(function(I,y){var L=y[o],E=N||u(t,et(y)),P=d(L||[],E);return(E||P.length)&&I.push(K(K({},y),{},Kt({isLeaf:void 0},o,P))),I},[])}return d(e)},[e,t,o,l,r])};function pt(e){var t=n.useRef();t.current=e;var a=n.useCallback(function(){return t.current.apply(t,arguments)},[]);return a}function Sr(e,t){var a=t.id,l=t.pId,r=t.rootPId,c={},o=[],u=e.map(function(i){var d=K({},i),s=d[a];return c[s]=d,d.key=d.key||s,d});return u.forEach(function(i){var d=i[l],s=c[d];s&&(s.children=s.children||[],s.children.push(i)),(d===r||!s&&r===null)&&o.push(i)}),o}function Cr(e,t,a){return n.useMemo(function(){return e?a?Sr(e,K({id:"id",pId:"pId",rootPId:null},a!==!0?a:{})):e:yt(t)},[t,a,e])}var bt=n.createContext(null),xt=n.createContext(null),yr={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},br=function(t,a){var l=Yt(),r=l.prefixCls,c=l.multiple,o=l.searchValue,u=l.toggleOpen,i=l.open,d=l.notFoundContent,s=n.useContext(xt),N=s.virtual,I=s.listHeight,y=s.listItemHeight,L=s.listItemScrollOffset,E=s.treeData,P=s.fieldNames,V=s.onSelect,G=s.dropdownMatchSelectWidth,F=s.treeExpandAction,m=n.useContext(bt),T=m.checkable,k=m.checkedKeys,be=m.halfCheckedKeys,J=m.treeExpandedKeys,Ke=m.treeDefaultExpandAll,Ve=m.treeDefaultExpandedKeys,xe=m.onTreeExpand,Q=m.treeIcon,se=m.showTreeIcon,$=m.switcherIcon,we=m.treeLine,X=m.treeNodeFilterProp,ee=m.loadData,H=m.treeLoadedKeys,Ie=m.treeMotion,Ee=m.onTreeLoad,ke=m.keyEntities,j=n.useRef(),x=Vt(function(){return E},[i,E],function(b,f){return f[0]&&b[1]!==f[1]}),de=n.useState(null),z=ue(de,2),te=z[0],re=z[1],A=ke[te],ne=n.useMemo(function(){return T?{checked:k,halfChecked:be}:null},[T,k,be]);n.useEffect(function(){if(i&&!c&&k.length){var b;(b=j.current)===null||b===void 0||b.scrollTo({key:k[0]}),re(k[0])}},[i]);var fe=String(o).toLowerCase(),Ne=function(f){return fe?String(f[X]).toLowerCase().includes(fe):!1},ve=n.useState(Ve),he=ue(ve,2),pe=he[0],$e=he[1],Te=n.useState(null),Y=ue(Te,2),Z=Y[0],me=Y[1],O=n.useMemo(function(){return J?ce(J):o?Z:pe},[pe,Z,J,o]);n.useEffect(function(){o&&me(vr(E,P))},[o]);var He=function(f){$e(f),me(f),xe&&xe(f)},ge=function(f){f.preventDefault()},B=function(f,ae){var _=ae.node;T&&Qe(_)||(V(_.key,{selected:!k.includes(_.key)}),c||u(!1))};if(n.useImperativeHandle(a,function(){var b;return{scrollTo:(b=j.current)===null||b===void 0?void 0:b.scrollTo,onKeyDown:function(ae){var _,De=ae.which;switch(De){case Oe.UP:case Oe.DOWN:case Oe.LEFT:case Oe.RIGHT:(_=j.current)===null||_===void 0||_.onKeyDown(ae);break;case Oe.ENTER:{if(A){var Se=(A==null?void 0:A.node)||{},Ae=Se.selectable,le=Se.value;Ae!==!1&&B(null,{node:{key:te},selected:!k.includes(le)})}break}case Oe.ESC:u(!1)}},onKeyUp:function(){}}}),x.length===0)return n.createElement("div",{role:"listbox",className:"".concat(r,"-empty"),onMouseDown:ge},d);var q={fieldNames:P};return H&&(q.loadedKeys=H),O&&(q.expandedKeys=O),n.createElement("div",{onMouseDown:ge},A&&i&&n.createElement("span",{style:yr,"aria-live":"assertive"},A.node.value),n.createElement(ar,St({ref:j,focusable:!1,prefixCls:"".concat(r,"-tree"),treeData:x,height:I,itemHeight:y,itemScrollOffset:L,virtual:N!==!1&&G!==!1,multiple:c,icon:Q,showIcon:se,switcherIcon:$,showLine:we,loadData:o?null:ee,motion:Ie,activeKey:te,checkable:T,checkStrictly:!0,checkedKeys:ne,selectedKeys:T?[]:k,defaultExpandAll:Ke},q,{onActiveChange:re,onSelect:B,onCheck:B,onExpand:He,onLoad:Ee,filterTreeNode:Ne,expandAction:F})))},wt=n.forwardRef(br);wt.displayName="OptionList";var rt="SHOW_ALL",nt="SHOW_PARENT",Ze="SHOW_CHILD";function mt(e,t,a,l){var r=new Set(e);return t===Ze?e.filter(function(c){var o=a[c];return!(o&&o.children&&o.children.some(function(u){var i=u.node;return r.has(i[l.value])})&&o.children.every(function(u){var i=u.node;return Qe(i)||r.has(i[l.value])}))}):t===nt?e.filter(function(c){var o=a[c],u=o?o.parent:null;return!(u&&!Qe(u.node)&&r.has(u.key))}):e}var xr=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","listItemScrollOffset","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"];function wr(e){return!e||$t(e)!=="object"}var Ir=n.forwardRef(function(e,t){var a=e.id,l=e.prefixCls,r=l===void 0?"rc-tree-select":l,c=e.value,o=e.defaultValue,u=e.onChange,i=e.onSelect,d=e.onDeselect,s=e.searchValue,N=e.inputValue,I=e.onSearch,y=e.autoClearSearchValue,L=y===void 0?!0:y,E=e.filterTreeNode,P=e.treeNodeFilterProp,V=P===void 0?"value":P,G=e.showCheckedStrategy,F=e.treeNodeLabelProp,m=e.multiple,T=e.treeCheckable,k=e.treeCheckStrictly,be=e.labelInValue,J=e.fieldNames,Ke=e.treeDataSimpleMode,Ve=e.treeData,xe=e.children,Q=e.loadData,se=e.treeLoadedKeys,$=e.onTreeLoad,we=e.treeDefaultExpandAll,X=e.treeExpandedKeys,ee=e.treeDefaultExpandedKeys,H=e.onTreeExpand,Ie=e.treeExpandAction,Ee=e.virtual,ke=e.listHeight,j=ke===void 0?200:ke,x=e.listItemHeight,de=x===void 0?20:x,z=e.listItemScrollOffset,te=z===void 0?0:z,re=e.onDropdownVisibleChange,A=e.dropdownMatchSelectWidth,ne=A===void 0?!0:A,fe=e.treeLine,Ne=e.treeIcon,ve=e.showTreeIcon,he=e.switcherIcon,pe=e.treeMotion,$e=gt(e,xr),Te=Zt(a),Y=T&&!k,Z=T||k,me=k||be,O=Z||m,He=dt(o,{value:c}),ge=ue(He,2),B=ge[0],q=ge[1],b=n.useMemo(function(){return T?G||Ze:rt},[G,T]),f=n.useMemo(function(){return fr(J)},[JSON.stringify(J)]),ae=dt("",{value:s!==void 0?s:N,postState:function(v){return v||""}}),_=ue(ae,2),De=_[0],Se=_[1],Ae=function(v){Se(v),I==null||I(v)},le=Cr(Ve,xe,Ke),ze=hr(le,f),D=ze.keyEntities,R=ze.valueEntities,Le=n.useCallback(function(h){var v=[],p=[];return h.forEach(function(g){R.has(g)?p.push(g):v.push(g)}),{missingRawValues:v,existRawValues:p}},[R]),at=gr(le,De,{fieldNames:f,treeNodeFilterProp:V,filterTreeNode:E}),lt=n.useCallback(function(h){if(h){if(F)return h[F];for(var v=f._title,p=0;p<v.length;p+=1){var g=h[v[p]];if(g!==void 0)return g}}},[f,F]),Re=n.useCallback(function(h){var v=dr(h);return v.map(function(p){return wr(p)?{value:p}:p})},[]),Be=n.useCallback(function(h){var v=Re(h);return v.map(function(p){var g=p.label,M=p.value,w=p.halfChecked,S,C=R.get(M);if(C){var W;g=(W=g)!==null&&W!==void 0?W:lt(C.node),S=C.node.disabled}else if(g===void 0){var oe=Re(B).find(function(We){return We.value===M});g=oe.label}return{label:g,value:M,halfChecked:w,disabled:S}})},[R,lt,Re,B]),ot=n.useMemo(function(){return Re(B)},[Re,B]),It=n.useMemo(function(){var h=[],v=[];return ot.forEach(function(p){p.halfChecked?v.push(p):h.push(p)}),[h,v]},[ot]),it=ue(It,2),Pe=it[0],ct=it[1],ut=n.useMemo(function(){return Pe.map(function(h){return h.value})},[Pe]),Et=sr(Pe,ct,Y,D),st=ue(Et,2),_e=st[0],Ue=st[1],kt=n.useMemo(function(){var h=mt(_e,b,D,f),v=h.map(function(w){var S,C;return(S=(C=D[w])===null||C===void 0||(C=C.node)===null||C===void 0?void 0:C[f.value])!==null&&S!==void 0?S:w}),p=v.map(function(w){var S=Pe.find(function(C){return C.value===w});return{value:w,label:S==null?void 0:S.label}}),g=Be(p),M=g[0];return!O&&M&&ht(M.value)&&ht(M.label)?[]:g.map(function(w){var S;return K(K({},w),{},{label:(S=w.label)!==null&&S!==void 0?S:w.value})})},[f,O,_e,Pe,Be,b,D]),Nt=ur(kt),Tt=ue(Nt,1),Dt=Tt[0],Ge=pt(function(h,v,p){var g=Be(h);if(q(g),L&&Se(""),u){var M=h;if(Y){var w=mt(h,b,D,f);M=w.map(function(U){var ie=R.get(U);return ie?ie.node[f.value]:U})}var S=v||{triggerValue:void 0,selected:void 0},C=S.triggerValue,W=S.selected,oe=M;if(k){var We=ct.filter(function(U){return!M.includes(U.value)});oe=[].concat(ce(oe),ce(We))}var Fe=Be(oe),Ce={preValue:Pe,triggerValue:C},Me=!0;(k||p==="selection"&&!W)&&(Me=!1),mr(Ce,C,h,le,Me,f),Z?Ce.checked=W:Ce.selected=W;var Xe=me?Fe:Fe.map(function(U){return U.value});u(O?Xe:Xe[0],me?null:Fe.map(function(U){return U.label}),Ce)}}),qe=n.useCallback(function(h,v){var p,g=v.selected,M=v.source,w=D[h],S=w==null?void 0:w.node,C=(p=S==null?void 0:S[f.value])!==null&&p!==void 0?p:h;if(!O)Ge([C],{selected:!0,triggerValue:C},"option");else{var W=g?[].concat(ce(ut),[C]):_e.filter(function(ie){return ie!==C});if(Y){var oe=Le(W),We=oe.missingRawValues,Fe=oe.existRawValues,Ce=Fe.map(function(ie){return R.get(ie).key}),Me;if(g){var Xe=Je(Ce,!0,D);Me=Xe.checkedKeys}else{var U=Je(Ce,{checked:!1,halfCheckedKeys:Ue},D);Me=U.checkedKeys}W=[].concat(ce(We),ce(Me.map(function(ie){return D[ie].node[f.value]})))}Ge(W,{selected:g,triggerValue:C},M||"option")}g||!O?i==null||i(C,et(S)):d==null||d(C,et(S))},[Le,R,D,f,O,ut,Ge,Y,i,d,_e,Ue]),Lt=n.useCallback(function(h){if(re){var v={};Object.defineProperty(v,"documentClickClose",{get:function(){return Ye(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),re(h,v)}},[re]),Pt=pt(function(h,v){var p=h.map(function(g){return g.value});if(v.type==="clear"){Ge(p,{},"selection");return}v.values.length&&qe(v.values[0].value,{selected:!1,source:"selection"})}),_t=n.useMemo(function(){return{virtual:Ee,dropdownMatchSelectWidth:ne,listHeight:j,listItemHeight:de,listItemScrollOffset:te,treeData:at,fieldNames:f,onSelect:qe,treeExpandAction:Ie}},[Ee,ne,j,de,te,at,f,qe,Ie]),Mt=n.useMemo(function(){return{checkable:Z,loadData:Q,treeLoadedKeys:se,onTreeLoad:$,checkedKeys:_e,halfCheckedKeys:Ue,treeDefaultExpandAll:we,treeExpandedKeys:X,treeDefaultExpandedKeys:ee,onTreeExpand:H,treeIcon:Ne,treeMotion:pe,showTreeIcon:ve,switcherIcon:he,treeLine:fe,treeNodeFilterProp:V,keyEntities:D}},[Z,Q,se,$,_e,Ue,we,X,ee,H,Ne,pe,ve,he,fe,V,D]);return n.createElement(xt.Provider,{value:_t},n.createElement(bt.Provider,{value:Mt},n.createElement(qt,St({ref:t},$e,{id:Te,prefixCls:r,mode:O?"multiple":void 0,displayValues:Dt,onDisplayValuesChange:Pt,searchValue:De,onSearch:Ae,OptionList:wt,emptyOptions:!le.length,onDropdownVisibleChange:Lt,dropdownMatchSelectWidth:ne}))))}),je=Ir;je.TreeNode=tt;je.SHOW_ALL=rt;je.SHOW_PARENT=nt;je.SHOW_CHILD=Ze;const Er=e=>{const{componentCls:t,treePrefixCls:a,colorBgElevated:l}=e,r=`.${a}`;return[{[`${t}-dropdown`]:[{padding:`${e.paddingXS}px ${e.paddingXS/2}px`},or(a,Ct(e,{colorBgContainer:l})),{[r]:{borderRadius:0,[`${r}-list-holder-inner`]:{alignItems:"stretch",[`${r}-treenode`]:{[`${r}-node-content-wrapper`]:{flex:"auto"}}}}},ir(`${a}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${r}-switcher${r}-switcher_close`]:{[`${r}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};function kr(e,t){return Ht("TreeSelect",a=>{const l=Ct(a,{treePrefixCls:t});return[Er(l)]},lr)(e)}var Nr=globalThis&&globalThis.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]]);return a};const Tr=(e,t)=>{var a,l,{prefixCls:r,size:c,disabled:o,bordered:u=!0,className:i,rootClassName:d,treeCheckable:s,multiple:N,listHeight:I=256,listItemHeight:y=26,placement:L,notFoundContent:E,switcherIcon:P,treeLine:V,getPopupContainer:G,popupClassName:F,dropdownClassName:m,treeIcon:T=!1,transitionName:k,choiceTransitionName:be="",status:J,treeExpandAction:Ke,builtinPlacements:Ve,dropdownMatchSelectWidth:xe,popupMatchSelectWidth:Q,allowClear:se}=e,$=Nr(e,["prefixCls","size","disabled","bordered","className","rootClassName","treeCheckable","multiple","listHeight","listItemHeight","placement","notFoundContent","switcherIcon","treeLine","getPopupContainer","popupClassName","dropdownClassName","treeIcon","transitionName","choiceTransitionName","status","treeExpandAction","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","allowClear"]);const{getPopupContainer:we,getPrefixCls:X,renderEmpty:ee,direction:H,virtual:Ie,popupMatchSelectWidth:Ee,popupOverflow:ke}=n.useContext(Rt),j=X(),x=X("select",r),de=X("select-tree",r),z=X("tree-select",r),{compactSize:te,compactItemClassnames:re}=Wt(x,H),[A,ne]=Jt(x),[fe]=kr(z,de),Ne=ft(F||m,`${z}-dropdown`,{[`${z}-dropdown-rtl`]:H==="rtl"},d,ne),ve=!!(s||N),he=Qt($.suffixIcon,$.showArrow),pe=(a=Q??xe)!==null&&a!==void 0?a:Ee,{status:$e,hasFeedback:Te,isFormItemInput:Y,feedbackIcon:Z}=n.useContext(Ft),me=Xt($e,J),{suffixIcon:O,removeIcon:He,clearIcon:ge}=er(Object.assign(Object.assign({},$),{multiple:ve,showSuffixIcon:he,hasFeedback:Te,feedbackIcon:Z,prefixCls:x,componentName:"TreeSelect"})),B=se===!0?{clearIcon:ge}:se;let q;E!==void 0?q=E:q=(ee==null?void 0:ee("Select"))||n.createElement(tr,{componentName:"Select"});const b=jt($,["suffixIcon","itemIcon","removeIcon","clearIcon","switcherIcon"]),f=n.useMemo(()=>L!==void 0?L:H==="rtl"?"bottomRight":"bottomLeft",[L,H]),ae=rr(Ve,ke),_=zt(R=>{var Le;return(Le=c??te)!==null&&Le!==void 0?Le:R}),De=n.useContext(Bt),Se=o??De,Ae=ft(!r&&z,{[`${x}-lg`]:_==="large",[`${x}-sm`]:_==="small",[`${x}-rtl`]:H==="rtl",[`${x}-borderless`]:!u,[`${x}-in-form-item`]:Y},Ut(x,me,Te),re,i,d,ne),le=R=>n.createElement(cr,{prefixCls:de,switcherIcon:P,treeNodeProps:R,showLine:V}),[ze]=Gt("SelectLike",(l=$.dropdownStyle)===null||l===void 0?void 0:l.zIndex),D=n.createElement(je,Object.assign({virtual:Ie,disabled:Se},b,{dropdownMatchSelectWidth:pe,builtinPlacements:ae,ref:t,prefixCls:x,className:Ae,listHeight:I,listItemHeight:y,treeCheckable:s&&n.createElement("span",{className:`${x}-tree-checkbox-inner`}),treeLine:!!V,suffixIcon:O,multiple:ve,placement:f,removeIcon:He,allowClear:B,switcherIcon:le,showTreeIcon:T,notFoundContent:q,getPopupContainer:G||we,treeMotion:null,dropdownClassName:Ne,dropdownStyle:Object.assign(Object.assign({},$.dropdownStyle),{zIndex:ze}),choiceTransitionName:vt(j,"",be),transitionName:vt(j,"slide-up",k),treeExpandAction:Ke}));return A(fe(D))},Dr=n.forwardRef(Tr),ye=Dr,Lr=At(ye);ye.TreeNode=tt;ye.SHOW_ALL=rt;ye.SHOW_PARENT=nt;ye.SHOW_CHILD=Ze;ye._InternalPanelDoNotUseOrYouWillBeFired=Lr;const Or=ye;export{Or as _};
