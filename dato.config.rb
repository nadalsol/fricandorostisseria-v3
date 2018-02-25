# dato.config.rb
directory "_comidas" do
  dato.comidas.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "food",
        title: item.title
      }
      content item.description
    end
  end
end
directory "_cenas" do
  dato.cenas.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "food",
        title: item.title
      }
      content item.description
    end
  end
end
directory "_bebidas" do
  dato.bebidas.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "food",
        title: item.title
      }
      content item.description
    end
  end
end
directory "_encargos" do
  dato.encargos.each do |item|
    create_post "#{item.title.parameterize}.md" do
      frontmatter :yaml, {
        layout: "food",
        title: item.title
      }
      content item.description
    end
  end
end
