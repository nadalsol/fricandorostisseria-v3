# dato.config.rb
directory "_menus" do
  dato.menus.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "menu",
        title: item.title,
        price: item.price
      }
      content item.description
    end
  end
end
