// Docsify plugin functions
function plugin(hook, vm) {
    hook.beforeEach(function (content) {
      return content
    })
    hook.afterEach(function (html, next) {
      // 解析成 html 后调用。
      // beforeEach 和 afterEach 支持处理异步逻辑

      var index = location.hash.lastIndexOf("\/");
      var dir = location.hash.substring(0,index+1);

      let res = html.replace(/<p>([\s\S]+?)<\/p>/g, function(para){
        const eachParaRes = para.replace(/\[\[([^\[\]]+)\]\]/g, function(content){
          const innerContent = content.replace('[[', '').replace(']]', '')
          const splits = innerContent.split('|')
          // [[click here|link]] = 创建一个链接，指向内部的wiki页面'Link', 链接文字是'click here'.
          const link = splits.length === 2 ? `${splits[0].trim()}` : innerContent
          const linkSplits = link.split('#')
          const linkBase = linkSplits.length===2?linkSplits[0]: link;
          const linkTopicParam = linkSplits.length===2? `?id=${linkSplits[1]}`:'';
          const showText = splits.length === 2 ? `${splits[1].trim()}` : innerContent
          if(linkBase.indexOf('\/')===0){//absolute path
            return `<a href="#${linkBase}${linkTopicParam}">${showText}</a>`
          }else{
            return `<a href="${dir}${linkBase}${linkTopicParam}">${showText}</a>`
          }
        })
        return eachParaRes
      })
      next(res)
    })
  }

  export default plugin
