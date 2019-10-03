# dato.config.rb
directory "_comidas" do
  dato.comidas.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "home",
        title: item.title,
        order: item.order
      }
      content item.description
    end
  end
end
directory "_bebidas" do
  dato.bebidas.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "home",
        title: item.title,
        order: item.order
      }
      content item.description
    end
  end
end
directory "_encargos" do
  dato.encargos.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "home",
        title: item.title,
        order: item.order
      }
      content item.description
    end
  end
end
