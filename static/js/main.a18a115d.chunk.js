(this.webpackJsonpbook_spa=this.webpackJsonpbook_spa||[]).push([[0],{31:function(e,t,s){},38:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(32),c=s.n(r),i=s(9),o=s(2),l=(s(38),s(0));var b=function(){return Object(l.jsx)("div",{className:"nav",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/Bestseller",children:"Bestseller"}),Object(l.jsx)(i.b,{to:"/BrandNew",children:"BrandNew"}),Object(l.jsx)(i.b,{to:"/Wise",children:"Wise"})]})})},j=s(8),d=s.n(j),p=s(11),u=s(12),h=s(13),x=s(16),O=s(15),k=s(14),m=s.n(k);s(64);var v=function(e){var t=e.cover,s=e.title,a=e.author,n=e.link,r=e.description;return Object(l.jsxs)("div",{className:"books_books",children:[Object(l.jsx)("a",{href:n,children:Object(l.jsx)("img",{className:"books_cover",src:t,alt:s})}),Object(l.jsxs)("div",{className:"books_info",children:[Object(l.jsx)("h3",{className:"books_title",children:s}),Object(l.jsx)("h5",{className:"books_author",children:a}),Object(l.jsx)("p",{className:"books_description",children:r})]})]})},g=(s(65),function(e){Object(x.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,book:{}},e.getBestList=Object(p.a)(d.a.mark((function t(){var s,a,n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://www.aladin.co.kr/ttb/api/ItemList.aspx?","ttbkey=ttbgyb05011150001","&SearchTarget=Book&QueryType=BestSeller&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1","http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgyb05011150001&SearchTarget=Book&QueryType=BestSeller&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1",t.next=6,m.a.get("http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgyb05011150001&SearchTarget=Book&QueryType=BestSeller&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1");case 6:for(s=t.sent,a=s.data.item,n=new Date,r=n.getDate(),c=11*r;c>49;)c=Math.floor(3*c/5);e.setState({book:a[c],isLoading:!1});case 13:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getBestList()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.book;return Object(l.jsx)("section",{className:"container ",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("span",{children:Object(l.jsx)("h1",{children:"\uc624\ub298\uc758 \ucd94\ucc9c \ub3c4\uc11c"})}),Object(l.jsx)("div",{className:"recommend",children:Object(l.jsx)(v,{cover:s.cover,title:s.title,author:s.author,link:s.link,description:s.description},s.isbn)})]})})}}]),s}(n.a.Component)),w=(s(66),s(31),function(e){Object(x.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,books:[]},e.getBestList=Object(p.a)(d.a.mark((function t(){var s,a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://www.aladin.co.kr/ttb/api/ItemList.aspx?/","ttbkey=ttbgyb05011150001","&SearchTarget=Book&QueryType=BestSeller&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1",s="http://www.aladin.co.kr/ttb/api/ItemList.aspx?/ttbkey=ttbgyb05011150001&SearchTarget=Book&QueryType=BestSeller&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1",console.log(s),t.next=7,m.a.get(s);case 7:a=t.sent,n=a.data.item,e.setState({books:n,isLoading:!1});case 10:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getBestList()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.books;return Object(l.jsx)("section",{className:"container ",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(l.jsx)("div",{className:"books",children:s.map((function(e){return Object(l.jsx)(v,{cover:e.cover,title:e.title,author:e.author,link:e.link,description:e.description},e.isbn)}))})})}}]),s}(n.a.Component)),y=function(e){Object(x.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,books:[]},e.getBestList=Object(p.a)(d.a.mark((function t(){var s,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemList.aspx?","ttbkey=ttbgyb05011150001","&SearchTarget=Book&QueryType=ItemNewSpecial&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1","https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgyb05011150001&SearchTarget=Book&QueryType=ItemNewSpecial&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1",t.next=6,m.a.get("https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgyb05011150001&SearchTarget=Book&QueryType=ItemNewSpecial&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1");case 6:s=t.sent,a=s.data.item,e.setState({books:a,isLoading:!1});case 9:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getBestList()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.books;return Object(l.jsx)("section",{className:"container ",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(l.jsx)("div",{className:"books",children:s.map((function(e){return Object(l.jsx)(v,{cover:e.cover,title:e.title,author:e.author,link:e.link,description:e.description},e.isbn)}))})})}}]),s}(n.a.Component);s(67);var f=function(){return Object(l.jsxs)("div",{className:"wise_box",children:[Object(l.jsxs)("div",{className:"wise_container",children:[Object(l.jsx)("span",{children:"\u201c\ud545\uae30\ub294 \uc815\ud655\ud55c \uc0ac\ub78c\uc744 \ub9cc\ub4e4\uace0, \ub2f4\ub860\uc740 \uc7ac\uce58 \uc788\ub294 \uc0ac\ub78c\uc744 \ub9cc\ub4e4\uba70, \ub3c5\uc11c\ub294 \uc644\uc131\ub41c \uc0ac\ub78c\uc744 \ub9cc\ub4e0\ub2e4.\u201d"}),Object(l.jsx)("span",{children:"\u2212 \ud504\ub79c\uc2dc\uc2a4 \ubca0\uc774\ucee8 -"})]}),Object(l.jsxs)("div",{className:"wise_container",children:[Object(l.jsx)("span",{children:"\u201c\ud55c \uad8c\uc758 \ucc45\uc740 \uc6b0\ub9ac \uc548\uc758 \uc5bc\uc5b4\ubd99\uc740 \ubc14\ub2e4\ub97c \ubd80\uc218\ub294 \ub3c4\ub07c\uc5ec\uc57c \ud55c\ub2e4.\u201d"}),Object(l.jsx)("span",{children:"\u2212 \ud504\ub780\uce20 \uce74\ud504\uce74 -"})]}),Object(l.jsxs)("div",{className:"wise_container",children:[Object(l.jsx)("span",{children:"\u201c\ubaa8\ub4e0 \uc591\uc11c\ub97c \uc77d\ub294 \uac83\uc740 \uc9c0\ub09c \uba87 \uc138\uae30 \ub3d9\uc548 \uac78\uce5c \uac00\uc7a5 \ud6cc\ub96d\ud55c \uc0ac\ub78c\ub4e4\uacfc \ub300\ud654 \ud558\ub294 \uac83\uacfc \uac19\ub2e4.\u201d"}),Object(l.jsx)("span",{children:"\u2212 \ub370\uce74\ub974\ud2b8 -"})]}),Object(l.jsxs)("div",{className:"wise_container",children:[Object(l.jsx)("span",{children:"\u201c\ub54c\ub85c \ub3c5\uc11c\ub780 \ub3c5\uc790\ub97c \uac00\ub974\uce5c\ub2e4\uae30\ubcf4\ub2e4 \uba38\ub9ac\ub97c \ub3c4\ub9ac\uc5b4 \uc0b0\ub9cc\ud558\uac8c \ud55c\ub2e4. \ub36e\uc5b4\ub193\uace0 \ub9ce\uc740 \ucc45\uc744 \uc77d\ub294 \uac83\ubcf4\ub2e4 \uba87\uba87 \uc88b\uc740 \uc800\uc790\uc758 \ucc45\uc744 \uace8\ub77c \uc77d\ub294 \ud3b8\uc774 \ud6e8\uc52c \ub354 \uc720\uc775\ud558\ub2e4.\u201d"}),Object(l.jsx)("span",{children:"\u2212 \ud1a8\uc2a4\ud1a0\uc774 -"})]})]})};var B=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)("div",{className:"nav_box",children:Object(l.jsx)(b,{})}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(o.a,{path:"/Bestseller",component:w}),Object(l.jsx)(o.a,{path:"/BrandNew",component:y}),Object(l.jsx)(o.a,{path:"/Wise",component:f})]})};c.a.render(Object(l.jsx)(B,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.a18a115d.chunk.js.map