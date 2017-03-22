
import urlParse from 'url-parse'
import React from 'react'
import {observable,Action} from  'proxyo'
import Rr from 'route-recognizer'


var rr = new Rr();

function isNotEmpty(obj) {
  if (!obj){
    return false
  }
  return Object.keys(obj).length !== 0;
}


function changeView (pathname,query){
  console.log(pathname)
  var res = rr.recognize(pathname);

  this.currentView =  res ? res[0].handler : this.views.NotFound

  this.currentView && this.currentView.onEnter && this.currentView.onEnter()
  //todo Choose view based on http-hash parameters
 /* var res =  Object.keys(this.views).filter((key)=>{
    if (this.views[key].path === pathname){
      return true
    }
  })
  if (res){
    console.log('view is changed to ',res , pathname)
    this.currentView = this.views[res] || this.views.NotFound
  }*/
}

function hookPopStateEventListener(){
  window.addEventListener('popstate',(ev) => {
    console.log('popstete event!')
    this.goTo(window.location.pathname,urlParse.qs.parse(window.location.search),'silent')
  });
}

function testHandler(){
  console.log('test handler')
}

class RouterStore {

  constructor(views,startUrl) {


    this.location = {}
    this.views = views
  /*  rr.add([{path:'/',handler:{a:'gui'}}])
    console.log(rr.recognize('/'))*/
    Object.keys(this.views).forEach((key)=>{
    //  console.log(key)

      let pathFromView = this.views[key].path
  //    console.log({path:pathFromView,handler:this.views[key]})
      rr.add([{path:pathFromView,handler:this.views[key]}])
    });

    this.currentView;

    hookPopStateEventListener.call(this)

    let parsedUrl = new urlParse(startUrl || window.location.href,true)
    this.goTo(parsedUrl.pathname,parsedUrl.query,startUrl ? '' : 'silent')

  }

   goTo = Action('goTo',function (pathname,query,origin){

    let targetUrl =  (isNotEmpty(query)) ? pathname+ '?' +urlParse.qs.stringify(query): pathname
    let currentUrl =  (isNotEmpty(this.location.query)) ? this.location.pathname + '?' + urlParse.qs.stringify(this.location.query) : this.location.pathname

    if (targetUrl !== currentUrl){
      this.location = new urlParse(targetUrl,true)
      changeView.call(this,pathname,query)
      if (origin !== 'silent'){
        window.history.pushState(null, null, targetUrl)
      }
    }
  })

}

export default RouterStore;



/*  const l = window.location;
 this.location.hash = l.hash
 this.location.host = l.host
 this.location.hostname = l.hostname
 this.location.href = l.href
 this.location.origin = l.origin
 this.location.pathname = l.pathname
 this.location.port = l.port
 this.location.protocol = l.protocol
 this.location.search = l.search
 this.location.query = urlParse.qs.parse(l.search)
 console.log(this.location);*/


/*


 class RouterStore {

 @observable params = {};
 @observable queryParams = {};
 @observable currentView;

 constructor() {
 this.goTo = this.goTo.bind(this);
 }

 @action goTo(view, paramsObj, store, queryParamsObj) {

 const nextPath = view.replaceUrlParams(paramsObj, queryParamsObj);
 const pathChanged = nextPath !== this.currentPath;

 if (!pathChanged) {
 return;
 }

 const rootViewChanged = !this.currentView || (this.currentView.rootPath !== view.rootPath);
 const currentParams = toJS(this.params);
 const currentQueryParams = toJS(this.queryParams);

 const beforeExitResult = (rootViewChanged && this.currentView && this.currentView.beforeExit) ? this.currentView.beforeExit(this.currentView, currentParams, store, currentQueryParams) : true;
 if (beforeExitResult === false) {
 return;
 }

 const beforeEnterResult = (rootViewChanged && view.beforeEnter) ? view.beforeEnter(view, currentParams, store, currentQueryParams) : true
 if (beforeEnterResult === false) {
 return;
 }

 rootViewChanged && this.currentView && this.currentView.onExit && this.currentView.onExit(this.currentView, currentParams, store, currentQueryParams);

 this.currentView = view;
 this.params = toJS(paramsObj);
 this.queryParams = toJS(queryParamsObj);
 const nextParams = toJS(paramsObj);
 const nextQueryParams = toJS(queryParamsObj);

 rootViewChanged && view.onEnter && view.onEnter(view, nextParams, store, nextQueryParams);
 !rootViewChanged && this.currentView && this.currentView.onParamsChange && this.currentView.onParamsChange(this.currentView, nextParams, store, nextQueryParams);
 }

 @computed get currentPath() {
 return this.currentView ? this.currentView.replaceUrlParams(this.params, this.queryParams) : '';
 }
 }

 export default RouterStore;*/
