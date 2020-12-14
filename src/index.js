import plugin from './wikilink'
if (!window.$docsify) {
  console.error(' 这是一个 docsify 插件，请先引用 docsify 库！')
} else {
  window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
}
