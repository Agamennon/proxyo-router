
import urlParse from 'url-parse'
import React from 'react'
import {observable,action} from  'proxyo'
import Rr from 'route-recognizer'


var rr = new Rr();

function isNotEmpty(obj) {
  if (!obj){
    return false
  }
  return Object.keys(obj).length !== 0;
}


function changeView (pathname,query){

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



/*   @action
   goTo (pathname,query,origin){
    console.log('this from goto', this)
    let targetUrl =  (isNotEmpty(query)) ? pathname+ '?' +urlParse.qs.stringify(query): pathname
    let currentUrl =  (isNotEmpty(this.location.query)) ? this.location.pathname + '?' + urlParse.qs.stringify(this.location.query) : this.location.pathname

    if (targetUrl !== currentUrl){
      this.location = new urlParse(targetUrl,true)
      changeView.call(this,pathname,query)
      if (origin !== 'silent'){
        window.history.pushState(null, null, targetUrl)
      }
    }
  }*/

  goTo = action(function(pathname,query,origin){

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

/*   goTo = Action('goTo',function (pathname,query,origin){
    console.log(this)
    let targetUrl =  (isNotEmpty(query)) ? pathname+ '?' +urlParse.qs.stringify(query): pathname
    let currentUrl =  (isNotEmpty(this.location.query)) ? this.location.pathname + '?' + urlParse.qs.stringify(this.location.query) : this.location.pathname

    if (targetUrl !== currentUrl){
      this.location = new urlParse(targetUrl,true)
      changeView.call(this,pathname,query)
      if (origin !== 'silent'){
        window.history.pushState(null, null, targetUrl)
      }
    }
  })*/

}

export default RouterStore;

