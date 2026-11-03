# Redirects from the pre-zine URLs (/publications/, /blog/2026/slug/, ...)
# to the new ones (/codex/, /dispatches/2026/slug/, ...), so old links,
# bookmarks and search results keep working. Each old URL gets a tiny page
# that forwards with a meta refresh and keeps any #fragment (e.g. #member-x).
module Zine
  class Redirects < Jekyll::Generator
    safe true
    priority :lowest

    # old prefix => new prefix
    MOVES = {
      "/publications/" => "/codex/",
      "/projects/" => "/quests/",
      "/blog/" => "/dispatches/",
      "/people/" => "/party/",
      "/teaching/" => "/training/",
    }.freeze

    def generate(site)
      pairs = MOVES.to_a

      site.posts.docs.each { |d| pairs << [old_url(d.url), d.url] }
      (site.collections["projects"]&.docs || []).each { |d| pairs << [old_url(d.url), d.url] }
      site.posts.docs.map { |d| d.date.year }.uniq.each do |y|
        pairs << ["/blog/#{y}/", "/dispatches/#{y}/"]
      end
      site.tags.keys.each do |t|
        slug = Jekyll::Utils.slugify(t)
        pairs << ["/blog/tag/#{slug}/", "/dispatches/tag/#{slug}/"]
      end

      taken = site.pages.map(&:url).to_set
      pairs.uniq.each do |from, to|
        next if from == to || taken.include?(from)

        page = Jekyll::PageWithoutAFile.new(site, site.source, from.delete_prefix("/"), "index.html")
        page.content = html(site.baseurl.to_s + to)
        page.data["layout"] = nil
        page.data["sitemap"] = false
        site.pages << page
      end
    end

    private

    def old_url(url)
      MOVES.each { |old, new| return url.sub(new, old) if url.start_with?(new) }
      url
    end

    def html(to)
      <<~HTML
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>Moved</title>
            <link rel="canonical" href="#{to}">
            <meta name="robots" content="noindex">
            <meta http-equiv="refresh" content="0; url=#{to}">
            <script>location.replace("#{to}" + location.hash);</script>
          </head>
          <body><p>This page moved to <a href="#{to}">#{to}</a>.</p></body>
        </html>
      HTML
    end
  end
end
