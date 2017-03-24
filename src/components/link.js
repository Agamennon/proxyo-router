import React from 'react';
import urlParse from 'url-parse'
export default class Link extends React.Component {

  //static contextTypes = { proxyoStores: React.PropTypes.object };
  static contextTypes = {
    proxyoStores: React.PropTypes.object
  };

  constructor(props,context){
    super(...arguments)
  }

  click(e){
    e.preventDefault();
    this.context.proxyoStores.router.goTo(this.props.path,this.props.search);
  }

  render() {

    console.log(this.context);
    const { path, search, option, ...rest } = this.props;
    let href = `${path}`;
    if (search) href = href + `?${urlParse.qs.stringify(search)}`;
    return (
        <a href={href} {...rest} onClick={this.click.bind(this)}>{this.props.children}</a>
    );
  }
}


/*    <a href={href} {...rest} onClick={this.click.bind(this)}>{this.props.children}</a>*/