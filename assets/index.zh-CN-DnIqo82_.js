import{j as e,ak as t}from"./index-BoH_1I5s.js";import{C as s}from"./CodeBlock-CP-Bxw1g.js";import{C as r}from"./Contributor-B9AchLV8.js";function l(){const n=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],d=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return e.jsx(e.Fragment,{children:e.jsx(t,{columns:n,data:d})})}function o(){const n=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],d=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return e.jsx(e.Fragment,{children:e.jsx(t,{columns:n,data:d,stripe:!0})})}function c(){const n=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],d=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return e.jsx(e.Fragment,{children:e.jsx(t,{columns:n,data:d,border:!0})})}function a(n){const d={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d.h1,{children:"Table 表格"}),`
`,`
`,e.jsx(d.p,{children:"用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。"}),`
`,e.jsx(d.h2,{children:"基础表格"}),`
`,e.jsx(d.p,{children:"基础的表格展示用法。"}),`
`,e.jsx(s,{name:"TableBasic",children:e.jsx(l,{})}),`
`,e.jsx(d.h2,{children:"带斑马纹表格"}),`
`,e.jsx(d.p,{children:"使用带斑马纹的表格，可以更容易区分出不同行的数据。"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"stripe"})," 可以创建带斑马纹的表格。 如果 ",e.jsx(d.code,{children:"true"}),", 表格将会带有斑马纹。"]}),`
`,e.jsx(s,{name:"TableStripe",children:e.jsx(o,{})}),`
`,e.jsx(d.h2,{children:"带边框表格"}),`
`,e.jsxs(d.p,{children:["默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 ",e.jsx(d.code,{children:"border"})," 属性，把该属性设置为 ",e.jsx(d.code,{children:"true"})," 即可启用。"]}),`
`,e.jsx(s,{name:"TableBorder",children:e.jsx(c,{})}),`
`,e.jsx(d.h2,{children:"Table 属性"}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"属性名"}),e.jsx(d.th,{children:"说明"}),e.jsx(d.th,{children:"类型"}),e.jsx(d.th,{children:"默认值"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"columns"}),e.jsx(d.td,{children:"表格列的配置描述"}),e.jsx(d.td,{children:"any[]"}),e.jsx(d.td,{children:"—"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"data"}),e.jsx(d.td,{children:"显示的数据"}),e.jsx(d.td,{children:"any[]"}),e.jsx(d.td,{children:"—"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"stripe"}),e.jsx(d.td,{children:"是否为斑马纹 table"}),e.jsx(d.td,{children:"boolean"}),e.jsx(d.td,{children:"false"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"border"}),e.jsx(d.td,{children:"是否带有纵向边框"}),e.jsx(d.td,{children:"boolean"}),e.jsx(d.td,{children:"false"})]})]})]}),`
`,e.jsx(d.h2,{children:"贡献者"}),`
`,e.jsx(r,{path:"packages/Table/index.zh-CN.mdx"})]})}function j(n={}){const{wrapper:d}=n.components||{};return d?e.jsx(d,{...n,children:e.jsx(a,{...n})}):a(n)}export{j as default};
