
import queryString from 'query-string'
import React from 'react'

class RouterStore {

  constructor(views,startUrl) {

    this.goTo.bind(this)
    this.snapShotLocation = this.snapShotLocation.bind(this)
    this.hookPopStateEventListener = this.hookPopStateEventListener.bind(this)
    this.getCurrentView = this.getCurrentView.bind(this)
    this.views = views;
    this.currentPath = startUrl || '/'
    this.currentView = this.getCurrentView(this.currentPath,this.views)



    this.origin = 'browser'



    this.location = {};



    //this.goTo(location.pathname,'browser')
  }


  getCurrentView (currentPath,views){
    // console.log(views)

/*
     for (var key in object){

     }
/*/ // var x = ()=> <div>not found</div>
     var res =  Object.keys(views).filter((key)=>{
         if (views[key].path === currentPath){
           return true
         }
     })
    //console.log(views[res] || (<div>not found</div>))
    return views[res] || views.NotFound

  }

  snapShotLocation(){
    const l = window.location;
    this.location.hash = l.hash
    this.location.host = l.host
    this.location.hostname = l.hostname
    this.location.href = l.href
    this.location.origin = l.origin
    this.location.pathname = l.pathname
    this.location.port = l.port
    this.location.protocol = l.protocol
    this.location.search = l.search
    this.location.query = queryString.parse(l.search)
  }

  hookPopStateEventListener(){
    window.addEventListener('popstate',(ev) => {
      this.snapShotLocation()
      this.goTo(location.pathname,'browser')
    });
  }

  goTo(path,origin){
    this.origin = origin;
    if (this.currentPath !== path){
      //console.log(this.views);
      this.currentPath = path;
      if (origin !== 'browser'){
        window.history.pushState(null, null, this.currentPath)
        this.location.pathname = path
      }
    }
  //  console.log(this.location);
  }


}

export default RouterStore;






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
