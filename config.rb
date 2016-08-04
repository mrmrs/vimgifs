###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.json', layout: false

# General configuration
config[:layout] = 'default'
config[:css_dir] = 'css'

activate :blog do |blog|
  blog.sources = 'gifs/:title.html'
  blog.permalink = '{title}.html'
  blog.layout = 'gif'
  blog.default_extension = '.erb'
  blog.new_article_template = "#{Dir.pwd}/new_gif_template.erb"
  blog.paginate = true
  blog.page_link = "p{num}"
  blog.per_page = 20
end

activate :directory_indexes

activate :external_pipeline,
  name: :webpack,
  command: build? ? 'webpack --bail' : 'webpack --watch -d',
  source: ".tmp",
  latency: 1
