(this.webpackJsonp=this.webpackJsonp||[]).push([[3],{"1iKv":function(e){e.exports=JSON.parse('{"AlertManagementIntegration":["AlertManagementHttpIntegration","AlertManagementPrometheusIntegration"],"CiVariable":["CiGroupVariable","CiInstanceVariable","CiManualVariable","CiProjectVariable"],"CommitSignature":["GpgSignature","SshSignature","X509Signature"],"CurrentUserTodos":["BoardEpic","Design","Epic","EpicIssue","Issue","MergeRequest"],"DependencyLinkMetadata":["NugetDependencyLinkMetadata"],"DesignFields":["Design","DesignAtVersion"],"Entry":["Blob","Submodule","TreeEntry"],"Eventable":["BoardEpic","Epic"],"Issuable":["Epic","Issue","MergeRequest","WorkItem"],"JobNeedUnion":["CiBuildNeed","CiJob"],"MemberInterface":["GroupMember","ProjectMember"],"NoteableInterface":["AlertManagementAlert","BoardEpic","Design","Epic","EpicIssue","Issue","MergeRequest","Snippet","Vulnerability"],"NoteableType":["Design","Issue","MergeRequest"],"OrchestrationPolicy":["ScanExecutionPolicy","ScanResultPolicy"],"PackageFileMetadata":["ConanFileMetadata","HelmFileMetadata"],"PackageMetadata":["ComposerMetadata","ConanMetadata","MavenMetadata","NugetMetadata","PypiMetadata"],"ResolvableInterface":["Discussion","Note"],"SecurityPolicySource":["GroupSecurityPolicySource","ProjectSecurityPolicySource"],"Service":["BaseService","JiraService"],"TimeboxReportInterface":["Iteration","Milestone"],"Todoable":["AlertManagementAlert","BoardEpic","Commit","Design","Epic","EpicIssue","Issue","MergeRequest","WorkItem"],"User":["MergeRequestAssignee","MergeRequestAuthor","MergeRequestParticipant","MergeRequestReviewer","UserCore"],"VulnerabilityDetail":["VulnerabilityDetailBase","VulnerabilityDetailBoolean","VulnerabilityDetailCode","VulnerabilityDetailCommit","VulnerabilityDetailDiff","VulnerabilityDetailFileLocation","VulnerabilityDetailInt","VulnerabilityDetailList","VulnerabilityDetailMarkdown","VulnerabilityDetailModuleLocation","VulnerabilityDetailTable","VulnerabilityDetailText","VulnerabilityDetailUrl"],"VulnerabilityLocation":["VulnerabilityLocationClusterImageScanning","VulnerabilityLocationContainerScanning","VulnerabilityLocationCoverageFuzzing","VulnerabilityLocationDast","VulnerabilityLocationDependencyScanning","VulnerabilityLocationGeneric","VulnerabilityLocationSast","VulnerabilityLocationSecretDetection"],"WorkItemWidget":["WorkItemWidgetAssignees","WorkItemWidgetDescription","WorkItemWidgetHealthStatus","WorkItemWidgetHierarchy","WorkItemWidgetIteration","WorkItemWidgetLabels","WorkItemWidgetMilestone","WorkItemWidgetNotes","WorkItemWidgetStartAndDueDate","WorkItemWidgetStatus","WorkItemWidgetWeight"]}')},"43WD":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i,r,o,a=n("oj/M"),s=n("mphk");class c{static fetchRequestDetails(e,t){return s.a.get(e,{params:{request_id:t}})}static registerInterceptor(e,t){return c.interceptor=function(n){const[i,r,o,a]=c.callbackParams(n,e);return i&&t(r,o,a),n},s.a.interceptors.response.use(c.interceptor)}static removeInterceptor(){s.a.interceptors.response.eject(c.interceptor),c.interceptor=null}static callbackParams(e,t){var n,i;const r=e.headers&&e.headers["x-request-id"],o=null===(n=e.config)||void 0===n?void 0:n.url,s=e.headers&&Object(a.G)(e.headers["x-gitlab-from-cache"]);return[o!==t&&Boolean(r)&&!s,r,o,null===(i=e.config)||void 0===i?void 0:i.operationName]}}o=null,(r="interceptor")in(i=c)?Object.defineProperty(i,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[r]=o},voi4:function(e,t,n){"use strict";n.d(t,"b",(function(){return _}));n("uHfJ"),n("R0RX"),n("ylB9"),n("3R5X"),n("XexO"),n("ujLG"),n("HaUQ");var i=n("s6J9"),r=n("M5vK"),o=n("xyp/"),a=n("8Lg1"),s=n("hg7r"),c=n("MsML"),l=n("N+uE"),u=n("19ol"),d=n("KaZ4");const p=function(){return(new Date).getTime()},h=function(e){return(p()-e)/1e3};class g{constructor(e){this.visibilityDidChange=this.visibilityDidChange.bind(this),this.connection=e,this.reconnectAttempts=0}start(){this.isRunning()||(this.startedAt=p(),delete this.stoppedAt,this.startPolling(),addEventListener("visibilitychange",this.visibilityDidChange),d.logger.log(`ConnectionMonitor started. stale threshold = ${this.constructor.staleThreshold} s`))}stop(){this.isRunning()&&(this.stoppedAt=p(),this.stopPolling(),removeEventListener("visibilitychange",this.visibilityDidChange),d.logger.log("ConnectionMonitor stopped"))}isRunning(){return this.startedAt&&!this.stoppedAt}recordPing(){this.pingedAt=p()}recordConnect(){this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,d.logger.log("ConnectionMonitor recorded connect")}recordDisconnect(){this.disconnectedAt=p(),d.logger.log("ConnectionMonitor recorded disconnect")}startPolling(){this.stopPolling(),this.poll()}stopPolling(){clearTimeout(this.pollTimeout)}poll(){var e=this;this.pollTimeout=setTimeout((function(){e.reconnectIfStale(),e.poll()}),this.getPollInterval())}getPollInterval(){const{staleThreshold:e,reconnectionBackoffRate:t}=this.constructor;return 1e3*e*(1+t)**Math.min(this.reconnectAttempts,10)*(1+(0===this.reconnectAttempts?1:t)*Math.random())}reconnectIfStale(){this.connectionIsStale()&&(d.logger.log(`ConnectionMonitor detected stale connection. reconnectAttempts = ${this.reconnectAttempts}, time stale = ${h(this.refreshedAt)} s, stale threshold = ${this.constructor.staleThreshold} s`),this.reconnectAttempts+=1,this.disconnectedRecently()?d.logger.log(`ConnectionMonitor skipping reopening recent disconnect. time disconnected = ${h(this.disconnectedAt)} s`):(d.logger.log("ConnectionMonitor reopening"),this.connection.reopen()))}get refreshedAt(){return this.pingedAt?this.pingedAt:this.startedAt}connectionIsStale(){return h(this.refreshedAt)>this.constructor.staleThreshold}disconnectedRecently(){return this.disconnectedAt&&h(this.disconnectedAt)<this.constructor.staleThreshold}visibilityDidChange(){var e=this;"visible"===document.visibilityState&&setTimeout((function(){!e.connectionIsStale()&&e.connection.isOpen()||(d.logger.log("ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = "+document.visibilityState),e.connection.reopen())}),200)}}g.staleThreshold=6,g.reconnectionBackoffRate=.15;var f=g;const b=Object(d.createConsumer)();b.connection&&(b.connection.monitor=new f(b.connection));var m=b,y=n("wC1f");class v extends i.a{request(e){return new l.a((function(t){const n=m.subscriptions.create({channel:"GraphqlChannel",query:e.query?Object(u.a)(e.query):null,variables:e.variables,operationName:e.operationName,nonce:Object(y.a)()[0]},{received(e){e.errors?t.error(e.errors):e.result&&t.next(e.result),e.more||t.complete()}});return{unsubscribe(){n.unsubscribe()}}}))}}n("TMxP"),n("iQ9A"),n("WmlO"),n("W9Nl");const C=new i.a((function(e,t){return t(e).flatMap((function(i){const{errors:r=[]}=i,o=r.find((function(e){var t;return null==e||null===(t=e.extensions)||void 0===t?void 0:t.needs_captcha_response}));if(o){const i=o.extensions.captcha_site_key,r=o.extensions.spam_log_id;return new l.a((function(o){Promise.all([n.e(37),n.e(987)]).then(n.bind(null,"xV3j")).then((function(e){let{waitForCaptchaToBeSolved:t}=e;return t(i)})).then((function(n){e.setContext({headers:{"X-GitLab-Captcha-Response":n,"X-GitLab-Spam-Log-Id":r}}),t(e).subscribe(o)})).catch((function(e){o.error(e),o.complete()}))}))}return l.a.of(i)}))}));var M=n("1iKv"),A=n("3mMT"),D=n.n(A),I=n("pY+i"),S=n.n(I),R=(n("N8nX"),n("c5nz"),n("OZcL"),n("x5O4"),n("lxnW"),n("5sVn"),n("4xRc"),n("LM9r"),n("51O6"),n("une/"),n("Kypc"),n("yt6R"),n("6v3E"),n("RsOv"),n("JHu5"),n("XUYm"),n("g+EE"),n("mqnC"));const w=function(e){return D()(e,(function(e){return void 0!==e}))};class P extends i.a{constructor(){var e;super(),this.startupCalls=new Map,this.parseStartupCalls((null===(e=window.gl)||void 0===e?void 0:e.startup_graphql_calls)||[])}parseStartupCalls(e){var t=this;e.forEach((function(e){var n,i,r,o;const{query:a,variables:s,fetchCall:c}=e,l=null===(n=Object(R.a)(a))||void 0===n||null===(i=n.definitions)||void 0===i||null===(r=i.find((function(e){return"OperationDefinition"===e.kind})))||void 0===r||null===(o=r.name)||void 0===o?void 0:o.value;l&&t.startupCalls.set(l,{variables:s,fetchCall:c})}))}disable(){this.request=P.noopRequest,this.startupCalls=null}request(e,t){if(this.startupCalls&&0===this.startupCalls.size)return this.disable(),t(e);const{operationName:n}=e;if(!this.startupCalls.has(n))return t(e);const{variables:i,fetchCall:r}=this.startupCalls.get(n);return this.startupCalls.delete(n),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return S()(w(e),w(t))}(i,e.variables)?new l.a((function(n){r.then((function(t){if(!t.ok)throw new Error("fetchCall failed");return e.setContext({response:t}),t.json()})).then((function(e){if(e&&(e.errors||!e.data))throw new Error("Received GraphQL error");n.next(e),n.complete()})).catch((function(){t(e).subscribe({next:function(e){n.next(e)},error:function(e){n.error(e)},complete:n.complete.bind(n)})}))})):t(e)}}var k,q,E;E=function(e,t){return t(e)},(q="noopRequest")in(k=P)?Object.defineProperty(k,q,{value:E,enumerable:!0,configurable:!0,writable:!0}):k[q]=E;var x=n("AFSh"),T=n("yYHy"),W=n("43WD"),V=n("odYa");const L=n.n(V)()((function(){const{feature_category:e}=gon;return e?new i.a((function(t,n){return t.setContext((function(t){let{headers:n={}}=t;return{headers:{...n,"x-gitlab-feature-category":e}}})),n(t)})):null}));var O=n("eLEC"),N=n("AZK4");const j=function(){return Object(O.a)((function(e){let{networkError:t}=e;if(t&&Object(N.a)())return new l.a((function(){}))}))},_={CACHE_FIRST:"cache-first",CACHE_AND_NETWORK:"cache-and-network",NETWORK_ONLY:"network-only",NO_CACHE:"no-cache",CACHE_ONLY:"cache-only"},U={Repository:{merge:!0},UserPermissions:{merge:!0},MergeRequestPermissions:{merge:!0},ContainerRepositoryConnection:{merge:!0},TimelogConnection:{merge:!0},BranchList:{merge:!0},InstanceSecurityDashboard:{merge:!0},PipelinePermissions:{merge:!0},DesignCollection:{merge:!0},TreeEntry:{keyFields:["webPath"]}},B=function(e,t){const[n,i]=e.split(t);if(!i)return e;const r=decodeURIComponent(i),o=Object(T.C)(r);if(!o.query)return e;const a=o.query.split(/\s+|\n/).join(" ").trim();o.query=a;return`${t}?${Object(T.A)(o)}`},H=[];let F=0;Object.defineProperty(window,"pendingApolloRequests",{get:()=>H.reduce((function(e,t){var n,i;return e+((null==t||null===(n=t.queryManager)||void 0===n||null===(i=n.inFlightLinkObservables)||void 0===i?void 0:i.size)||0)}),F)});t.a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{baseUrl:n,batchMax:l=10,cacheConfig:u={typePolicies:{},possibleTypes:{}},fetchPolicy:d=_.CACHE_FIRST,typeDefs:p,path:h="/api/graphql",useGet:g=!1}=t;let f=null,b=`${gon.relative_url_root||""}${h}`;n&&(b=`${n}${b}`.replace(/\/{3,}/g,"/"));const m={uri:b,headers:{[x.a.headerKey]:x.a.token},credentials:"same-origin",batchMax:l},y=function(e,t){return fetch(B(e,b),t)},A=i.a.split((function(){return g}),new r.a({...m,fetch:y}),new s.a(m)),D=i.a.split((function(e){return e.getContext().hasUpload||e.getContext().isSingleRequest}),Object(c.createUploadLink)(m)),I=new i.a((function(e,t){return t(e).map((function(t){const n=e.getContext().response;return W.a.interceptor&&W.a.interceptor({config:{url:n.url,operationName:e.operationName},headers:{"x-request-id":n.headers.get("x-request-id"),"x-gitlab-from-cache":n.headers.get("x-gitlab-from-cache")}}),t}))})),S=function(e){let{query:{definitions:t}}=e;return t.some((function(e){let{kind:t,operation:n}=e;return"OperationDefinition"===t&&"subscription"===n}))},R=function(e){var t;return((null==e||null===(t=e.query)||void 0===t?void 0:t.definitions)||[]).some((function(e){return"mutation"===e.operation}))},w=new i.a((function(e,t){return R(e)&&(F+=1),t(e).map((function(t){return R(e)&&(F-=1),t}))})),k=i.a.split(S,new v,i.a.from([j(),L(),w,I,new P,C,D,A].filter(Boolean)));return f=new o.a({typeDefs:p,link:k,connectToDevTools:!1,cache:new a.a({...u,typePolicies:{...U,...u.typePolicies},possibleTypes:{...M,...u.possibleTypes}}),resolvers:e,defaultOptions:{query:{fetchPolicy:d}}}),H.push(f),f}},wC1f:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n("SEpv"),r=n.n(i),o=(n("0no1"),n("3R5X"),n("gdbl"),n("uHfJ"),n("R0RX"),n("psuT")),a=n("DsFU"),s=n.n(a),c=n("aiA4");function l(e){return e.reduce((function(t,n,i){let o=0;return Number.isInteger(n)?o=n:r()(n)&&(o=s()(n)),t+(e.length-i)*o}),0)}function u(){let e;for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e=n.length?l(n):Math.floor(Math.random()*10**15),new o.a(e)}function d(e){const t=[];for(let n=0;n<=3;n+=1){const n=new ArrayBuffer(4),i=new DataView(n);i.setUint32(0,e.randomNumber()),t.push(i.getUint8(0),i.getUint8(1),i.getUint8(2),i.getUint8(3))}return t}function p(){let{seeds:e=[],count:t=1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=u(...e);return Array(t).fill(0).map((function(){return Object(c.a)({random:d(n)})}))}}}]);
//# sourceMappingURL=3.e1d65fbb.chunk.js.map