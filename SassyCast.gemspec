require './lib/SassyCast'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = SassyCast::VERSION
  s.date = SassyCast::DATE

  # Gem Details
  s.name = "SassyCast"
  s.rubyforge_project = "SassyCast"
  s.description = %q{Sass API for type conversion.}
  s.summary = %q{SassyCast is a Sass-powered API for type conversion.}
  s.authors = ["Hugo Giraudel"]
  s.email = ["hugo.giraudel@gmail.com"]
  s.homepage = "https://github.com/HugoGiraudel/SassyCast/"

  # README file
  s.files = ["README.md"]

  # CHANGELOG
  s.files += ["CHANGELOG.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("stylesheets/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}
end